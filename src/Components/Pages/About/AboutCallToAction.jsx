"use client";

import {
  PrimaryButton,
  SecondaryButton,
} from "@/Components/ReUseAbleComponents/Buttons/Buttons";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutCallToAction = () => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--offwhite)]">
      <div className="text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--gray-dark)]"
        >
          Ready to Take the Next Step?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 text-lg md:text-xl text-[var(--gray)] max-w-2xl mx-auto"
        >
          Whether you want to level up your skills or leverage our expert
          services, we’re here to help you achieve your goals.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            type: "spring",
            stiffness: 120,
          }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href={"/courses"}>
            <PrimaryButton
              buttonName={"Explore Our Courses"}
              className="hover:scale-110"
            />
          </Link>

          <Link href={"/services"}>
            <SecondaryButton
              buttonName={"Get Our Services"}
              className="hover:scale-110"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCallToAction;
