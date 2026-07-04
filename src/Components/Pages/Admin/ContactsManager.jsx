"use client";

import { useState, useTransition } from "react";
import { Phone, Mail, MailOpen, Clock, Trash2 } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { setContactStatus, deleteContact } from "@/Components/actions/adminContacts";
import ConfirmDialog from "./ConfirmDialog";

function formatDate(value) {
  if (!value) return "";
  try {
    return new Date(value).toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return value;
  }
}

const ContactsManager = ({ contacts }) => {
  const [filter, setFilter] = useState("all");
  const [statusTarget, setStatusTarget] = useState(null);
  const [statusBusy, setStatusBusy] = useState(false);
  const [confirmTarget, setConfirmTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [, startTransition] = useTransition();

  const visible = contacts.filter((c) =>
    filter === "all" ? true : c.status === filter
  );

  const confirmStatus = () => {
    if (!statusTarget) return;
    const c = statusTarget;
    const next = c.status === "unread" ? "read" : "unread";
    setStatusBusy(true);
    startTransition(async () => {
      await setContactStatus(c.id, next);
      setStatusBusy(false);
      setStatusTarget(null);
    });
  };

  const confirmDelete = () => {
    if (!confirmTarget) return;
    const id = confirmTarget.id;
    setDeleting(true);
    startTransition(async () => {
      await deleteContact(id);
      setDeleting(false);
      setConfirmTarget(null);
    });
  };

  return (
    <div className="space-y-4">
      {/* Filter */}
      <Tabs value={filter} onValueChange={setFilter}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="read">Read</TabsTrigger>
        </TabsList>
      </Tabs>

      {visible.length === 0 ? (
        <Card className="p-10 text-center text-muted-foreground">
          No leads to show.
        </Card>
      ) : (
        <ul className="space-y-3">
          {visible.map((c) => {
            const busy =
              (statusBusy && statusTarget?.id === c.id) ||
              (deleting && confirmTarget?.id === c.id);
            const unread = c.status === "unread";
            return (
              <Card
                key={c.id}
                className={`p-4 md:p-5 gap-0 transition ${busy ? "opacity-60" : ""}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-foreground">{c.name}</h3>
                      {unread && <Badge>Unread</Badge>}
                    </div>

                    <p className="mt-1 font-medium text-foreground">{c.subject}</p>
                    <p className="mt-1 text-muted-foreground whitespace-pre-wrap break-words">
                      {c.message}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5" />
                        <a href={`tel:${c.phone}`} className="hover:underline">
                          {c.phone}
                        </a>
                      </span>
                      {c.email && (
                        <span className="flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5" />
                          <a href={`mailto:${c.email}`} className="hover:underline break-all">
                            {c.email}
                          </a>
                        </span>
                      )}
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {formatDate(c.created_at)}
                      </span>
                    </div>
                  </div>

                  {/* Actions — full labels on all screen sizes */}
                  <div className="flex sm:flex-row md:flex-col gap-2 shrink-0">
                    <Button
                      size="sm"
                      variant={unread ? "default" : "secondary"}
                      className="flex-1 md:flex-none"
                      onClick={() => setStatusTarget(c)}
                      disabled={busy}
                    >
                      {unread ? <MailOpen /> : <Mail />}
                      {unread ? "Mark read" : "Mark unread"}
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="flex-1 md:flex-none"
                      onClick={() => setConfirmTarget(c)}
                      disabled={busy}
                    >
                      <Trash2 />
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </ul>
      )}

      {/* Read / unread confirmation */}
      <ConfirmDialog
        open={!!statusTarget}
        onOpenChange={(open) => !open && setStatusTarget(null)}
        title={statusTarget?.status === "unread" ? "Mark as read?" : "Mark as unread?"}
        description={
          statusTarget
            ? `Change the status of the lead from “${statusTarget.name}”.`
            : ""
        }
        confirmLabel={
          statusTarget?.status === "unread" ? "Mark as read" : "Mark as unread"
        }
        confirmVariant="default"
        loading={statusBusy}
        onConfirm={confirmStatus}
      />

      {/* Delete confirmation */}
      <ConfirmDialog
        open={!!confirmTarget}
        onOpenChange={(open) => !open && setConfirmTarget(null)}
        title="Delete lead?"
        description={
          confirmTarget
            ? `The lead from “${confirmTarget.name}” will be permanently removed. This cannot be undone.`
            : ""
        }
        confirmLabel="Delete"
        confirmVariant="destructive"
        loading={deleting}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default ContactsManager;
