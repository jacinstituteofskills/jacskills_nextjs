"use client";

import { motion } from "framer-motion";
import { getIcon } from "@/lib/icons";

const ServicesDetails = ({ services = [] }) => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--offwhite)]">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--black)] text-center mb-4">
        Our <span className="text-[var(--purple)]">Services</span>
      </h2>
      <p className="text-center text-[var(--gray)] max-w-2xl mx-auto mb-10">
        Professional solutions to grow your business — explore what we offer.
      </p>

      {services.length === 0 ? (
        <p className="text-center text-[var(--gray)]">
          Services will be added soon. Please check back shortly.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--white)] p-4 rounded-2xl shadow-md hover:shadow-lg transition group flex flex-col"
              >
                {service.image_url && (
                  <img
                    src={service.image_url}
                    alt={service.title}
                    className="w-full h-52 object-cover rounded-lg mb-4 transform transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                {Icon && (
                  <div className="mb-4">
                    <Icon className="text-[var(--purple)] text-4xl" />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-[var(--blue-dark)] mb-2">
                  {service.title}
                </h3>
                <p className="text-[var(--gray)] text-justify flex-grow">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ServicesDetails;
