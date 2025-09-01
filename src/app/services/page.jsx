import Contact from "@/Components/Pages/Contact/Contact";
import ServicesDetails from "@/Components/Pages/Services/ServicesDetails";
import ServicesHeroSection from "@/Components/Pages/Services/ServicesHeroSection";
import React from "react";

const ServicesPage = () => {
  return (
    <div>
      <ServicesHeroSection />
      <ServicesDetails />
      <Contact />
    </div>
  );
};

export default ServicesPage;
