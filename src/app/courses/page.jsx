import { Suspense } from "react";
import Contact from "@/Components/Pages/Contact/Contact";
import CoursesDetails from "@/Components/Pages/Courses/CoursesDetails";
import CoursesHeroSection from "@/Components/Pages/Courses/CoursesHeroSection";
import CardGridSkeleton from "@/Components/ReUseAbleComponents/Skeletons/CardGridSkeleton";
import { getCourses } from "@/lib/data/content";

export const metadata = {
  title: "Our Courses",
  description:
    "Job-ready courses at JacSkills — web development, digital marketing, Shopify, IT skills, IELTS preparation, and expert-level real estate training.",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "Our Courses | JacSkills",
    description:
      "Learn web development, digital marketing, Shopify, IT skills, IELTS and real estate — practical, hands-on courses led by industry experts.",
    url: "/courses",
  },
};

// Only this part depends on the database; it streams in behind a skeleton
// while the hero + contact render immediately.
async function CoursesList() {
  const courses = await getCourses();
  return <CoursesDetails courses={courses} />;
}

export default function CoursesPage() {
  return (
    <div>
      <CoursesHeroSection />
      <Suspense fallback={<CardGridSkeleton title="Loading courses" />}>
        <CoursesList />
      </Suspense>
      <Contact />
    </div>
  );
}
