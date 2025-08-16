"use client";

import { PrimaryButton } from "@/Components/ReUseAbleComponents/Buttons/Buttons";
import Link from "next/link";

const HomeCTASection = () => {
  return (
    <section className="px-4 md:px-8 py-12 bg-[var(--purple-light)] rounded-xl my-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-4">
          Boost Your Skills & Business to the{" "}
          <span className="text-[var(--yellow)]">Next Level</span>
        </h2>

        {/* Subheading */}
        <p className="text-[var(--white)] text-lg md:text-xl mb-8">
          Whether you are a student aiming to excel in your career or a business
          owner looking to grow, our expert-led courses and practical workshops
          provide the skills you need to succeed.
        </p>

        {/* Call-to-Action Button */}
        <Link href="/contact">
          <PrimaryButton buttonName="Get Started Today" />
        </Link>
      </div>
    </section>
  );
};

export default HomeCTASection;
