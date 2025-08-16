"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--black)] text-[var(--gray-light)] pt-16 pb-8 px-4 md:px-8">
      {/* Top Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Info */}
        <div>
          <Link
            href="/"
            className="text-lg md:text-2xl font-extrabold text-[var(--purple)]"
          >
            JacSkills
          </Link>
          <p className="text-base mt-6 leading-relaxed text-[var(--gray-light)]">
            Empowering businesses with modern digital solutions & creative
            learning opportunities. From services to courses, we help you grow
            and succeed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg md:text-2xl font-extrabold text-[var(--purple)] mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="hover:text-[var(--blue-light)] transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[var(--blue-light)] transition-colors duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-[var(--blue-light)] transition-colors duration-200"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[var(--blue-light)] transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[var(--blue-light)] transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg md:text-2xl font-extrabold text-[var(--purple)] mb-6">
            Follow Us
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="p-3 rounded-full bg-[var(--blue)] hover:bg-[var(--blue-light)] transition-all duration-300 shadow-md hover:scale-110"
            >
              <FaFacebookF className="text-[var(--white)] text-lg" />
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              className="p-3 rounded-full bg-[var(--black)] border border-[var(--gray)] hover:border-[var(--white)] transition-all duration-300 shadow-md hover:scale-110"
            >
              <FaTiktok className="text-[var(--white)] text-lg" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="p-3 rounded-full bg-[var(--purple)] hover:bg-[var(--purple-light)] transition-all duration-300 shadow-md hover:scale-110"
            >
              <FaInstagram className="text-[var(--white)] text-lg" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="p-3 rounded-full bg-[var(--blue)] hover:bg-[var(--blue-light)] transition-all duration-300 shadow-md hover:scale-110"
            >
              <FaTwitter className="text-[var(--white)] text-lg" />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-[var(--gray)]"></div>

      {/* Bottom Footer */}
      <div className="pt-6 text-center text-sm text-[var(--gray)]">
        © {new Date().getFullYear()}{" "}
        <span className="text-[var(--purple)]">JacSkills</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
