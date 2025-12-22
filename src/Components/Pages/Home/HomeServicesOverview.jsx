"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PrimaryButton } from "@/Components/ReUseAbleComponents/Buttons/Buttons";

const services = [
  {
    title: "Shopify Store Creation",
    image:
      "https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcGlmeSUyMHN0b3JlfGVufDB8fDB8fHww",
    description:
      "Launch a stunning and fully functional Shopify store tailored to your brand. From theme customization to seamless checkout integration, we ensure your store is ready to convert visitors into loyal customers.",
  },
  {
    title: "Shopify Store Management",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&auto=format&fit=crop&q=60",
    description:
      "Keep your Shopify store running smoothly with our comprehensive management services. We handle product uploads, inventory updates, performance optimization, and order tracking so you can focus on growth.",
  },
  {
    title: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&auto=format&fit=crop&q=60",
    description:
      "Boost your online presence with data-driven marketing strategies. From social media campaigns to SEO and paid ads, we help you reach the right audience and maximize your return on investment.",
  },
  {
    title: "Real Estate Consultancy & Marketing",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
    description:
      "Professional real estate consultancy services covering property marketing, client handling, investment guidance, and deal structuring. We help agents and investors close smarter and more profitable deals.",
  },
  {
    title: "Custom Website Development",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60",
    description:
      "Get a fully customized website built with cutting-edge technologies. Whether it’s a corporate site, portfolio, or e-commerce platform, we deliver responsive and scalable solutions.",
  },
  {
    title: "Mobile App Development",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60",
    description:
      "Turn your idea into a feature-rich mobile application. We design and develop apps for both iOS and Android that provide seamless user experiences and support long-term growth.",
  },
];

const HomeServicesOverview = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[var(--white)] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="md:h-60 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-[var(--green-dark)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--gray)] text-base leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

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
