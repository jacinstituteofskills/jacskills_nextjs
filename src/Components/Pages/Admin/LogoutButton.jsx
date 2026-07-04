"use client";

import { useFormStatus } from "react-dom";
import { LogOut, Loader2 } from "lucide-react";
import { logout } from "@/Components/actions/auth";

function LogoutControl() {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        type="submit"
        disabled={pending}
        className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg font-semibold text-[var(--gray-dark)] border border-[var(--gray-light)] hover:bg-[var(--black)] hover:text-white hover:border-[var(--black)] transition-colors cursor-pointer disabled:opacity-70"
      >
        <LogOut className="h-4 w-4" />
        {pending ? "Logging out…" : "Logout"}
      </button>

      {pending && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3 text-white">
            <Loader2 className="h-10 w-10 animate-spin" />
            <p className="font-semibold">Logging out…</p>
          </div>
        </div>
      )}
    </>
  );
}

export default function LogoutButton() {
  return (
    <form action={logout}>
      <LogoutControl />
    </form>
  );
}
