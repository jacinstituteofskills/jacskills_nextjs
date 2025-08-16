"use client";

import React from "react";
import { MdAddCall } from "react-icons/md";

const teamMembers = [
  {
    name: "Arshad Jan",
    image:
      "https://plus.unsplash.com/premium_photo-1739786995646-480d5cfd83dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
    role: "Founder & Chief Mechanic",
    description: "Leading the workshop with 20+ years of expertise.",
    phoneNumber: "03330333003",
  },
  {
    name: "Raja Tariq",
    image:
      "https://plus.unsplash.com/premium_photo-1739786995646-480d5cfd83dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
    role: "Senior Auto Technician",
    description: "Expert in diagnostics and engine repair.",
    phoneNumber: "03455204106",
  },
];

const AboutMeetTheTeam = () => {
  return (
    <section className="bg-[var(--gray-background)] px-4 md:px-8 py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-green)]">
          Meet Our Team
        </h2>
        <p className="text-[var(--gray-text-muted)] text-lg mt-2">
          Experienced professionals behind Arshad Auto Workshop.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-[var(--white)] rounded-2xl p-6 shadow-lg border border-[var(--gray-border)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-[var(--primary-blue-light)] group-hover:shadow-[0_0_10px_var(--primary-blue-light)] transition-all duration-300"
              />
              <h3 className="mt-4 text-2xl font-semibold text-[var(--gray-text-dark)]">
                {member.name}
              </h3>
              <p className="text-[var(--primary-green)] font-medium text-lg mt-1">
                {member.role}
              </p>
              <p className="text-[var(--gray-text-muted)] mt-2 text-md">
                {member.description}
              </p>
              <a
                href={`tel:${member.phoneNumber}`}
                className="mt-3 text-[var(--primary-blue)] hover:text-[var(--primary-green)] active:text-[var(--primary-green)] font-medium text-md flex items-center justify-center gap-4"
              >
                <MdAddCall className="text-xl" />
                {member.phoneNumber}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMeetTheTeam;
