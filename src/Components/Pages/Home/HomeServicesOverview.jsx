"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PrimaryButton } from "@/Components/ReUseAbleComponents/Buttons/Buttons";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const HomeServicesOverview = ({ services = [] }) => {
  if (services.length === 0) return null;
  const preview = services.slice(0, 6);

  return (
    <section className="px-4 md:px-8 py-8 md:py-12">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-dark)]">
          Our <span className="text-[var(--purple)]">Services</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--gray)]">
          Empower your business with our professional solutions – from Shopify
          expertise to marketing and design, we’ve got everything covered.
        </p>
      </div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {preview.map((service, index) => (
          <motion.div
            key={service.id || index}
            variants={fadeUp}
            className="bg-[var(--white)] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
          >
            {service.image_url && (
              <div className="md:h-60 overflow-hidden">
                <img
                  src={service.image_url}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-[var(--green-dark)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--gray)] text-base leading-relaxed flex-grow line-clamp-4">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Services Button */}
      <div className="mt-12 text-center">
        <Link href="/services">
          <PrimaryButton buttonName="View All Services" />
        </Link>
      </div>
    </section>
  );
};

export default HomeServicesOverview;
