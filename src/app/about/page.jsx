import AboutHeroSection from "@/Components/Pages/About/AboutHeroSection";
import AboutImpactAndAchievements from "@/Components/Pages/About/AboutImpactAndAchievements";
import AboutMeetOurTeam from "@/Components/Pages/About/AboutMeetOurTeam";
import AboutOurApproach from "@/Components/Pages/About/AboutOurApproach";
import AboutOurStory from "@/Components/Pages/About/AboutOurStory";
import AboutWhatWeDo from "@/Components/Pages/About/AboutWhatWeDo";
import AboutWhyChooseJacSkills from "@/Components/Pages/About/AboutWhyChooseJacSkills";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <AboutOurStory />
      <AboutWhatWeDo />
      <AboutOurApproach />
      <AboutWhyChooseJacSkills />
      <AboutMeetOurTeam />
      <AboutImpactAndAchievements />
    </div>
  );
};

export default AboutPage;
