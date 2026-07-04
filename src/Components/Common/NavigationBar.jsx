"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButton } from "../ReUseAbleComponents/Buttons/Buttons";
import Logo from "./Logo";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  // The public navbar shouldn't appear on the admin panel or login page.
  if (pathname?.startsWith("/admin") || pathname === "/login") return null;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Courses", href: "/courses" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[var(--white)] shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" aria-label="JacSkills home">
          <Logo className="h-10 md:h-12 w-auto" priority />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`transition-colors font-bold duration-200 ${
                isActive(link.href)
                  ? "text-[var(--purple)]"
                  : "text-[var(--black)] hover:text-[var(--purple)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <Link href="/contact" className="hidden md:block">
          <PrimaryButton buttonName="Let's Talk" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--blue)] text-2xl active:bg-[var(--black)] active:text-[var(--white)] rounded p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-auto bg-[var(--white)] shadow-lg z-50 flex flex-col"
          >
            {/* Close Button + Logo */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--gray-light)] shadow-md">
              <Link
                href="/"
                aria-label="JacSkills home"
                onClick={() => setIsOpen(false)}
              >
                <Logo className="h-10 w-auto" />
              </Link>
              <button
                className="md:hidden text-[var(--blue)] text-2xl active:bg-[var(--black)] active:text-[var(--white)] rounded p-1"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`transition-colors font-bold duration-200 ${
                      isActive(link.href)
                        ? "text-[var(--purple)]"
                        : "text-[var(--black)] hover:text-[var(--purple)]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Contact Button */}
            <Link href={"/contact"} className="px-4 pb-6">
              <PrimaryButton
                buttonName="Let's Talk"
                className="w-full"
                onClick={() => setIsOpen(false)}
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavigationBar;
