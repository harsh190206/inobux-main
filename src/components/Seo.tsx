import { useEffect } from "react";
import { siteConfig } from "@/config/site.js";

const BASE_URL = siteConfig.url;

function setMeta(name: string, content?: string) {
  if (!content) return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
  el.content = content;
}

function removeMeta(name: string) {
  document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.remove();
}

function setMetaProperty(property: string, content?: string) {
  if (!content) return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute("property", property); document.head.appendChild(el); }
  el.content = content;
}

function removeMetaProperty(property: string) {
  document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)?.remove();
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>("link[rel=\"canonical\"]");
  if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
  link.href = url;
}

function setStructuredData(id: string, json: object) {
  let script = document.head.querySelector<HTMLScriptElement>(`script[data-seo="${id}"]`);
  if (!script) {
    script = document.createElement("script");
    script.setAttribute("data-seo", id);
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(json);
}

function removeStructuredData(id: string) {
  document.head.querySelector<HTMLScriptElement>(`script[data-seo="${id}"]`)?.remove();
}

type SeoProps = {
  title?: string;
  description?: string;
  canonicalPath?: string;
  openGraphImage?: string;
  openGraphType?: "website" | "article";
  robots?: string;
  articleDate?: string;
  breadcrumbs?: { name: string; path: string }[];
  keywords?: string[];
};

export default function Seo({
  title,
  description,
  canonicalPath,
  openGraphImage,
  openGraphType = "website",
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  articleDate,
  breadcrumbs,
  keywords,
}: SeoProps) {
  useEffect(() => {
    const resolvedTitle = title || siteConfig.defaultTitle;
    const resolvedDescription = description || siteConfig.defaultDescription;
    const resolvedKeywords = keywords && keywords.length > 0 ? keywords : siteConfig.defaultKeywords;
    const canonicalUrl = canonicalPath
      ? canonicalPath.startsWith("http") ? canonicalPath : `${BASE_URL}${canonicalPath}`
      : BASE_URL;

    const ogImage = openGraphImage
      ? openGraphImage.startsWith("http")
        ? openGraphImage
        : `${BASE_URL}${openGraphImage}`
      : `${BASE_URL}${siteConfig.logoPath}`;

    document.title = resolvedTitle;
    setMetaProperty("og:title", resolvedTitle);
    setMeta("twitter:title", resolvedTitle);

    setMeta("description", resolvedDescription);
    setMetaProperty("og:description", resolvedDescription);
    setMeta("twitter:description", resolvedDescription);

    setMeta("keywords", resolvedKeywords.join(", "));

    setCanonical(canonicalUrl);
    setMetaProperty("og:url", canonicalUrl);
    setMetaProperty("og:type", openGraphType);
    setMetaProperty("og:image", ogImage);
    setMetaProperty("og:image:alt", title || siteConfig.name);
    setMetaProperty("og:image:width", "1200");
    setMetaProperty("og:image:height", "630");
    setMetaProperty("og:site_name", siteConfig.name);
    setMetaProperty("og:locale", siteConfig.locale);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:site", siteConfig.twitterSite);
    setMeta("twitter:creator", siteConfig.twitterSite);
    setMeta("twitter:url", canonicalUrl);
    setMeta("twitter:image", ogImage);
    setMeta("twitter:image:alt", siteConfig.name);
    setMeta("author", siteConfig.author);
    setMeta("application-name", siteConfig.name);
    setMeta("apple-mobile-web-app-title", siteConfig.name);
    setMeta("color-scheme", "light dark");
    setMeta("referrer", "strict-origin-when-cross-origin");
    setMeta("theme-color", "#0ea5e9");
    setMeta("robots", robots);
    setMeta("googlebot", robots);
    document.documentElement.lang = siteConfig.language;

    // WebPage / Article structured data
    const pageSchema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": openGraphType === "article" ? "Article" : "WebPage",
      "@id": `${canonicalUrl}#${openGraphType === "article" ? "article" : "webpage"}`,
      "url": canonicalUrl,
      "name": resolvedTitle,
      "description": resolvedDescription,
      "inLanguage": siteConfig.language,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "publisher": {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": siteConfig.name,
        "logo": { "@type": "ImageObject", "url": `${BASE_URL}${siteConfig.logoPath}` }
      },
    };

    if (openGraphType === "article" && articleDate) {
      pageSchema["datePublished"] = articleDate;
      pageSchema["dateModified"] = articleDate;
      pageSchema["image"] = ogImage;
      setMetaProperty("article:published_time", articleDate);
      setMetaProperty("article:modified_time", articleDate);
    } else {
      removeMetaProperty("article:published_time");
      removeMetaProperty("article:modified_time");
    }

    setStructuredData("page", pageSchema);

    // BreadcrumbList for blog pages
    if (breadcrumbs && breadcrumbs.length > 0) {
      setStructuredData("breadcrumb", {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": crumb.name,
          "item": crumb.path.startsWith("http") ? crumb.path : `${BASE_URL}${crumb.path}`,
        })),
      });
    } else {
      removeStructuredData("breadcrumb");
    }

    return () => {
      removeMeta("keywords");
    };
  }, [title, description, canonicalPath, openGraphImage, openGraphType, robots, articleDate, breadcrumbs, keywords]);

  return null;
}
