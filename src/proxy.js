import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

/**
 * First line of defense for the admin panel:
 *  - refreshes the Supabase auth session cookie on every request
 *  - redirects unauthenticated users away from /admin/*
 *  - redirects already-logged-in users away from /login
 *
 * This is defense-in-depth: the admin layout and every admin server
 * action ALSO re-check auth on the server, so a bypass here still
 * can't reach data.
 */
export async function proxy(request) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // getUser() re-validates the token with Supabase (don't trust getSession alone).
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginRoute = pathname === "/login";

  // Build a redirect that carries over any refreshed auth cookies, so the
  // session is never dropped on the redirect (a common cause of freezes/loops).
  const redirectTo = (pathname, extra) => {
    const url = request.nextUrl.clone();
    url.pathname = pathname;
    url.search = "";
    if (extra) extra(url);
    const redirectResponse = NextResponse.redirect(url);
    response.cookies.getAll().forEach((cookie) =>
      redirectResponse.cookies.set(cookie)
    );
    return redirectResponse;
  };

  if (isAdminRoute && !user) {
    return redirectTo("/login", (url) =>
      url.searchParams.set("redirectedFrom", pathname)
    );
  }

  if (isLoginRoute && user) {
    return redirectTo("/admin");
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
