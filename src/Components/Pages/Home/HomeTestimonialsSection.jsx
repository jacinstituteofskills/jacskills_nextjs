"use client";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/Components/ReUseAbleComponents/Buttons/Buttons";

const studentTestimonials = [
  {
    name: "Ahmed Ali",
    feedback:
      "The courses are extremely detailed and practical. I could apply the techniques immediately in my projects. The instructors are approachable and always available for guidance.",
  },
  {
    name: "Ali Raza",
    feedback:
      "Excellent learning experience! The curriculum is well-structured, and the real-world projects helped me solidify my skills and gain confidence.",
  },
  {
    name: "Fatima Aslam",
    feedback:
      "I was able to improve my graphic design and digital marketing skills significantly. The hands-on exercises made learning interactive and enjoyable.",
  },
  {
    name: "Hassan Javed",
    feedback:
      "A highly professional course platform. The instructors are experts, and the materials are up-to-date. I feel ready to take on real-world projects.",
  },
];

const businessTestimonials = [
  {
    name: "Sarah Khan",
    feedback:
      "JacSkills transformed my online business with their professional services. Their strategic approach to digital marketing increased our leads and overall sales.",
  },
  {
    name: "Fatima Noor",
    feedback:
      "Working with JacSkills has been a game-changer. Their expertise in website development and marketing strategies elevated our brand presence online.",
  },
  {
    name: "Usman Qadir",
    feedback:
      "The team provided exceptional support and guidance. Our Shopify store launch was seamless, and their ongoing management services have helped maintain consistent growth.",
  },
  {
    name: "Ayesha Malik",
    feedback:
      "I highly recommend JacSkills for any business looking to scale. Their attention to detail, professionalism, and results-driven approach are outstanding.",
  },
];

const HomeTestimonialsSection = () => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--offwhite)]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-dark)]">
          What Our <span className="text-[var(--purple)]">Clients Say</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--gray)]">
          Hear from our satisfied students and business clients who trusted us
          for their growth and success.
        </p>
      </div>

      {/* Student Testimonials */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-[var(--blue-dark)] mb-6 text-center">
          Students
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studentTestimonials.map((test, index) => (
            <motion.div
              key={index}
              className="bg-[var(--white)] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <FaQuoteLeft className="text-[var(--purple)] text-2xl mb-2" />
                <p className="text-[var(--gray)] text-base leading-relaxed">
                  {test.feedback}
                </p>
                <FaQuoteRight className="text-[var(--purple)] text-2xl mt-2 ml-auto" />
              </div>
              <p className="text-[var(--gray-dark)] font-semibold mt-4">
                — {test.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Business Testimonials */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-[var(--green-dark)] mb-6 text-center">
          Business Owners
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessTestimonials.map((test, index) => (
            <motion.div
              key={index}
              className="bg-[var(--white)] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <FaQuoteLeft className="text-[var(--purple)] text-2xl mb-2" />
                <p className="text-[var(--gray)] text-base leading-relaxed">
                  {test.feedback}
                </p>
                <FaQuoteRight className="text-[var(--purple)] text-2xl mt-2 ml-auto" />
              </div>
              <p className="text-[var(--gray-dark)] font-semibold mt-4">
                — {test.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Get a Quote Button */}
      <div className="text-center mt-8">
        <PrimaryButton buttonName="Get a Quote" />
      </div>
    </section>
  );
};

export default HomeTestimonialsSection;
