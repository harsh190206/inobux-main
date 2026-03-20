import { useEffect } from "react";

const BASE_URL = "https://www.inobux.com";

function setMeta(name: string, content?: string) {
  if (!content) return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
  el.content = content;
}

function setMetaProperty(property: string, content?: string) {
  if (!content) return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute("property", property); document.head.appendChild(el); }
  el.content = content;
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

type SeoProps = {
  title?: string;
  description?: string;
  canonicalPath?: string;
  openGraphImage?: string;
  openGraphType?: "website" | "article";
  robots?: string;
  articleDate?: string;
  breadcrumbs?: { name: string; path: string }[];
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
}: SeoProps) {
  useEffect(() => {
    const canonicalUrl = canonicalPath
      ? canonicalPath.startsWith("http") ? canonicalPath : `${BASE_URL}${canonicalPath}`
      : BASE_URL;

    const ogImage = openGraphImage || `${BASE_URL}/og-image.png`;

    if (title) {
      document.title = title;
      setMetaProperty("og:title", title);
      setMeta("twitter:title", title);
    }

    if (description) {
      setMeta("description", description);
      setMetaProperty("og:description", description);
      setMeta("twitter:description", description);
    }

    setCanonical(canonicalUrl);
    setMetaProperty("og:url", canonicalUrl);
    setMetaProperty("og:type", openGraphType);
    setMetaProperty("og:image", ogImage);
    setMetaProperty("og:image:width", "1200");
    setMetaProperty("og:image:height", "630");
    setMetaProperty("og:site_name", "InoBux");
    setMetaProperty("og:locale", "en_US");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:url", canonicalUrl);
    setMeta("twitter:image", ogImage);
    setMeta("robots", robots);
    setMeta("googlebot", robots);
    document.documentElement.lang = "en";

    // WebPage / Article structured data
    const pageSchema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": openGraphType === "article" ? "Article" : "WebPage",
      "@id": `${canonicalUrl}#${openGraphType === "article" ? "article" : "webpage"}`,
      "url": canonicalUrl,
      "name": title || "InoBux",
      "description": description,
      "inLanguage": "en-US",
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "publisher": {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": "InoBux",
        "logo": { "@type": "ImageObject", "url": `${BASE_URL}/logo.png` }
      },
    };

    if (openGraphType === "article" && articleDate) {
      pageSchema["datePublished"] = articleDate;
      pageSchema["dateModified"] = articleDate;
      pageSchema["image"] = ogImage;
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
          "item": `${BASE_URL}${crumb.path}`,
        })),
      });
    }
  }, [title, description, canonicalPath, openGraphImage, openGraphType, robots, articleDate, breadcrumbs]);

  return null;
}
