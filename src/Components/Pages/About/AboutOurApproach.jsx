"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaTools,
  FaRocket,
  FaBook,
  FaChalkboardTeacher,
  FaChartLine,
} from "react-icons/fa";

const serviceSteps = [
  {
    title: "Understand",
    icon: <FaSearch className="text-[var(--blue)] text-4xl" />,
    desc: "We start by deeply understanding your business, goals, and challenges. This helps us craft solutions that are tailored to your unique needs and ensures the best outcomes for your projects.",
  },
  {
    title: "Build",
    icon: <FaTools className="text-[var(--purple)] text-4xl" />,
    desc: "Our team develops efficient, scalable, and creative strategies aligned with your objectives. Every solution is designed to deliver maximum impact while maintaining high quality.",
  },
  {
    title: "Deliver",
    icon: <FaRocket className="text-[var(--green)] text-4xl" />,
    desc: "We implement and deliver results-driven solutions with ongoing support to ensure lasting success. Your satisfaction and growth remain our top priority.",
  },
];

const courseSteps = [
  {
    title: "Learn",
    icon: <FaBook className="text-[var(--orange)] text-4xl" />,
    desc: "Gain knowledge from structured, expert-led courses. Each module is designed to provide real-world skills and practical insights for professional growth.",
  },
  {
    title: "Practice",
    icon: <FaChalkboardTeacher className="text-[var(--yellow)] text-4xl" />,
    desc: "Engage in hands-on exercises and projects to strengthen your understanding. Practice sessions ensure you can apply knowledge confidently in real scenarios.",
  },
  {
    title: "Grow",
    icon: <FaChartLine className="text-[var(--green-dark)] text-4xl" />,
    desc: "Transform your skills into opportunities. We help you grow personally and professionally, turning your learning into tangible results and success.",
  },
];

const StepCard = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="relative bg-[var(--white)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
  >
    {/* Step Number */}
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--purple-light)] text-[var(--white)] font-bold shadow-lg text-lg">
      {index + 1}
    </div>

    <div className="flex flex-col items-center text-center gap-4 mt-6">
      <div className="p-4 rounded-full bg-[var(--offwhite)] shadow-md">
        {step.icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-[var(--gray-dark)]">
        {step.title}
      </h3>
      <p className="text-[var(--gray)] text-base md:text-lg leading-relaxed">
        {step.desc}
      </p>
    </div>
  </motion.div>
);

const AboutOurApproach = () => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--offwhite)]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--gray-dark)]">
          Our <span className="text-[var(--blue-light)]">Approach</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[var(--gray)] leading-relaxed">
          We follow a clear and structured approach to deliver exceptional
          services and practical courses. Each step is designed to maximize
          results and empower our clients and learners.
        </p>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--blue-dark)] mb-12 text-center">
          Services Process
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceSteps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>

      {/* Courses */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--purple-dark)] mb-12 text-center">
          Courses Journey
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courseSteps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutOurApproach;
