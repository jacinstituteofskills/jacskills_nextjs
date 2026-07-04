"use client";

import Link from "next/link";
import { PrimaryButton } from "@/Components/ReUseAbleComponents/Buttons/Buttons";

const CoursesHeroSection = () => {
  return (
    <section className="relative bg-[var(--black)] text-center overflow-hidden px-4 md:px-8 py-12 md:py-20">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1661645390948-1c9d4524ef76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="JacSkills Courses background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-4">
          Our <span className="text-[var(--yellow)]">Courses</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-[var(--offwhite)] mb-8">
          Enhance your career with{" "}
          <span className="text-[var(--purple-light)]">expert-led </span>
          training in IT, business, and professional skills. Learn at your pace,
          grow with confidence.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link href={"/contact"}>
            <PrimaryButton buttonName="Enroll Now" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesHeroSection;
