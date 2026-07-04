"use client";

import Link from "next/link";
import { PrimaryButton } from "@/Components/ReUseAbleComponents/Buttons/Buttons";

const ServicesHeroSection = () => {
  return (
    <section className="relative bg-[var(--black)] text-center overflow-hidden px-4 md:px-8 py-12 md:py-20">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1080&auto=format&fit=crop&q=60"
          alt="JacSkills Services background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-4">
          Our <span className="text-[var(--yellow)]">Services</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-[var(--offwhite)] mb-8">
          Professional{" "}
          <span className="text-[var(--green-light)]">solutions </span>
          tailored for individuals and businesses. From IT support to digital
          growth services, we help you achieve success.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link href={"/contact"}>
            <PrimaryButton buttonName="Get in Touch" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
