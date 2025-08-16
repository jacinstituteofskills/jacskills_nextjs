import { PrimaryButton } from "@/Components/ReUseAbleComponents/Buttons/Buttons";
import Link from "next/link";

const AboutHeroSection = () => {
  return (
    <section
      className="relative h-[80vh] md:h-[100vh] max-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1490223966554-5de0fd551b91?w=1200&auto=format&fit=crop&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--black)]/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-[var(--white)] text-3xl md:text-4xl font-bold leading-snug drop-shadow-md">
          Reliable Car Repair & Maintenance Experts
        </h1>
        <p className="mt-3 text-[var(--gray-surface)] text-base md:text-lg font-normal drop-shadow-sm">
          Dedicated to excellence in car maintenance and repair, Arshad Auto
          Workshop has been your trusted automotive partner for years. Discover
          how we combine expertise with care.
        </p>

        <Link href="/services">
          <PrimaryButton buttonName={"View Our Services"} className="mt-6" />
        </Link>
      </div>
    </section>
  );
};

export default AboutHeroSection;
