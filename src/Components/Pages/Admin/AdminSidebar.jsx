"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Inbox,
  Briefcase,
  GraduationCap,
  Users,
  Home,
} from "lucide-react";
import Logo from "@/Components/Common/Logo";
import LogoutButton from "./LogoutButton";

const AdminSidebar = ({ email, unreadLeads = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  const close = () => setIsOpen(false);

  const navLinks = [
    { label: "Leads", href: "/admin", icon: Inbox, badge: unreadLeads },
    { label: "Services", href: "/admin/services", icon: Briefcase },
    { label: "Courses", href: "/admin/courses", icon: GraduationCap },
    { label: "Team", href: "/admin/team", icon: Users },
  ];

  const Brand = () => (
    <Link href="/admin" onClick={close} aria-label="JacSkills admin">
      <Logo className="h-9 w-auto" />
    </Link>
  );

  const body = (
    <div className="flex flex-col h-full bg-[var(--white)]">
      {/* Brand */}
      <div className="px-5 h-16 flex items-center border-b border-[var(--gray-light)]">
        <Brand />
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-[var(--gray)]">
          Manage
        </p>
        {navLinks.map(({ label, href, icon: Icon, badge }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={close}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg font-semibold transition-colors ${
                active
                  ? "bg-[var(--black)] text-white"
                  : "text-[var(--gray-dark)] hover:bg-[var(--offwhite)]"
              }`}
            >
              <Icon
                className={`h-5 w-5 shrink-0 ${
                  active ? "text-white" : "text-[var(--gray)] group-hover:text-[var(--black)]"
                }`}
              />
              <span className="flex-1">{label}</span>
              {badge > 0 && (
                <span
                  className={`inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold rounded-full ${
                    active ? "bg-white text-[var(--black)]" : "bg-[var(--gray-dark)] text-white"
                  }`}
                >
                  {badge > 99 ? "99+" : badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer: user + logout */}
      <div className="px-3 py-4 border-t border-[var(--gray-light)]">
        {email && (
          <div className="flex items-center gap-3 px-2 pb-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--offwhite)] border border-[var(--gray-light)] text-[var(--gray-dark)] font-bold uppercase">
              {email[0]}
            </span>
            <div className="min-w-0">
              <p className="text-xs text-[var(--gray)]">Signed in as</p>
              <p className="text-sm font-semibold text-[var(--gray-dark)] truncate">
                {email}
              </p>
            </div>
          </div>
        )}
        <Link
          href="/"
          onClick={close}
          className="w-full mb-2 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg font-semibold text-[var(--gray-dark)] border border-[var(--gray-light)] hover:bg-[var(--offwhite)] transition-colors"
        >
          <Home className="h-4 w-4" />
          Back to home
        </Link>
        <LogoutButton />
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between bg-[var(--white)] border-b border-[var(--gray-light)] px-4 h-14 sticky top-0 z-40">
        <Brand />
        <button
          onClick={() => setIsOpen(true)}
          className="text-[var(--gray-dark)] cursor-pointer p-1"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 shrink-0 border-r border-[var(--gray-light)] h-screen sticky top-0">
        {body}
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            <motion.div
              className="absolute inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />
            <motion.aside
              className="relative w-72 max-w-[85%] h-screen shadow-xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <button
                onClick={close}
                className="absolute top-4 right-4 text-[var(--gray-dark)] cursor-pointer z-10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
              {body}
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminSidebar;
