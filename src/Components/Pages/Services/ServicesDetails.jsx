"use client";

import {
  FaShopify,
  FaBullhorn,
  FaPaintBrush,
  FaLaptopCode,
  FaHandshake,
} from "react-icons/fa";
import { MdStoreMallDirectory } from "react-icons/md";
import { motion } from "framer-motion";

const services = [
  {
    title: "Shopify Store Creation",
    icon: <FaShopify className="text-[var(--green-dark)] text-4xl" />,
    img: "https://images.unsplash.com/photo-1674027392842-29f8354e236c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2hvcGlmeSUyMFN0b3JlfGVufDB8fDB8fHww",
    desc: "We help you design and launch a fully functional Shopify store from scratch, tailored to your niche and branding. Our service includes theme customization, product setup, payment gateway integration, and a user-friendly interface that maximizes sales potential. You’ll receive a ready-to-use online store that is responsive, scalable, and optimized for conversions.",
  },
  {
    title: "Shopify Store Management",
    icon: <MdStoreMallDirectory className="text-[var(--blue-dark)] text-4xl" />,
    img: "https://images.unsplash.com/photo-1688561807403-ba262590f86f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNob3BpZnklMjBTdG9yZXxlbnwwfHwwfHx8MA%3D%3D",
    desc: "Our Shopify management service ensures your store runs seamlessly on a daily basis. From product updates, inventory management, and app integrations to order tracking and customer support optimization, we handle it all. You focus on growth while we maintain and optimize your eCommerce operations for efficiency and profitability.",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn className="text-[var(--orange)] text-4xl" />,
    img: "https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERpZ2l0YWwlMjBNYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
    desc: "Boost your online visibility with targeted digital marketing campaigns. We provide SEO, social media management, paid ads, and email marketing strategies designed to increase brand awareness, generate leads, and improve ROI. Our team combines creativity with analytics to deliver campaigns that truly connect with your audience.",
  },
  {
    title: "Graphic Designing",
    icon: <FaPaintBrush className="text-[var(--purple-dark)] text-4xl" />,
    img: "https://plus.unsplash.com/premium_photo-1661337109411-45b6478c38b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R3JhcGhpYyUyMERlc2lnbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    desc: "Our graphic design services cover everything from logo design and branding to social media creatives, brochures, and advertising materials. We create visually appealing designs that represent your brand identity and engage your target audience effectively. Every design is tailored to make your business stand out in a competitive market.",
  },
  {
    title: "Custom Website Development",
    icon: <FaLaptopCode className="text-[var(--blue)] text-4xl" />,
    img: "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEN1c3RvbSUyMFdlYnNpdGUlMjBEZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    desc: "Get a fully customized website built with modern technologies. Whether it’s a corporate site, portfolio, or advanced web application, we ensure responsive design, fast loading speeds, SEO optimization, and scalability. Our goal is to deliver websites that not only look great but also drive traffic and generate results for your business.",
  },
  {
    title: "IT Consultation",
    icon: <FaHandshake className="text-[var(--green)] text-4xl" />,
    img: "https://images.unsplash.com/photo-1637855195094-992d3d578f42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fElUJTIwQ29uc3VsdGF0aW9ufGVufDB8fDB8fHww",
    desc: "Our IT consultation service provides expert advice on system implementation, software selection, security solutions, and IT strategy development. We help businesses streamline processes, reduce costs, and adopt the right technology for sustainable growth. From startups to enterprises, we guide you in making informed IT decisions.",
  },
];

const ServicesDetails = () => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--offwhite)]">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--black)] text-center mb-10">
        Our <span className="text-[var(--yellow)]">Services</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[var(--white)] p-4 rounded-2xl shadow-md hover:shadow-lg transition group"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-52 object-cover rounded-lg mb-4 transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-[var(--blue-dark)] mb-2">
              {service.title}
            </h3>
            <p className="text-[var(--gray)] text-justify">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesDetails;
