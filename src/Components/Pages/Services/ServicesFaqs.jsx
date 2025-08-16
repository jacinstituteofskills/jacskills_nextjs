"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What types of electrical services do you offer?",
    answer:
      "We provide comprehensive electrical services including engine wiring, transmission wiring, airbag and ABS system repairs, radar & ADAS calibration, ECU and BCM programming, hybrid and electric vehicle services, and air conditioning maintenance.",
  },
  {
    question: "Do you service hybrid and electric vehicles?",
    answer:
      "Yes, we specialize in hybrid battery replacements, inverter maintenance, EV battery repair and programming to ensure your vehicle performs at its best.",
  },
  {
    question: "What kind of mechanical services are available?",
    answer:
      "Our mechanical services include engine swaps and overhauling, transmission swaps and calibration, suspension overhauls, brake service, engine mount replacement, shock absorber replacement, and steering box assembly.",
  },
  {
    question: "How can I get a quote for my service needs?",
    answer:
      "You can get a free quote by visiting our contact page and filling out the inquiry form or by calling our customer support directly. We’ll provide a detailed estimate based on your vehicle and service requirements.",
  },
  {
    question: "Are your parts and materials genuine and high quality?",
    answer:
      "Absolutely. We use genuine, high-quality parts and materials for all repairs and maintenance, including American gas for AC refills and OEM parts for all electrical and mechanical components.",
  },
];

const ServicesFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[var(--white)] py-8 sm:py-12 lg:py-16 px-8 md:px-12 rounded-lg shadow-md max-w-3xl mx-auto my-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Frequently{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-green)]">
            Asked Questions
          </span>
        </h2>
        <p className="text-base md:text-lg text-[var(--gray-text-muted)] max-w-2xl mx-auto">
          Find answers to common queries about our professional auto services.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleAccordion(index)}
            className="bg-[var(--white)] border border-[var(--gray-border)] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <button
              className="flex items-center justify-between w-full text-left cursor-pointer"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <h3 className="text-lg font-medium cursor-pointer">
                {faq.question}
              </h3>
              <span
                className={`cursor-pointer ml-4 text-[var(--primary-green)] transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <FaChevronDown />
              </span>
            </button>

            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-sm text-[var(--gray-text-muted)]">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesFaqs;
