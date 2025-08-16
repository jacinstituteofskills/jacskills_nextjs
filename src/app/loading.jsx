"use client";

import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[var(--offwhite)]">
      <FaSpinner className="animate-spin text-5xl text-[var(--blue-light)] mb-4" />
      <p className="text-lg font-medium text-[var(--gray-dark)] animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}
