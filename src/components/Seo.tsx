import { useEffect } from "react";

const BASE_URL = "https://www.inobux.com";

function setMeta(name: string, content?: string) {
  if (!content) return;
  let element = document.head.querySelector<HTMLMetaElement>(`meta[name=\"${name}\"]`);
  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

function setStructuredData(json: object) {
  const id = "seo-structured-data";
  let script = document.head.querySelector<HTMLScriptElement>(`script[id=\"${id}\"]`);
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(json);
}

function setMetaProperty(property: string, content?: string) {
  if (!content) return;
  let element = document.head.querySelector<HTMLMetaElement>(`meta[property=\"${property}\"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>("link[rel=\"canonical\"]");
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
}

type SeoProps = {
  title?: string;
  description?: string;
  canonicalPath?: string;
  openGraphImage?: string;
  openGraphType?: string;
  robots?: string;
};

export default function Seo({
  title,
  description,
  canonicalPath,
  openGraphImage,
  openGraphType = "website",
  robots = "index, follow",
}: SeoProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMetaProperty("og:title", title);
      setMeta("twitter:title", title);
    }

    if (description) {
      setMeta("description", description);
      setMetaProperty("og:description", description);
      setMetaProperty("twitter:description", description);
    }

    if (canonicalPath) {
      const canonicalUrl = canonicalPath.startsWith("http") ? canonicalPath : `${BASE_URL}${canonicalPath}`;
      setCanonical(canonicalUrl);
      setMetaProperty("og:url", canonicalUrl);
      setMetaProperty("twitter:url", canonicalUrl);
    }

    if (openGraphImage) {
      setMetaProperty("og:image", openGraphImage);
      setMetaProperty("twitter:image", openGraphImage);
    }

    if (openGraphType) {
      setMetaProperty("og:type", openGraphType);
    }

    setMeta("robots", robots);
    setMeta("googlebot", robots);
    setMeta("theme-color", "#0ea5e9");
    setMeta("mobile-web-app-capable", "yes");

    document.documentElement.lang = "en";

    const canonicalUrl = canonicalPath
      ? canonicalPath.startsWith("http")
        ? canonicalPath
        : `${BASE_URL}${canonicalPath}`
      : BASE_URL;

    setStructuredData({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "Inobux",
          "url": BASE_URL,
          "logo": `${BASE_URL}/logo.png`,
          "sameAs": [
            "https://www.linkedin.com/company/inobux",
            "https://twitter.com/inobux"
          ]
        },
        {
          "@type": openGraphType === "article" ? "Article" : "WebPage",
          "headline": title || "Inobux",
          "description": description || "Expert freelance IT services for web, mobile, and data.",
          "url": canonicalUrl,
          "inLanguage": "en-US",
          "publisher": {
            "@type": "Organization",
            "name": "Inobux",
            "logo": {
              "@type": "ImageObject",
              "url": `${BASE_URL}/logo.png`
            }
          }
        }
      ]
    });
  }, [title, description, canonicalPath, openGraphImage, openGraphType, robots]);

  return null;
}
