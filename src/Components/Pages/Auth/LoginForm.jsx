"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import { login } from "@/Components/actions/auth";
import { loginSchema } from "@/lib/schemas";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values) => {
    setServerError("");
    const res = await login(values); // redirects on success
    if (res?.error) setServerError(res.error);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {serverError && (
        <div className="rounded-lg bg-red-50 border border-[var(--error-red)] text-[var(--error-red)] px-4 py-3 text-sm">
          {serverError}
        </div>
      )}

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-[var(--green-dark)] font-bold mb-1">
          Email
        </label>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--gray)]" />
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className={`w-full border rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:outline-none ${
              errors.email
                ? "border-[var(--error-red)] focus:ring-[var(--error-red)]"
                : "border-[var(--gray-light)] focus:ring-[var(--blue-light)]"
            }`}
            placeholder="admin@example.com"
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-[var(--error-red)]">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-[var(--green-dark)] font-bold mb-1">
          Password
        </label>
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--gray)]" />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            {...register("password")}
            className={`w-full border rounded-lg pl-10 pr-11 py-3 focus:ring-2 focus:outline-none ${
              errors.password
                ? "border-[var(--error-red)] focus:ring-[var(--error-red)]"
                : "border-[var(--gray-light)] focus:ring-[var(--blue-light)]"
            }`}
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--gray)] hover:text-[var(--gray-dark)] cursor-pointer"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-[var(--error-red)]">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 rounded-lg flex justify-center items-center gap-2 font-semibold text-[var(--white)] transition cursor-pointer ${
          isSubmitting
            ? "bg-[var(--purple-light)]"
            : "bg-[var(--purple)] hover:bg-[var(--purple-dark)]"
        }`}
      >
        {isSubmitting && (
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
        )}
        {isSubmitting ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;
