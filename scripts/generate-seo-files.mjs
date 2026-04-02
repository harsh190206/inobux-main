import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { siteConfig } from "../src/config/site.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, "../public");
const today = new Date().toISOString().slice(0, 10);

const xmlEscape = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${siteConfig.routes
  .map((route) => {
    const lastmod = route.articleDate || today;
    const loc = `${siteConfig.url}${route.path}`;

    return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /
Disallow: /cgi-bin/
Disallow: /tmp/
Disallow: /private/

Host: ${siteConfig.url}
Sitemap: ${siteConfig.url}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8");
fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");

console.log(`Generated sitemap.xml and robots.txt for ${siteConfig.url}`);
