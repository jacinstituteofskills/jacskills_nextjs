import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Privileged Supabase client using the service_role key.
 * BACKEND ONLY — the `server-only` import makes the build fail if this
 * module is ever imported into client code, guaranteeing the secret
 * key can never leak to the browser. Bypasses RLS, so callers MUST do
 * their own auth checks before using it for admin operations.
 */
export function createAdminClient() {
  return createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
