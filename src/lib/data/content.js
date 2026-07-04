import "server-only";
import { createAdminClient } from "@/lib/supabase/admin";
import { sortByOrder } from "@/lib/sortItems";

// Public content fetchers. Read server-side with the service_role key,
// so no key ever reaches the browser and RLS stays fully locked down.
// Only active rows are returned to the public site.

async function fetchActive(table) {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .eq("is_active", true);

    if (error) {
      console.error(`Failed to load ${table}:`, error.message);
      return [];
    }
    // Ordered items first; unordered (sort_order 0) at the end.
    return sortByOrder(data ?? []);
  } catch (err) {
    // e.g. env not configured yet — degrade gracefully instead of crashing.
    console.error(`Failed to load ${table}:`, err?.message || err);
    return [];
  }
}

export const getServices = () => fetchActive("services");
export const getCourses = () => fetchActive("courses");
export const getTeam = () => fetchActive("team_members");
