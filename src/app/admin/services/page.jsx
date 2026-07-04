import { Briefcase } from "lucide-react";
import { listItems } from "@/Components/actions/adminContent";
import ResourceManager from "@/Components/Pages/Admin/ResourceManager";
import AdminPageHeader from "@/Components/Pages/Admin/AdminPageHeader";

const fields = [
  { name: "title", label: "Title", type: "text", required: true },
  { name: "description", label: "Description", type: "textarea", required: true },
  { name: "image_url", label: "Image", type: "image" },
  { name: "icon", label: "Icon", type: "icon" },
  { name: "sort_order", label: "Sort order (lower shows first)", type: "number" },
  { name: "is_active", label: "Visible on website", type: "checkbox" },
];

export default async function AdminServicesPage() {
  const items = await listItems("services");
  return (
    <div className="space-y-6">
      <AdminPageHeader
        icon={Briefcase}
        title="Services"
        description="Manage the services shown on the public Services page."
      />
      <ResourceManager
        table="services"
        items={items}
        fields={fields}
        labelField="title"
        addLabel="Service"
      />
    </div>
  );
}
