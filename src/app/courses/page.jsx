import Contact from "@/Components/Pages/Contact/Contact";
import CoursesDetails from "@/Components/Pages/Courses/CoursesDetails";
import CoursesHeroSection from "@/Components/Pages/Courses/CoursesHeroSection";
import React from "react";

const CoursesPage = () => {
  return (
    <div>
      <CoursesHeroSection />
      <CoursesDetails />
      <Contact />
    </div>
  );
};

export default CoursesPage;
