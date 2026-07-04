import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import NavigationBar from "@/Components/Common/NavigationBar";
import Footer from "@/Components/Common/Footer";
import FloatingWhatsApp from "@/Components/Common/FloatingWhatsApp";

// Body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Heading / display font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

import { SITE } from "@/lib/site";

const description =
  "JacSkills is a professional institute offering industry-focused skills training and digital services — web development, digital marketing, Shopify, IT skills, real estate, and business solutions to help individuals and brands grow.";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "JacSkills | Skills Training & Digital Services",
    template: "%s | JacSkills",
  },
  description,
  keywords: [
    "JacSkills",
    "skills training",
    "digital services",
    "web development course",
    "digital marketing",
    "Shopify",
    "IELTS preparation",
    "IT skills",
    "real estate training",
  ],
  applicationName: "JacSkills",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "JacSkills",
    title: "JacSkills | Skills Training & Digital Services",
    description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "JacSkills | Skills Training & Digital Services",
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased max-w-screen-2xl mx-auto">
        <NextTopLoader color="#019874" showSpinner={false} />
        <NavigationBar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
