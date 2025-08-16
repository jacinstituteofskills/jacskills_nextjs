"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { FaTools, FaUsers, FaThumbsUp } from "react-icons/fa";

const stats = [
  {
    icon: <FaTools className="text-3xl text-[var(--primary-green)]" />,
    label: "Repairs Completed",
    value: 1200,
  },
  {
    icon: <FaUsers className="text-3xl text-[var(--primary-blue)]" />,
    label: "Happy Clients",
    value: 900,
  },
  {
    icon: <FaThumbsUp className="text-3xl text-[var(--accent-yellow)]" />,
    label: "Years of Trust",
    value: 20,
  },
];

const Stat = ({ icon, label, value, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 1000;
    const increment = value / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < value) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animate();
  }, [startAnimation, value]);

  return (
    <div className="flex flex-col items-center text-center p-4 bg-[var(--white)] rounded-xl shadow-md">
      <div className="mb-2">{icon}</div>
      <div className="text-4xl font-bold text-[var(--gray-text-dark)]">
        {count}+
      </div>
      <p className="mt-2 text-[var(--gray-text-muted)]">{label}</p>
    </div>
  );
};

const AboutStatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="px-4 md:px-8 py-12 md:py-16 bg-[var(--gray-background)]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--gray-text-dark)] mb-10">
        Our Achievements
      </h2>
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        {stats.map((item, index) => (
          <Stat
            key={index}
            icon={item.icon}
            label={item.label}
            value={item.value}
            startAnimation={isInView}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutStatsCounter;
