import AboutHeroSection from "@/Components/Pages/About/AboutHeroSection";
import AboutOurApproach from "@/Components/Pages/About/AboutOurApproach";
import AboutOurStory from "@/Components/Pages/About/AboutOurStory";
import AboutWhatWeDo from "@/Components/Pages/About/AboutWhatWeDo";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <AboutOurStory />
      <AboutWhatWeDo />
      {/* <AboutOurApproach />       */}
    </div>
  );
};

export default AboutPage;
