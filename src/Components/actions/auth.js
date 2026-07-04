"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

/**
 * Login server action (used with useActionState on the /login form).
 * Runs entirely on the server — credentials go straight to Supabase and
 * the resulting session is stored in an httpOnly cookie.
 */
export async function login(values) {
  const email = String(values?.email || "").trim();
  const password = String(values?.password || "");

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    // Deliberately generic — don't reveal whether the email exists.
    return { error: "Invalid email or password." };
  }

  redirect("/admin");
}

/**
 * Logout server action — clears the session cookie and returns to /login.
 */
export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
