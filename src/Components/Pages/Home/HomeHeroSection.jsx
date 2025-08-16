"use client";

import {
  PrimaryButton,
  SecondaryButton,
} from "@/Components/ReUseAbleComponents/Buttons/Buttons";
import Link from "next/link";
import { motion } from "framer-motion";

const HomeHeroSection = () => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--gray-dark)] leading-tight">
            Empower Your <span className="text-[var(--purple)]">Business</span>{" "}
            & Skills
          </h1>
          <p className="mt-6 text-lg text-[var(--gray)] leading-relaxed">
            Unlock growth opportunities with our tailored digital services and
            engaging courses. Whether you’re scaling your business or learning
            new skills, we’ve got you covered.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services">
              <PrimaryButton buttonName={"Explore Services"} />
            </Link>
            <Link href="/courses">
              <SecondaryButton buttonName={"Browse Courses"} />
            </Link>
          </div>
        </motion.div>

        {/* Right Content (Hero Image) */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VydmljZXN8ZW58MHx8MHx8fDA%3D"
            alt="Home Hero Image"
            className="rounded-xl shadow-lg h-96 w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
