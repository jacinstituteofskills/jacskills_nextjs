"use client";

import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const AboutMeetOurTeam = ({ team = [] }) => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--offwhite)]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--gray-dark)]">
          Meet Our <span className="text-[var(--green-dark)]">Team</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[var(--gray)] leading-relaxed">
          Behind JacSkills is a team of dedicated professionals. These leaders
          guide our vision, strategy, and commitment to excellence.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.id || index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-[var(--white)] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden text-center"
          >
            {/* Image */}
            <div className="relative h-72 w-full overflow-hidden flex items-center justify-center bg-[var(--gray-light)]">
              {member.image_url ? (
                <img
                  src={member.image_url}
                  alt={member.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <FaUserCircle className="text-[var(--gray-dark)] text-7xl" />
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--green-dark)]">
                {member.name}
              </h3>
              <p className="text-[var(--blue-dark)] font-medium">{member.role}</p>
              <p className="mt-3 text-[var(--gray)] leading-relaxed text-sm md:text-base">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutMeetOurTeam;
