import Link from "next/link";
import { FaBullseye, FaEye, FaEnvelopeOpenText } from "react-icons/fa";

const AboutMissionAndVision = () => {
  return (
    <section
      className="px-4 md:px-8 py-12 md:py-16 bg-fixed bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1675810094933-14233747e1b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWlzc2lvbiUyMGFuZCUyMHZpc2lvbiUyMGFzJTIwYSUyMG1lY2hhbmljfGVufDB8MHwwfHx8MA%3D%3D')",
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[var(--black)]/50" /> */}

      <div className="relative z-10 text-[var(--black)] space-y-12">
        {/* Mission */}
        <div className="flex flex-col md:flex-row items-start gap-6 bg-[var(--glass-white)] backdrop-blur-md border border-[var(--glass-border)] rounded-xl p-6 md:p-8 shadow-lg">
          <div className="text-[var(--accent-yellow)] text-4xl">
            <FaBullseye />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-[var(--black)] leading-relaxed">
              To provide top-notch automotive repair services with honesty,
              integrity, and reliability — ensuring customer satisfaction and
              road safety.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row items-start gap-6 bg-[var(--glass-white)] backdrop-blur-md border border-[var(--glass-border)] rounded-xl p-6 md:p-8 shadow-lg">
          <div className="text-[var(--primary-green-light)] text-4xl">
            <FaEye />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="text-[var(--black)] leading-relaxed">
              To become the most trusted and innovative auto workshop in the
              region, setting new standards in customer care and service
              excellence.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--accent-orange)] hover:bg-[var(--accent-orange-light)] text-[var(--black)] font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            <FaEnvelopeOpenText className="text-lg" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionAndVision;
