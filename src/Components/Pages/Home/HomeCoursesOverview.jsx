"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SecondaryButton } from "@/Components/ReUseAbleComponents/Buttons/Buttons";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const HomeCoursesOverview = ({ courses = [] }) => {
  if (courses.length === 0) return null;
  const preview = courses.slice(0, 6);

  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--gray-light)]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-dark)]">
          Explore Our <span className="text-[var(--purple)]">Courses</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--gray)]">
          Gain skills and knowledge to advance your career or grow your
          business. Learn from expert instructors with practical projects.
        </p>
      </div>

      {/* Courses Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {preview.map((course, index) => (
          <motion.div
            key={course.id || index}
            variants={fadeUp}
            className="bg-[var(--white)] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
          >
            {course.image_url && (
              <div className="md:h-60 overflow-hidden">
                <img
                  src={course.image_url}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[var(--green-dark)] mb-3">
                {course.title}
              </h3>
              <p className="text-[var(--gray)] text-base leading-relaxed flex-grow line-clamp-4">
                {course.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Courses Button */}
      <div className="mt-12 text-center">
        <Link href="/courses">
          <SecondaryButton buttonName="View All Courses" />
        </Link>
      </div>
    </section>
  );
};

export default HomeCoursesOverview;
