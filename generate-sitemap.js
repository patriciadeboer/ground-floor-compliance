import fs from "fs";
import path from "path";
import services from "./src/data/services.js"; // your existing services export

const BASE_URL = "https://groundfloorcompliance.com";

// Static routes with custom priorities
const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/faq", priority: "0.7", changefreq: "monthly" },
];

// Dynamic service detail routes (default priority 0.7)
const serviceRoutes = services.map((s) => ({
  path: `/services/${s.id}`,
  priority: "0.7",
  changefreq: "monthly",
}));

// Merge all routes
const allRoutes = [...staticRoutes, ...serviceRoutes];

// Today’s date in ISO format (YYYY-MM-DD)
const today = new Date().toISOString().split("T")[0];

// Build sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <priority>${route.priority}</priority>
    <changefreq>${route.changefreq}</changefreq>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

// Write sitemap to public/
const outputPath = path.resolve("public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemap, "utf8");

console.log(`✅ Sitemap generated at ${outputPath}`);
