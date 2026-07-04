import { Suspense } from "react";
import Contact from "@/Components/Pages/Contact/Contact";
import ServicesDetails from "@/Components/Pages/Services/ServicesDetails";
import ServicesHeroSection from "@/Components/Pages/Services/ServicesHeroSection";
import CardGridSkeleton from "@/Components/ReUseAbleComponents/Skeletons/CardGridSkeleton";
import { getServices } from "@/lib/data/content";

export const metadata = {
  title: "Our Services",
  description:
    "Explore JacSkills services — Shopify store creation & management, digital marketing, custom web development, real estate consultancy, and IT consultation.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services | JacSkills",
    description:
      "Shopify, digital marketing, web development, real estate consultancy and IT consultation — professional services to grow your business.",
    url: "/services",
  },
};

// Only this part depends on the database; it streams in behind a skeleton
// while the hero + contact render immediately.
async function ServicesList() {
  const services = await getServices();
  return <ServicesDetails services={services} />;
}

export default function ServicesPage() {
  return (
    <div>
      <ServicesHeroSection />
      <Suspense fallback={<CardGridSkeleton title="Loading services" />}>
        <ServicesList />
      </Suspense>
      <Contact />
    </div>
  );
}
