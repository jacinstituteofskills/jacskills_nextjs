"use client"

import { FaWrench, FaClock, FaStar } from "react-icons/fa";

const AboutOurStory = () => {
  return (
    <section className="bg-[var(--white)] px-4 md:px-8 py-12 md:py-12">
      <div className="grid gap-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-blue)] text-center">
          Our Story
        </h2>
        <p className="text-[var(--gray-text-muted)] text-lg text-center max-w-3xl mx-auto">
          With over 20+ years of hands-on experience,{" "}
          <strong className="text-[var(--primary-green)]">Arshad</strong>{" "}
          founded this workshop with a passion for excellence in auto repair and
          a deep commitment to customer satisfaction. What began as a small
          garage is now a trusted name in reliable automotive services.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* Milestone 1 */}
          <div className="bg-[var(--white)] shadow-md rounded-xl p-6 border border-[var(--gray-border)] hover:shadow-lg transition-all duration-300">
            <div className="text-[var(--primary-blue)] text-3xl mb-4">
              <FaWrench />
            </div>
            <h3 className="text-xl font-semibold text-[var(--gray-text-dark)] mb-2">
              Started with Passion
            </h3>
            <p className="text-[var(--gray-text-muted)]">
              Arshad started the workshop after years of experience working in
              leading service centers, driven by a vision to offer honest and
              skilled repairs.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="bg-[var(--white)] shadow-md rounded-xl p-6 border border-[var(--gray-border)] hover:shadow-lg transition-all duration-300">
            <div className="text-[var(--primary-green)] text-3xl mb-4">
              <FaClock />
            </div>
            <h3 className="text-xl font-semibold text-[var(--gray-text-dark)] mb-2">
              Years of Experience
            </h3>
            <p className="text-[var(--gray-text-muted)]">
              With more than 20+ years in the field, Arshad has built a
              reputation for precision, timely service, and lasting results in
              car maintenance.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="bg-[var(--white)] shadow-md rounded-xl p-6 border border-[var(--gray-border)] hover:shadow-lg transition-all duration-300">
            <div className="text-[var(--accent-yellow)] text-3xl mb-4">
              <FaStar />
            </div>
            <h3 className="text-xl font-semibold text-[var(--gray-text-dark)] mb-2">
              Trusted by Customers
            </h3>
            <p className="text-[var(--gray-text-muted)]">
              Today, our workshop is known for reliability, transparent pricing,
              and a loyal customer base who trust us with everything from oil
              changes to engine diagnostics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurStory;
