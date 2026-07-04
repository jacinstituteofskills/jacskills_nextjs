"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Check, GraduationCap } from "lucide-react";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/Components/ReUseAbleComponents/Buttons/Buttons";

const stats = [
  { value: "500+", label: "Students trained" },
  { value: "20+", label: "Courses & services" },
  { value: "4.9★", label: "Average rating" },
];

const heroImages = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1552581234-26160f608093?w=700&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&auto=format&fit=crop&q=70",
];

const HomeHeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % heroImages.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden px-4 md:px-8 py-12 md:py-20">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--purple-light)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--blue-light)]/20 blur-3xl" />

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Trust pill */}
          <div className="inline-flex items-center gap-2 bg-[var(--white)] shadow-sm border border-[var(--gray-light)] text-[var(--gray-dark)] font-semibold px-3 py-1.5 rounded-full text-sm mb-6">
            <span className="flex text-[var(--yellow)]">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </span>
            Trusted by 500+ students & businesses
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-[var(--gray-dark)] leading-[1.1]">
            Empower Your{" "}
            <span className="bg-gradient-to-r from-[var(--purple)] to-[var(--blue)] bg-clip-text text-transparent">
              Business
            </span>{" "}
            & Skills
          </h1>

          <p className="mt-6 text-lg text-[var(--gray)] leading-relaxed max-w-xl">
            Unlock growth with tailored digital services and job-ready courses.
            Whether you’re scaling your business or learning new skills, our
            experts help you get there faster.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services">
              <PrimaryButton buttonName="Explore Services" />
            </Link>
            <Link href="/courses">
              <SecondaryButton buttonName="Browse Courses" />
            </Link>
          </div>

          {/* Reassurance row */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--gray-dark)]">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[var(--green-dark)]" /> Free consultation
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[var(--green-dark)]" /> Expert instructors
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[var(--green-dark)]" /> Practical, hands-on
            </span>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-extrabold text-[var(--gray-dark)]">
                  {s.value}
                </p>
                <p className="text-xs md:text-sm text-[var(--gray)]">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content (Hero Image + floating card) */}
        <motion.div
          className="relative"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
        >
          {/* Rotating hero image */}
          <div className="relative h-[26rem] w-full overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="sync">
              <motion.img
                key={current}
                src={heroImages[current]}
                alt="JacSkills — skills training & digital services"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Slide dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current ? "w-5 bg-white" : "w-1.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Floating rating card */}
          <div className="absolute -bottom-5 -left-3 md:-left-6 bg-[var(--white)] rounded-2xl shadow-xl border border-[var(--gray-light)] px-4 py-3 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--purple)]/10 text-[var(--purple)]">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div>
              <p className="font-extrabold text-[var(--gray-dark)] leading-tight">
                Industry-focused
              </p>
              <p className="text-xs text-[var(--gray)]">Learn skills that get you hired</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
