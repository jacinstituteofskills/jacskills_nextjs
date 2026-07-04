"use client";

import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { waLink, waMessages } from "@/lib/site";

/**
 * Persistent one-tap WhatsApp button, bottom-right on every public page.
 * Hidden on the admin panel and login page.
 */
const FloatingWhatsApp = () => {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin") || pathname === "/login") return null;

  return (
    <a
      href={waLink(waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold pl-3 pr-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75" />
        <FaWhatsapp className="relative text-2xl" />
      </span>
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
};

export default FloatingWhatsApp;
