import HomeCoursesOverview from "@/Components/Pages/Home/HomeCoursesOverview";
import HomeCTASection from "@/Components/Pages/Home/HomeCTASection";
import HomeHeroSection from "@/Components/Pages/Home/HomeHeroSection";
import HomeServicesOverview from "@/Components/Pages/Home/HomeServicesOverview";
import HomeTestimonialsSection from "@/Components/Pages/Home/HomeTestimonialsSection";
import HomeWhyChooseUs from "@/Components/Pages/Home/HomeWhyChooseUs";
import { getServices, getCourses } from "@/lib/data/content";

export default async function Home() {
  const [services, courses] = await Promise.all([getServices(), getCourses()]);

  return (
    <div>
      <HomeHeroSection />
      <HomeServicesOverview services={services} />
      <HomeCoursesOverview courses={courses} />
      <HomeWhyChooseUs />
      <HomeTestimonialsSection />
      <HomeCTASection />
    </div>
  );
}
