import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getUnreadLeadsCount } from "@/Components/actions/adminContacts";
import AdminSidebar from "@/Components/Pages/Admin/AdminSidebar";

export const metadata = {
  title: "Admin | JacSkills",
  robots: { index: false, follow: false },
};

// Never cache anything under the admin panel.
export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }) {
  // Defense in depth: the middleware already guards /admin, but we
  // re-verify on the server here so the panel can never render without a
  // valid session.
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const unreadLeads = await getUnreadLeadsCount();

  return (
    <div className="min-h-screen md:flex bg-[var(--offwhite)]">
      <AdminSidebar email={user.email} unreadLeads={unreadLeads} />
      <main className="flex-1 min-w-0 p-4 md:p-8">{children}</main>
    </div>
  );
}
