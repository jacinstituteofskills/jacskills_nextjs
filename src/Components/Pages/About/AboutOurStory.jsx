"use client";

import { FaLightbulb, FaGlobe, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

const storyData = [
  {
    title: "Origin",
    icon: <FaGlobe className="text-[var(--blue)] text-4xl" />,
    description:
      "JacSkills was founded to bridge the gap between education and real-world application. We empower individuals with practical skills and provide businesses with professional solutions, creating a hub for continuous growth and learning.",
    image:
      "https://plus.unsplash.com/premium_photo-1676585567192-3eedaf478e54?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Vision",
    icon: <FaLightbulb className="text-[var(--yellow)] text-4xl" />,
    description:
      "Our vision is to be the go-to platform connecting skill development with business solutions. We aim to help learners and organizations thrive in a competitive landscape through practical knowledge and professional expertise.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Mission",
    icon: <FaHandsHelping className="text-[var(--green)] text-4xl" />,
    description:
      "Our mission is to empower students and business owners by providing expert-led courses, hands-on workshops, and professional services that drive tangible results and foster growth for all stakeholders.",
    image:
      "http://plus.unsplash.com/premium_photo-1669686968235-72705fc13694?w=500&auto=format&fit=crop&q=60",
  },
];

const AboutOurStory = () => {
  return (
    <section className="px-4 md:px-8 py-12 bg-[var(--offwhite)]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-dark)]">
          Our <span className="text-[var(--purple)]">Story</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--gray)]">
          Bridging the gap between skills and services, empowering both students
          and businesses to reach their full potential.
        </p>
      </div>

      {/* Story Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {storyData.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-[var(--white)] p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 overflow-hidden flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-30"
              />
              {/* Optional Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--purple-light)] to-[var(--blue-light)] opacity-20"></div>
            </div>

            {/* Icon Circle */}
            <div className="relative z-10 mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-[var(--white)] shadow-md">
              {item.icon}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--black)] mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--gray-dark)] text-lg md:text-xl leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutOurStory;
