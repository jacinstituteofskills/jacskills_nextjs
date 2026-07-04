"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { submitContact } from "@/Components/actions/contact";
import { contactSchema } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fieldHelp = {
  name: "Please enter your full name.",
  phone: "Please enter your phone number.",
  email: "Please enter your email.",
  subject:
    "Tell us what you are looking for. Mention the service or course you are interested in.",
  message: "Please enter your query or message.",
};

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values) => {
    setSuccess(false);
    const result = await submitContact(values);
    if (result?.error) {
      toast.error(result.error);
      return;
    }
    toast.success("Form submitted successfully!");
    setSuccess(true);
    reset();
  };

  const labelClass = "text-[var(--green-dark)] text-lg font-bold";

  const helpOrError = (name) =>
    errors[name] ? (
      <p className="text-[var(--error-red)] mt-2">{errors[name].message}</p>
    ) : (
      <p className="text-[var(--gray)] mt-2">{fieldHelp[name]}</p>
    );

  return (
    <div className="mx-2">
      <div className="bg-[var(--white)] rounded-2xl shadow-lg hover:shadow-xl transition max-w-2xl mx-auto my-4 md:my-8 py-10 px-4 md:px-6">
        <h1 className="text-3xl font-bold text-[var(--blue-dark)] mb-2 text-center">
          Contact Us
        </h1>
        <p className="text-center text-[var(--gray)] mb-6">
          Fill out the form below and we’ll get back to you shortly.
        </p>

        {success && (
          <div className="mb-6 flex items-start gap-3 rounded-lg border border-[var(--green)] bg-[var(--green-light)]/20 px-4 py-3 text-[var(--green-dark)]">
            <CheckCircle2 className="h-6 w-6 shrink-0" />
            <div>
              <p className="font-bold">Message sent successfully!</p>
              <p className="text-sm">
                Thank you for reaching out — we’ll get back to you soon.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          {/* Name */}
          <div className="space-y-1.5">
            <Label htmlFor="name" className={labelClass}>
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              className="h-10"
              aria-invalid={!!errors.name}
              {...register("name")}
              placeholder="Full Name"
            />
            {helpOrError("name")}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label htmlFor="phone" className={labelClass}>
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              className="h-10"
              aria-invalid={!!errors.phone}
              {...register("phone")}
              placeholder="03XXXXXXXXX"
            />
            {helpOrError("phone")}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="email" className={labelClass}>
              Email (optional)
            </Label>
            <Input
              id="email"
              type="email"
              className="h-10"
              aria-invalid={!!errors.email}
              {...register("email")}
              placeholder="Email (optional)"
            />
            {helpOrError("email")}
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <Label htmlFor="subject" className={labelClass}>
              Subject
            </Label>
            <Input
              id="subject"
              type="text"
              className="h-10"
              aria-invalid={!!errors.subject}
              {...register("subject")}
              placeholder="What are you looking for. Service or Course?"
            />
            {helpOrError("subject")}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label htmlFor="message" className={labelClass}>
              Message
            </Label>
            <Textarea
              id="message"
              rows={4}
              aria-invalid={!!errors.message}
              {...register("message")}
              placeholder="Your message..."
            />
            {helpOrError("message")}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg flex justify-center items-center gap-2 font-semibold transition cursor-pointer ${
              isSubmitting
                ? "bg-[var(--green-light)] text-[var(--white)]"
                : "bg-[var(--green)] hover:bg-[var(--green-dark)] text-[var(--white)]"
            }`}
          >
            {isSubmitting && (
              <svg className="animate-spin h-5 w-5 text-[var(--white)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            )}
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
};

export default Contact;
