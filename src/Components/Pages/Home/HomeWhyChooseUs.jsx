"use client";

import { FaRegLightbulb, FaUsers, FaRocket, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { PrimaryButton } from "@/Components/ReUseAbleComponents/Buttons/Buttons";

const points = [
  {
    icon: <FaRegLightbulb className="text-[var(--purple)] text-4xl" />,
    title: "Innovative Solutions",
    description:
      "We bring creative and modern strategies to help your business and skills grow effectively.",
  },
  {
    icon: <FaUsers className="text-[var(--blue)] text-4xl" />,
    title: "Expert Instructors",
    description:
      "Learn from experienced professionals who provide practical guidance and insights.",
  },
  {
    icon: <FaRocket className="text-[var(--green)] text-4xl" />,
    title: "Rapid Growth",
    description:
      "Our tailored services and courses help you scale your business and career faster.",
  },
  {
    icon: <FaShieldAlt className="text-[var(--orange)] text-4xl" />,
    title: "Trusted & Reliable",
    description:
      "We prioritize quality and reliability to ensure you get the best experience and results.",
  },
];

const HomeWhyChooseUs = () => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--offwhite)]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-dark)]">
          Why <span className="text-[var(--purple)]">Choose Us</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--gray)]">
          Discover why businesses and learners trust us for their growth and
          success.
        </p>
      </div>

      {/* Points Grid with pop-up animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="bg-[var(--white)] p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{point.icon}</div>
            <h3 className="text-xl font-semibold text-[var(--gray-dark)] mb-2">
              {point.title}
            </h3>
            <p className="text-[var(--gray)] text-base leading-relaxed">
              {point.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Learn More Button */}
      <div className="mt-12 text-center">
        <Link href="/about">
          <PrimaryButton buttonName="Learn More About Us" />
        </Link>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;
