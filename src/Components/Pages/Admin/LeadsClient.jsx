"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { RotateCw, Inbox, Mail, MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ContactsManager from "./ContactsManager";
import LeadsSkeleton from "./LeadsSkeleton";

function StatTile({ label, value, icon: Icon }) {
  return (
    <Card className="p-5 flex-row items-center gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-muted-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold text-foreground leading-tight">{value}</p>
      </div>
    </Card>
  );
}

export default function LeadsClient({ contacts }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const unread = contacts.filter((c) => c.status === "unread").length;

  const refresh = () => startTransition(() => router.refresh());

  return (
    <div className="space-y-8">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Contact Leads
          </h1>
          <p className="text-muted-foreground mt-1">
            Submissions from the website contact form.
          </p>
        </div>
        <Button variant="outline" size="sm" disabled={pending} onClick={refresh}>
          <RotateCw className={pending ? "animate-spin" : ""} />
          {pending ? "Refreshing…" : "Refresh"}
        </Button>
      </header>

      {/* Stat tiles (show dots while refreshing) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatTile label="Total leads" value={pending ? "…" : contacts.length} icon={Inbox} />
        <StatTile label="Unread" value={pending ? "…" : unread} icon={Mail} />
        <StatTile label="Read" value={pending ? "…" : contacts.length - unread} icon={MailOpen} />
      </div>

      {pending ? <LeadsSkeleton /> : <ContactsManager contacts={contacts} />}
    </div>
  );
}
