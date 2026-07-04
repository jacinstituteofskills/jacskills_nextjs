"use client";

import { motion } from "framer-motion";
import { getIcon } from "@/lib/icons";

const CoursesDetails = ({ courses = [] }) => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--offwhite)]">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--black)] text-center mb-4">
        Our <span className="text-[var(--purple)]">Courses</span>
      </h2>
      <p className="text-center text-[var(--gray)] max-w-2xl mx-auto mb-10">
        Practical, job-focused training led by industry experts.
      </p>

      {courses.length === 0 ? (
        <p className="text-center text-[var(--gray)]">
          Courses will be added soon. Please check back shortly.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = getIcon(course.icon);
            return (
              <motion.div
                key={course.id || index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--white)] p-4 rounded-2xl shadow-md hover:shadow-lg transition group flex flex-col"
              >
                {course.image_url && (
                  <img
                    src={course.image_url}
                    alt={course.title}
                    className="w-full h-52 object-cover rounded-lg mb-4 transform transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                {Icon && (
                  <div className="mb-4">
                    <Icon className="text-[var(--purple)] text-4xl" />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-[var(--blue-dark)] mb-2">
                  {course.title}
                </h3>
                <p className="text-[var(--gray)] text-justify flex-grow">
                  {course.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default CoursesDetails;
