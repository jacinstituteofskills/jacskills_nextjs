import { PrimaryButton } from "@/Components/ReUseAbleComponents/Buttons/Buttons";
import Link from "next/link";

const ServicesHeroSection = () => {
  return (
    <section
      className="relative h-[100vh] max-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1658526934242-aa541776ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXV0byUyMHdvcmtzaG9wfGVufDB8fDB8fHww')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--black)]/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-[var(--white)] text-3xl md:text-4xl font-bold leading-snug drop-shadow-md">
          Expert Auto Repair & Maintenance Services in Islamabad and Rawalpindi
        </h1>
        <p className="mt-3 text-[var(--gray-surface)] text-base md:text-lg font-normal drop-shadow-sm">
          From routine maintenance to complex repairs, Arshad Auto Workshop
          offers professional car care services you can trust. Our certified
          mechanics ensure your vehicle runs smoothly, safely, and efficiently —
          every time.
        </p>

        <Link href="/contact">
          <PrimaryButton buttonName={"Contact Us"} className="mt-6" />
        </Link>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
