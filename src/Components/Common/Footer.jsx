"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { MapPin, Mail, ArrowRight } from "lucide-react";
import { waLink, waMessages } from "@/lib/site";
import Logo from "./Logo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" },
];

const courses = [
  "YouTube Automation",
  "Digital Marketing",
  "Graphic Designing",
  "IT / Computer",
  "Amazon",
  "Shopify",
  "English Language",
];

const socials = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/1CnFfNZDmi/",
    label: "Facebook",
    hover: "hover:bg-[var(--blue)]",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/jac_institute_?igsh=anYweWNpMHh6b2ds",
    label: "Instagram",
    hover: "hover:bg-[var(--purple)]",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@jac_skills?_r=1&_t=ZS-97kUdZvFbOv",
    label: "TikTok",
    hover: "hover:bg-white/20",
  },
];

const Footer = () => {
  const pathname = usePathname();

  // Hide the public footer on the admin panel and login page.
  if (pathname?.startsWith("/admin") || pathname === "/login") return null;

  return (
    <footer className="bg-[var(--black)] text-[var(--gray-light)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-28">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="JacSkills home"
              className="inline-block rounded-xl bg-white p-2.5 shadow-sm"
            >
              <Logo className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--gray-light)]/80">
              Empowering businesses and individuals with modern digital
              solutions and practical, career-focused learning.
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[var(--gray-light)]/70">
              Follow us
            </p>
            <div className="mt-3 flex gap-3">
              {socials.map(({ icon: Icon, href, label, hover }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 ${hover}`}
                >
                  <Icon className="text-white text-sm" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-2 text-[var(--gray-light)]/80 hover:text-white transition-colors"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-[var(--purple-light)]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-bold mb-5">Popular Courses</h3>
            <ul className="space-y-3 text-sm">
              {courses.map((c) => (
                <li key={c}>
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 text-[var(--gray-light)]/80 hover:text-white transition-colors"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-[var(--purple-light)]" />
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-5">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-[var(--purple-light)]" />
                <span className="text-[var(--gray-light)]/80">Pakistan</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[var(--purple-light)]" />
                <a
                  href="mailto:jacinstituteofskills@gmail.com"
                  className="text-[var(--gray-light)]/80 hover:text-white transition-colors break-all"
                >
                  jacinstituteofskills@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={waLink(waMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold px-4 py-2 transition-colors"
                >
                  <FaWhatsapp className="text-base" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-[var(--gray-light)]/70">
            © {new Date().getFullYear()}{" "}
            <span className="text-[var(--purple-light)] font-semibold">JacSkills</span>. All
            rights reserved.
          </p>
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-1.5 font-semibold text-[var(--gray-light)]/80 hover:bg-white hover:text-[var(--black)] transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
