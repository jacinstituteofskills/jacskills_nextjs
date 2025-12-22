"use client";

import {
  FaBullhorn,
  FaShopify,
  FaLaptopCode,
  FaKeyboard,
  FaBuilding,
} from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Expert Level Real Estate Training",
    icon: <FaBuilding className="text-[var(--purple-dark)] text-4xl" />,
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
    desc: "Gain expert-level knowledge in real estate investment, property management, market analysis, and client handling. Learn practical strategies for buying, selling, and managing residential and commercial properties, along with marketing and negotiation techniques to maximize returns.",
  },
  {
    title: "Digital Marketing Essentials",
    icon: <FaBullhorn className="text-[var(--orange)] text-4xl" />,
    img: "https://images.unsplash.com/photo-1657812670261-7b76ba04525c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGlnaXRhbCUyME1hcmtldGluZyUyMEVzc2VudGlhbHN8ZW58MHx8MHx8fDA%3D",
    desc: "Master the art of online marketing with a focus on SEO, social media strategies, content marketing, Google Ads, and email campaigns. This course teaches you how to build an audience, increase engagement, and drive sales using modern marketing techniques. Practical projects will give you hands-on experience in running successful campaigns.",
  },
  {
    title: "Shopify Store Creation & Management",
    icon: <FaShopify className="text-[var(--green-dark)] text-4xl" />,
    img: "https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3BpZnklMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D",
    desc: "Learn how to set up, customize, and manage a Shopify store from scratch. You’ll cover store setup, theme customization, product listings, shipping methods, payment gateways, and order management. The course also teaches you store optimization techniques, marketing strategies, and automation tools to scale your eCommerce business.",
  },
  {
    title: "IT Skills & Productivity Tools",
    icon: <FaKeyboard className="text-[var(--blue-dark)] text-4xl" />,
    img: "https://images.unsplash.com/photo-1649433391420-542fcd3835ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29yZCUyMGV4Y2VsfGVufDB8fDB8fHww",
    desc: "Enhance your workplace efficiency with core IT skills. You’ll improve your typing speed and accuracy while mastering Microsoft Word for documents, Excel for data analysis, and PowerPoint for impactful presentations. This course is ideal for students, professionals, and job seekers looking to improve their productivity and employability.",
  },
  {
    title: "IELTS Preparation Course",
    icon: <MdLanguage className="text-[var(--info-blue)] text-4xl" />,
    img: "https://images.unsplash.com/photo-1660927059794-152d06e11016?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SUVMVFN8ZW58MHx8MHx8fDA%3D",
    desc: "Get comprehensive IELTS preparation covering listening, reading, writing, and speaking modules. Our expert-designed lessons and practice tests help you build strategies to improve fluency, accuracy, and confidence. By the end of this course, you’ll be fully prepared to achieve a high band score in your IELTS exam.",
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-[var(--blue)] text-4xl" />,
    img: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    desc: "Dive into full-stack web development with HTML, CSS, JavaScript, Reactjs, Nodejs, Expressjs and MongoDB. You’ll learn how to build responsive websites, interactive web apps, and scalable solutions. The course emphasizes real-world projects to give you practical experience, making you job-ready as a web developer.",
  },
];

const CoursesDetails = () => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--offwhite)]">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--black)] text-center mb-10">
        Our <span className="text-[var(--yellow)]">Courses</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[var(--white)] p-4 rounded-2xl shadow-md hover:shadow-lg transition group"
          >
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-52 object-cover rounded-lg mb-4 transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="mb-4">{course.icon}</div>
            <h3 className="text-xl font-semibold text-[var(--blue-dark)] mb-2">
              {course.title}
            </h3>
            <p className="text-[var(--gray)] text-justify">{course.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoursesDetails;
