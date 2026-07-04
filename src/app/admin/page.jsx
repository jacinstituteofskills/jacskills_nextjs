import { getContacts } from "@/Components/actions/adminContacts";
import LeadsClient from "@/Components/Pages/Admin/LeadsClient";

export default async function AdminLeadsPage() {
  const contacts = await getContacts();
  return <LeadsClient contacts={contacts} />;
}
