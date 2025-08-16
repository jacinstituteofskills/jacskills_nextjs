import HomeCoursesOverview from "@/Components/Pages/Home/HomeCoursesOverview";
import HomeCTASection from "@/Components/Pages/Home/HomeCTASection";
import HomeHeroSection from "@/Components/Pages/Home/HomeHeroSection";
import HomeServicesOverview from "@/Components/Pages/Home/HomeServicesOverview";
import HomeTestimonialsSection from "@/Components/Pages/Home/HomeTestimonialsSection";
import HomeWhyChooseUs from "@/Components/Pages/Home/HomeWhyChooseUs";

export default function Home() {
  return (
    <div>
      <HomeHeroSection />
      <HomeServicesOverview />
      <HomeCoursesOverview />
      <HomeWhyChooseUs />
      <HomeTestimonialsSection />
      <HomeCTASection />
    </div>
  );
}
