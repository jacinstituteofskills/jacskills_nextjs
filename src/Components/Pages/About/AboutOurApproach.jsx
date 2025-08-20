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
    icon: <FaSearch className="text-[var(--blue)] text-2xl" />,
    desc: "We start by deeply understanding your needs, goals, and challenges to craft tailored solutions.",
  },
  {
    title: "Build",
    icon: <FaTools className="text-[var(--purple)] text-2xl" />,
    desc: "Our team develops efficient, scalable, and creative strategies aligned with your objectives.",
  },
  {
    title: "Deliver",
    icon: <FaRocket className="text-[var(--green)] text-2xl" />,
    desc: "We deliver results-driven solutions with ongoing support to ensure lasting success.",
  },
];

const courseSteps = [
  {
    title: "Learn",
    icon: <FaBook className="text-[var(--orange)] text-2xl" />,
    desc: "Gain knowledge from structured, expert-led courses designed for practical application.",
  },
  {
    title: "Practice",
    icon: <FaChalkboardTeacher className="text-[var(--yellow)] text-2xl" />,
    desc: "Engage in hands-on exercises and projects to build confidence and mastery.",
  },
  {
    title: "Grow",
    icon: <FaChartLine className="text-[var(--green-dark)] text-2xl" />,
    desc: "Transform skills into opportunities, driving personal and professional growth.",
  },
];

const Timeline = ({ steps, title, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative pl-8"
    >
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 w-1 h-full bg-[var(--gray-light)] rounded-full"></div>

      {/* Section Title */}
      <h3
        className={`text-2xl font-semibold mb-10 text-center text-[var(${color})]`}
      >
        {title}
      </h3>

      {/* Steps */}
      <div className="flex flex-col gap-12">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start gap-6">
            {/* Icon Circle */}
            <div className="absolute -left-1 top-0 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--white)] border-2 border-[var(--gray-light)] shadow-md">
              {step.icon}
            </div>

            {/* Text */}
            <div className="ml-16">
              <h4 className="text-xl font-semibold text-[var(--gray-dark)]">
                {step.title}
              </h4>
              <p className="text-[var(--gray)] mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const AboutOurApproach = () => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--offwhite)]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-dark)]">
          Our <span className="text-[var(--blue-light)]">Approach</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--gray)]">
          Whether providing professional services or delivering courses, our
          approach is built on clarity, action, and growth.
        </p>
      </div>

      {/* Timelines */}
      <div className="flex flex-col gap-20">
        <Timeline
          steps={serviceSteps}
          title="Services Process"
          color="--blue-dark"
        />
        <Timeline
          steps={courseSteps}
          title="Courses Journey"
          color="--purple-dark"
        />
      </div>
    </section>
  );
};

export default AboutOurApproach;
 