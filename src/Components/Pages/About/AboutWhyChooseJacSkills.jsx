"use client";

import { motion } from "framer-motion";
import {
  FaUserTie,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaProjectDiagram,
} from "react-icons/fa";

const values = [
  {
    title: "Industry Experts",
    icon: <FaUserTie className="text-[var(--blue-light)] text-4xl" />,
    desc: "Learn directly from seasoned professionals with years of experience in the field. Our expert instructors bring real-world insights and strategies into every session.",
  },
  {
    title: "Practical Learning",
    icon: (
      <FaChalkboardTeacher className="text-[var(--purple-light)] text-4xl" />
    ),
    desc: "Our focus is on hands-on training that ensures you can apply what you learn immediately. From projects to real examples, theory always meets practice.",
  },
  {
    title: "End-to-End Services",
    icon: <FaProjectDiagram className="text-[var(--green-light)] text-4xl" />,
    desc: "We offer complete services — from planning to execution. Our comprehensive approach guarantees consistency, quality, and measurable results for every client.",
  },
  {
    title: "Mentorship & Support",
    icon: <FaHandsHelping className="text-[var(--orange-light)] text-4xl" />,
    desc: "Beyond teaching, we provide ongoing mentorship and personalized support. Your growth and success remain at the heart of everything we do.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const AboutWhyChooseJacSkills = () => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--white)]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--gray-dark)]">
          Why Choose{" "}
          <span className="text-[var(--blue)]">JacSkills?</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[var(--gray)] leading-relaxed">
          At JacSkills, we are driven by values that ensure quality, impact, and
          growth for every learner and client. Here’s what makes us stand out.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-[var(--offwhite)] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="mb-4 p-4 rounded-full bg-[var(--white)] shadow-md">
              {item.icon}
            </div>
            {/* Title */}
            <h3 className="text-2xl font-bold text-[var(--gray-dark)] mb-3">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-[var(--gray)] text-base md:text-lg leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutWhyChooseJacSkills;
