"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SecondaryButton } from "@/Components/ReUseAbleComponents/Buttons/Buttons";

const courses = [
  {
    title: "Graphic Designing Masterclass",
    image:
      "https://plus.unsplash.com/premium_photo-1721225465446-02f5b991a37f?w=500&auto=format&fit=crop&q=60",
    description:
      "Learn professional graphic designing from scratch. Master Adobe Photoshop, Illustrator, and Canva to create stunning visuals for brands and social media.",
  },
  {
    title: "Digital Marketing Essentials",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60",
    description:
      "Understand SEO, social media marketing, and paid advertising strategies. Drive traffic, generate leads, and grow your online business efficiently.",
  },
  {
    title: "Shopify Store Creation & Management",
    image:
      "https://images.unsplash.com/photo-1674027392857-9aed6e8ecab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNob3BpZnklMjBTdG9yZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Learn to create and manage Shopify stores effectively. From product setup to running ads and optimizing conversions, gain hands-on experience to grow e-commerce businesses.",
  },
  {
    title: "IT Skills & Productivity Tools",
    image:
      "https://images.unsplash.com/photo-1649433391420-542fcd3835ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29yZCUyMGV4Y2VsJTIwcG93ZXJwb2ludHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Master essential IT skills like Word, Excel, PowerPoint, and basic networking to boost productivity and professional growth.",
  },
  {
    title: "IELTS Preparation Course",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop&q=60",
    description:
      "Prepare effectively for the IELTS exam with our comprehensive course covering Listening, Reading, Writing, and Speaking sections. Achieve your desired band score.",
  },
  {
    title: "Web Development Bootcamp",
    image:
      "https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2ViJTIwRGV2ZWxvcG1lbnQlMjBCb290Y2FtcHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Become a full-stack web developer. Learn HTML, CSS, JavaScript, React, and Node.js to build responsive and dynamic websites and applications.",
  },
];

const HomeCoursesOverview = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          // <motion.div
          //   key={index}
          //   className="bg-[var(--white)] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
          //   initial={{ opacity: 0, y: 60 }}
          //   whileInView={{ opacity: 1, y: 0 }}
          //   transition={{ duration: 0.6 }}
          //   viewport={{ once: true }}
          // >
          <motion.div
            key={index}
            className="bg-[var(--white)] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            initial={{ opacity: 0, x: -50 }} // start 100px to the left
            whileInView={{ opacity: 1, x: 0 }} // move to original position
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="md:h-60 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[var(--gray-dark)] mb-3">
                {course.title}
              </h3>
              <p className="text-[var(--gray)] text-base leading-relaxed flex-grow">
                {course.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

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
