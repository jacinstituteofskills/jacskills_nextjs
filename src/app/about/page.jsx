import AboutCallToAction from "@/Components/Pages/About/AboutCallToAction";
import AboutHeroSection from "@/Components/Pages/About/AboutHeroSection";
import AboutImpactAndAchievements from "@/Components/Pages/About/AboutImpactAndAchievements";
import AboutMeetOurTeam from "@/Components/Pages/About/AboutMeetOurTeam";
import AboutOurApproach from "@/Components/Pages/About/AboutOurApproach";
import AboutOurStory from "@/Components/Pages/About/AboutOurStory";
import AboutWhatWeDo from "@/Components/Pages/About/AboutWhatWeDo";
import AboutWhyChooseJacSkills from "@/Components/Pages/About/AboutWhyChooseJacSkills";
import { getTeam } from "@/lib/data/content";

export const metadata = {
  title: "About Us",
  description:
    "Learn about JacSkills — our story, approach, and the team behind our industry-focused skills training and digital services.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About JacSkills",
    description:
      "Our story, approach and the expert team behind JacSkills' training and digital services.",
    url: "/about",
  },
};

export default async function AboutPage() {
  const team = await getTeam();

  return (
    <div>
      <AboutHeroSection />
      <AboutOurStory />
      <AboutWhatWeDo />
      <AboutOurApproach />
      <AboutWhyChooseJacSkills />
      <AboutMeetOurTeam team={team} />
      <AboutImpactAndAchievements />
      <AboutCallToAction />
    </div>
  );
}
