"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ✅ Custom hook for detecting visibility
const useInViewCustom = (options) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // ✅ run only once
        }
      },
      { threshold: 0.2, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return { ref, inView };
};

// Stats data
const stats = [
  {
    number: 1500,
    suffix: "+",
    label: "Students Trained",
    color: "text-[var(--blue-light)]",
  },
  {
    number: 50,
    suffix: "+",
    label: "Projects Delivered",
    color: "text-[var(--green-dark)]",
  },
  {
    number: 5,
    suffix: "+",
    label: "Years of Combined Experience",
    color: "text-[var(--purple-dark)]",
  },
];

// ✅ Counter component (fixed)
const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInViewCustom({});
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true; // ✅ run only once
      const controls = animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });

      return () => controls.stop();
    }
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// Framer variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const AboutImpactAndAchievements = () => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--white)]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--gray-dark)]">
          Impact & <span className="text-[var(--blue)]">Achievements</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[var(--gray)] leading-relaxed">
          Our journey is defined by the growth of our students, the success of
          our projects, and the years of expertise we bring to the table.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-[var(--offwhite)] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-10"
          >
            <h3
              className={`text-4xl md:text-5xl font-extrabold ${stat.color} mb-3`}
            >
              <Counter target={stat.number} suffix={stat.suffix} />
            </h3>
            <p className="text-lg md:text-xl font-medium text-[var(--gray-dark)]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutImpactAndAchievements;
