"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sortByOrder } from "@/lib/sortItems";
import { revalidatePath } from "next/cache";

// ── Security: only these tables/columns can ever be written, so a
// crafted request can't touch arbitrary tables. ──────────────────
const SCHEMA = {
  services: {
    columns: ["title", "description", "image_url", "icon", "sort_order", "is_active"],
    revalidate: ["/services", "/admin/services", "/"],
  },
  courses: {
    columns: ["title", "description", "image_url", "icon", "sort_order", "is_active"],
    revalidate: ["/courses", "/admin/courses", "/"],
  },
  team_members: {
    columns: ["name", "role", "bio", "image_url", "sort_order", "is_active"],
    revalidate: ["/about", "/admin/team"],
  },
};

async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}

// Keep only allowed columns; coerce types.
function sanitize(table, input) {
  const allowed = SCHEMA[table].columns;
  const row = {};
  for (const key of allowed) {
    if (input[key] === undefined) continue;
    let value = input[key];
    if (key === "sort_order") value = Number(value) || 0;
    else if (key === "is_active") value = Boolean(value);
    // Keep empty strings as "" — the text columns are NOT NULL (default '').
    // (Converting to null here broke inserts on optional fields like role/bio.)
    row[key] = value;
  }
  return row;
}

export async function listItems(table) {
  await requireAdmin();
  if (!SCHEMA[table]) throw new Error("Unknown resource");
  const supabase = createAdminClient();
  const { data, error } = await supabase.from(table).select("*");
  if (error) throw error;
  // Ordered items first; unordered (sort_order 0) at the end.
  return sortByOrder(data ?? []);
}

export async function createItem(table, input) {
  await requireAdmin();
  if (!SCHEMA[table]) return { error: "Unknown resource." };
  const row = sanitize(table, input);

  const supabase = createAdminClient();
  const { error } = await supabase.from(table).insert(row);
  if (error) {
    console.error(`create ${table} failed:`, error.message);
    return { error: "Could not create the item." };
  }

  SCHEMA[table].revalidate.forEach((p) => revalidatePath(p));
  return { success: true };
}

export async function updateItem(table, id, input) {
  await requireAdmin();
  if (!SCHEMA[table]) return { error: "Unknown resource." };
  const row = sanitize(table, input);

  const supabase = createAdminClient();
  const { error } = await supabase.from(table).update(row).eq("id", id);
  if (error) {
    console.error(`update ${table} failed:`, error.message);
    return { error: "Could not update the item." };
  }

  SCHEMA[table].revalidate.forEach((p) => revalidatePath(p));
  return { success: true };
}

export async function deleteItem(table, id) {
  await requireAdmin();
  if (!SCHEMA[table]) return { error: "Unknown resource." };

  const supabase = createAdminClient();
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) return { error: "Could not delete the item." };

  SCHEMA[table].revalidate.forEach((p) => revalidatePath(p));
  return { success: true };
}

/**
 * Persist a new order for a resource. `orderedIds` is the full list of ids
 * in their new visual order; each row's sort_order is rewritten to match.
 */
export async function reorderItems(table, orderedIds) {
  await requireAdmin();
  if (!SCHEMA[table]) return { error: "Unknown resource." };
  if (!Array.isArray(orderedIds) || orderedIds.length === 0) {
    return { error: "Nothing to reorder." };
  }

  const supabase = createAdminClient();
  const results = await Promise.all(
    orderedIds.map((id, index) =>
      supabase
        .from(table)
        .update({ sort_order: (index + 1) * 10 })
        .eq("id", id)
    )
  );

  if (results.some((r) => r.error)) {
    return { error: "Could not save the new order." };
  }

  SCHEMA[table].revalidate.forEach((p) => revalidatePath(p));
  return { success: true };
}

/**
 * Upload an image file to Supabase Storage and return its public URL.
 * Called from the admin image field. Runs with the service_role key.
 */
export async function uploadImage(formData) {
  await requireAdmin();

  const file = formData.get("file");
  if (!file || typeof file === "string" || file.size === 0) {
    return { error: "No file provided." };
  }
  if (!file.type?.startsWith("image/")) {
    return { error: "Only image files are allowed." };
  }
  if (file.size > 5 * 1024 * 1024) {
    return { error: "Image must be 5MB or smaller." };
  }

  const ext = (file.name?.split(".").pop() || "png").toLowerCase();
  const path = `uploads/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const supabase = createAdminClient();
  const { error } = await supabase.storage
    .from("media")
    .upload(path, file, { contentType: file.type, upsert: false });

  if (error) return { error: "Upload failed. Please try again." };

  const {
    data: { publicUrl },
  } = supabase.storage.from("media").getPublicUrl(path);

  return { success: true, url: publicUrl };
}
