"use client";

import {
  FaShopify,
  FaPaintBrush,
  FaBullhorn,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiBookOpenLine, RiComputerLine } from "react-icons/ri";
import { motion } from "framer-motion";

const services = [
  {
    title: "Shopify Store Creation",
    icon: <FaShopify className="text-[var(--green)] text-3xl" />,
    desc: "Build professional and conversion-focused Shopify stores tailored to your business goals.",
  },
  {
    title: "Shopify Store Management",
    icon: <MdManageAccounts className="text-[var(--purple)] text-3xl" />,
    desc: "Efficient store management solutions to keep your Shopify business running smoothly.",
  },
  {
    title: "Graphic Designing",
    icon: <FaPaintBrush className="text-[var(--orange)] text-3xl" />,
    desc: "Creative, visually stunning designs to boost your brand identity and online presence.",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn className="text-[var(--yellow)] text-3xl" />,
    desc: "Grow your audience with targeted campaigns, SEO, and social media strategies.",
  },
  {
    title: "IT Solutions",
    icon: <RiComputerLine className="text-[var(--blue)] text-3xl" />,
    desc: "Comprehensive IT services and support for businesses of all sizes and industries.",
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-[var(--blue-dark)] text-3xl" />,
    desc: "Modern, responsive websites that deliver functionality, speed, and great UX.",
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt className="text-[var(--green-dark)] text-3xl" />,
    desc: "Cross-platform mobile applications with sleek design and powerful performance.",
  },
];

const courses = [
  {
    title: "Graphic Designing",
    icon: <FaPaintBrush className="text-[var(--orange)] text-3xl" />,
    desc: "Master design tools and techniques to create impactful visuals and branding assets.",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn className="text-[var(--yellow)] text-3xl" />,
    desc: "Learn SEO, social media, PPC, and strategies to grow brands in the digital world.",
  },
  {
    title: "Shopify Courses",
    icon: <FaShopify className="text-[var(--green)] text-3xl" />,
    desc: "Gain hands-on expertise in building, customizing, and managing Shopify stores.",
  },
  {
    title: "IELTS Preparation",
    icon: <RiBookOpenLine className="text-[var(--blue)] text-3xl" />,
    desc: "Comprehensive training to improve your reading, writing, listening, and speaking skills for the IELTS exam.",
  },
  {
    title: "IT Courses",
    icon: <RiComputerLine className="text-[var(--blue)] text-3xl" />,
    desc: "Learn essential computer skills including Typing, MS Word, Excel, and PowerPoint to boost workplace productivity and professional growth.",
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-[var(--blue-dark)] text-3xl" />,
    desc: "Master front-end and back-end development to create scalable, responsive, and industry-standard web applications.",
  },
];

const AboutWhatWeDo = () => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--white)] overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-dark)]">
          What <span className="text-[var(--purple)]">We Do</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--gray)]">
          At JacSkills, we provide professional services for businesses and
          career-focused courses for learners. Our mission is to bridge the gap
          between skills and services with real-world expertise.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Services */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[var(--offwhite)] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-3xl md:text-4xl font-semibold md:font-extrabold text-[var(--blue-dark)] mb-6 text-center">
            Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[var(--white)] p-5 rounded-xl shadow hover:shadow-xl transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-full bg-[var(--offwhite)] group-hover:bg-[var(--blue-light)] transition">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--gray-dark)]">
                    {service.title}
                  </h4>
                </div>
                <p className="text-[var(--gray)] text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Courses */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[var(--offwhite)] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-3xl md:text-4xl font-semibold md:font-extrabold text-[var(--purple-dark)] mb-6 text-center">
            Courses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group bg-[var(--white)] p-5 rounded-xl shadow hover:shadow-xl transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-full bg-[var(--offwhite)] group-hover:bg-[var(--purple-light)] transition">
                    {course.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--gray-dark)]">
                    {course.title}
                  </h4>
                </div>
                <p className="text-[var(--gray)] text-sm leading-relaxed">
                  {course.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWhatWeDo;
