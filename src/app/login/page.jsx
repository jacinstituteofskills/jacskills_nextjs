import Link from "next/link";
import { FaArrowLeft, FaLock } from "react-icons/fa";
import LoginForm from "@/Components/Pages/Auth/LoginForm";

export const metadata = {
  title: "Admin Login | JacSkills",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-[var(--offwhite)]">
      {/* Back to home */}
      <Link
        href="/"
        className="absolute top-5 left-5 inline-flex items-center gap-2 bg-[var(--white)] border border-[var(--gray-light)] text-[var(--gray-dark)] hover:border-[var(--purple)] hover:text-[var(--purple)] font-semibold px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all"
      >
        <FaArrowLeft />
        Back to home
      </Link>

      <div className="w-full max-w-md">
        <div className="bg-[var(--white)] rounded-2xl shadow-xl border border-[var(--gray-light)] p-8">
          {/* Brand + lock */}
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-[var(--purple)] text-white flex items-center justify-center text-2xl shadow-lg">
              <FaLock />
            </div>
            <h1 className="text-3xl font-extrabold tracking-wide">
              <span className="text-[var(--blue)]">Jac</span>
              <span className="text-[var(--purple)]">Skills</span>
            </h1>
            <p className="mt-2 text-[var(--gray)]">
              Admin panel — sign in to continue
            </p>
          </div>

          <LoginForm />
        </div>

        <p className="mt-6 text-center text-sm text-[var(--gray)]">
          Authorized personnel only.
        </p>
      </div>
    </main>
  );
}
