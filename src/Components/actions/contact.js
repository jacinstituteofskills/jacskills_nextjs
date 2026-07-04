"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { contactSchema } from "@/lib/schemas";

/**
 * Public contact-form submission. Runs server-side and writes with the
 * service_role key, so the browser never touches Supabase or any key.
 * Validation uses the same zod schema as the form — never trust the client.
 */
export async function submitContact(input) {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return {
      error:
        parsed.error.issues[0]?.message || "Please check the form and try again.",
    };
  }

  const data = parsed.data;

  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from("contacts").insert({
      ...data,
      email: data.email || null,
      status: "unread",
    });

    if (error) throw error;
    return { success: true };
  } catch {
    return { error: "Something went wrong. Please try again." };
  }
}
