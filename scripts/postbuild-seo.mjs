import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distIndexPath = path.resolve(__dirname, "../dist/index.html");
const googleSiteVerification = process.env.VITE_GOOGLE_SITE_VERIFICATION?.trim();

if (!fs.existsSync(distIndexPath)) {
  console.warn("dist/index.html not found, skipping postbuild SEO injection.");
  process.exit(0);
}

if (!googleSiteVerification) {
  console.log("No VITE_GOOGLE_SITE_VERIFICATION provided, skipping verification meta injection.");
  process.exit(0);
}

const html = fs.readFileSync(distIndexPath, "utf8");
const marker = '<meta name="application-name" content="InoBux" />';
const verificationMeta = `    <meta name="google-site-verification" content="${googleSiteVerification}" />`;

if (html.includes('name="google-site-verification"')) {
  console.log("google-site-verification meta already present in dist/index.html");
  process.exit(0);
}

const updatedHtml = html.includes(marker)
  ? html.replace(marker, `${marker}\n${verificationMeta}`)
  : html.replace("<head>", `<head>\n${verificationMeta}`);

fs.writeFileSync(distIndexPath, updatedHtml, "utf8");
console.log("Injected google-site-verification meta into dist/index.html");
