"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { login } from "@/Components/actions/auth";
import { loginSchema } from "@/lib/schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values) => {
    const res = await login(values);
    if (res?.error) {
      toast.error(res.error);
      return;
    }
    toast.success("Logged in! Redirecting…");
    // Keep the button in the loading state while the toast shows, then do a
    // full-page navigation so the fresh session cookie is guaranteed to be sent.
    await new Promise((r) => setTimeout(r, 700));
    window.location.href = "/admin";
  };

  const labelClass = "text-[var(--green-dark)] font-bold";

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Email */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className={labelClass}>
            Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              autoComplete="email"
              className="pl-9 h-11"
              aria-invalid={!!errors.email}
              {...register("email")}
              placeholder="Enter your email"
            />
          </div>
          {errors.email && (
            <p className="text-sm text-[var(--error-red)]">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <Label htmlFor="password" className={labelClass}>
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              className="pl-9 pr-10 h-11"
              aria-invalid={!!errors.password}
              {...register("password")}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-[var(--error-red)]">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-11 text-base bg-[var(--purple)] hover:bg-[var(--purple-dark)] text-white"
        >
          {isSubmitting && <Loader2 className="h-5 w-5 animate-spin" />}
          {isSubmitting ? "Signing in…" : "Sign In"}
        </Button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default LoginForm;
