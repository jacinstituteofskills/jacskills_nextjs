"use client";

import Link from "next/link";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[var(--offwhite)] px-6 text-center">
      {/* Big Icon */}
      <FaExclamationTriangle className="text-[var(--orange)] text-6xl mb-6" />

      {/* Title */}
      <h1 className="text-6xl font-extrabold text-[var(--blue-dark)] mb-3">
        404
      </h1>
      <p className="text-lg text-[var(--gray-dark)] mb-8 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--blue)] text-[var(--white)] font-medium shadow-md hover:bg-[var(--blue-light)] transition-all duration-200"
      >
        <FaHome /> Back to Home
      </Link>
    </div>
  );
}
