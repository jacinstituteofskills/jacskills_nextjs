import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import NavigationBar from "@/Components/Common/NavigationBar";
import Footer from "@/Components/Common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JacSkills | Skills Training & Digital Services",
  description:
    "JacSkills is a professional institute offering industry-focused skills training and digital services. We provide courses and services in web development, digital marketing, Shopify, IT skills, real estate, and business solutions to help individuals and brands grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen-2xl mx-auto`}
      >
        <NextTopLoader color="#019874" showSpinner={false} />
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
