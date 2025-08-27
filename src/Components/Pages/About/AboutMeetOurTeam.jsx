"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Hussnain Ali",
    role: "Director",
    img: "https://images.unsplash.com/photo-1750535135645-005e250ff210?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHwyfDB8fHww",
    bio: "Visionary leader driving JacSkills with passion, strategy, and a focus on long-term impact.",
  },
  {
    name: "Muhammad Javeed",
    role: "Director",
    img: "https://images.unsplash.com/photo-1750535135645-005e250ff210?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHwyfDB8fHww",
    bio: "Ensures seamless operations and execution, turning ideas into reality with efficiency.",
  },
  {
    name: "Mirza",
    role: "Principal",
    img: "https://images.unsplash.com/photo-1750535135645-005e250ff210?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHwyfDB8fHww",
    bio: "Academic leader shaping practical learning, guiding learners towards professional success.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const AboutMeetOurTeam = () => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--offwhite)]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--gray-dark)]">
          Meet Our <span className="text-[var(--green-dark)]">Team</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[var(--gray)] leading-relaxed">
          We are proud to have a large team of talented professionals. Here are
          the three main masterminds leading JacSkills, but our journey is
          powered by many more.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-[var(--white)] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden text-center"
          >
            {/* Image */}
            <div className="md:h-80 w-full overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--green-dark)]">
                {member.name}
              </h3>
              <p className="text-[var(--blue-dark)] font-medium">
                {member.role}
              </p>
              <p className="mt-3 text-[var(--gray)] leading-relaxed">
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
