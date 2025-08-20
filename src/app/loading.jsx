"use client";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[var(--offwhite)]">
      <div className="loader"></div>
      <p className="text-2xl font-bold mt-8 flex items-center gap-1 text-[var(--blue)]">
        <span className="animate-pulse">Loading</span>
        <span className="animate-bounce">.</span>
        <span className="animate-bounce delay-150">.</span>
        <span className="animate-bounce delay-300">.</span>
      </p>
    </div>
  );
}
