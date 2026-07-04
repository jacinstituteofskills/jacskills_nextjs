import Contact from "@/Components/Pages/Contact/Contact";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with JacSkills. Message us on WhatsApp or send an enquiry about our courses and digital services — we reply fast.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact JacSkills",
    description:
      "Message us on WhatsApp or send an enquiry about our courses and services.",
    url: "/contact",
  },
};

const ContactPage = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default ContactPage;
