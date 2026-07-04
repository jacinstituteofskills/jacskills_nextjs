"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

/**
 * Re-verify the caller is a logged-in admin before ANY privileged action.
 * This is server-side and independent of the middleware — defense in depth.
 */
async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");
  return user;
}

/**
 * Fetch all leads, newest first. Called from the admin server component.
 */
export async function getContacts() {
  await requireAdmin();
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

/** Count of unread leads — used for the sidebar badge. */
export async function getUnreadLeadsCount() {
  await requireAdmin();
  const supabase = createAdminClient();
  const { count, error } = await supabase
    .from("contacts")
    .select("*", { count: "exact", head: true })
    .eq("status", "unread");

  if (error) return 0;
  return count ?? 0;
}

export async function setContactStatus(id, status) {
  await requireAdmin();
  if (!["read", "unread"].includes(status)) {
    return { error: "Invalid status." };
  }

  const supabase = createAdminClient();
  const { error } = await supabase
    .from("contacts")
    .update({ status })
    .eq("id", id);

  if (error) return { error: "Could not update the lead." };

  revalidatePath("/admin");
  return { success: true };
}

export async function deleteContact(id) {
  await requireAdmin();

  const supabase = createAdminClient();
  const { error } = await supabase.from("contacts").delete().eq("id", id);

  if (error) return { error: "Could not delete the lead." };

  revalidatePath("/admin");
  return { success: true };
}
