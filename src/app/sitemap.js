import { SITE } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  const routes = [
    { path: "", priority: 1.0 },
    { path: "/services", priority: 0.9 },
    { path: "/courses", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority,
  }));
}
