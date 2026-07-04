"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

/**
 * Login server action. Signs in and lets Supabase set the httpOnly session
 * cookie, then returns success. Navigation happens on the client (router
 * replace + refresh) — redirecting here in the same call races the cookie
 * write and can freeze the first login.
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

  return { success: true };
}

/**
 * Logout server action — clears the session cookie and returns to /login.
 */
export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
