"use client";

import {
  PrimaryButton,
  SecondaryButton,
} from "@/Components/ReUseAbleComponents/Buttons/Buttons";
import Link from "next/link";

const AboutHeroSection = () => {
  return (
    <section className="relative bg-[var(--black)] text-center overflow-hidden px-4 md:px-8 py-12 md:py-20">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1674027001840-1a3e834eb73f?w=500&auto=format&fit=crop&q=60"
          alt="About JacSkills background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-4">
          About <span className="text-[var(--yellow)]">JacSkills</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-[var(--offwhite)] mb-8">
          Empowering <span className="text-[var(--purple-light)]">skills</span>{" "}
          &amp; <span className="text-[var(--green-light)]">solutions</span> for
          the future. We provide expert-led courses and professional services to
          help students and businesses grow effectively.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={"/courses"}>
            <PrimaryButton buttonName="Explore Courses" />
          </Link>
          <Link href={"/services"}>
            <SecondaryButton buttonName="Our Services" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
