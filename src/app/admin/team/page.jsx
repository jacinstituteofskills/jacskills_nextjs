import { Users } from "lucide-react";
import { listItems } from "@/Components/actions/adminContent";
import ResourceManager from "@/Components/Pages/Admin/ResourceManager";
import AdminPageHeader from "@/Components/Pages/Admin/AdminPageHeader";

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "role", label: "Role / Designation", type: "text" },
  { name: "bio", label: "Bio", type: "textarea" },
  { name: "image_url", label: "Photo", type: "image" },
  { name: "sort_order", label: "Sort order (lower shows first)", type: "number" },
  { name: "is_active", label: "Visible on website", type: "checkbox" },
];

export default async function AdminTeamPage() {
  const items = await listItems("team_members");
  return (
    <div className="space-y-6">
      <AdminPageHeader
        icon={Users}
        title="Team"
        description="Manage the team members shown on the About page."
      />
      <ResourceManager
        table="team_members"
        items={items}
        fields={fields}
        labelField="name"
        addLabel="Member"
      />
    </div>
  );
}
