"use client";

import { useState, useTransition } from "react";
import { Phone, Mail, MailOpen, Clock, Trash2 } from "lucide-react";

import { Card } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs";
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
                  <div className="min-w-0 space-y-3">
                    {/* Name */}
                    <div className="flex items-start gap-2 flex-wrap">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Name
                        </p>
                        <h3 className="font-semibold text-foreground">{c.name}</h3>
                      </div>
                      {unread && <Badge className="mt-1">Unread</Badge>}
                    </div>

                    {/* Subject */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Subject
                      </p>
                      <p className="font-medium text-foreground">{c.subject}</p>
                    </div>

                    {/* Message */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Message
                      </p>
                      <p className="text-foreground whitespace-pre-wrap break-words">
                        {c.message}
                      </p>
                    </div>

                    {/* Contact details */}
                    <div className="grid gap-3 sm:grid-cols-3 pt-1 border-t">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                          <Phone className="h-3 w-3" /> Phone
                        </p>
                        <a href={`tel:${c.phone}`} className="text-foreground hover:underline">
                          {c.phone}
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                          <Mail className="h-3 w-3" /> Email
                        </p>
                        {c.email ? (
                          <a
                            href={`mailto:${c.email}`}
                            className="text-foreground hover:underline break-all"
                          >
                            {c.email}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                          <Clock className="h-3 w-3" /> Received
                        </p>
                        <p className="text-foreground">{formatDate(c.created_at)}</p>
                      </div>
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
