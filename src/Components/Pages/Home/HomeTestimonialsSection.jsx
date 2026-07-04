"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Link from "next/link";
import { PrimaryButton } from "@/Components/ReUseAbleComponents/Buttons/Buttons";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const testimonials = [
  {
    name: "Ahmed Ali",
    role: "Student · Web Development",
    feedback:
      "The courses are extremely detailed and practical. I could apply the techniques immediately in my projects. The instructors are always available for guidance.",
  },
  {
    name: "Sarah Khan",
    role: "Business Owner · eCommerce",
    feedback:
      "JacSkills transformed my online business. Their strategic approach to digital marketing increased our leads and overall sales dramatically.",
  },
  {
    name: "Fatima Aslam",
    role: "Student · Digital Marketing",
    feedback:
      "I improved my design and marketing skills significantly. The hands-on exercises made learning interactive and genuinely enjoyable.",
  },
  {
    name: "Usman Qadir",
    role: "Business Owner · Shopify",
    feedback:
      "Our Shopify store launch was seamless, and their ongoing management services have helped us maintain consistent month-over-month growth.",
  },
  {
    name: "Hassan Javed",
    role: "Student · IELTS",
    feedback:
      "A highly professional platform. The instructors are experts and the materials are up to date. I felt fully prepared for my exam.",
  },
  {
    name: "Ayesha Malik",
    role: "Business Owner · Marketing",
    feedback:
      "Attention to detail, professionalism, and a results-driven approach. I highly recommend JacSkills to any business looking to scale.",
  },
];

const avatarColors = [
  "bg-[var(--purple)]",
  "bg-[var(--blue)]",
  "bg-[var(--green-dark)]",
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const HomeTestimonialsSection = () => {
  return (
    <section className="px-4 md:px-8 py-12 md:py-16 bg-[var(--offwhite)]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[var(--purple)] mb-2">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-dark)]">
          What Our <span className="text-[var(--purple)]">Clients Say</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--gray)]">
          Real results from students and business owners who trusted us with
          their growth.
        </p>
      </div>

      {/* Testimonials grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {testimonials.map((t, index) => (
          <motion.article
            key={t.name}
            variants={fadeUp}
            className="relative bg-[var(--white)] p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <Quote className="absolute top-5 right-5 h-8 w-8 text-[var(--purple-light)]/40" />

            {/* Rating */}
            <div className="flex text-[var(--yellow)] mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>

            {/* Feedback */}
            <p className="text-[var(--gray-dark)] leading-relaxed flex-grow">
              “{t.feedback}”
            </p>

            {/* Author */}
            <div className="mt-6 flex items-center gap-3">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white font-bold ${
                  avatarColors[index % avatarColors.length]
                }`}
              >
                {initials(t.name)}
              </span>
              <div>
                <p className="font-bold text-[var(--gray-dark)] leading-tight">
                  {t.name}
                </p>
                <p className="text-sm text-[var(--gray)]">{t.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="mt-12 flex justify-center">
        <Link href="/contact">
          <PrimaryButton buttonName="Get a Quote" />
        </Link>
      </div>
    </section>
  );
};

export default HomeTestimonialsSection;
