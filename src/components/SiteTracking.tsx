import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

const ensureMetaTag = (name: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
};

const SiteTracking = () => {
  const location = useLocation();
  const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
  const googleSiteVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION?.trim();

  useEffect(() => {
    if (googleSiteVerification) {
      ensureMetaTag("google-site-verification", googleSiteVerification);
    }

    if (!gaMeasurementId) return;

    const existingScript = document.head.querySelector<HTMLScriptElement>(
      `script[data-ga-loader="${gaMeasurementId}"]`,
    );
    const existingInit = document.head.querySelector<HTMLScriptElement>(
      `script[data-ga-init="${gaMeasurementId}"]`,
    );

    if (!existingScript) {
      const gaScript = document.createElement("script");
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
      gaScript.setAttribute("data-ga-loader", gaMeasurementId);
      document.head.appendChild(gaScript);
    }

    if (!existingInit) {
      const initScript = document.createElement("script");
      initScript.setAttribute("data-ga-init", gaMeasurementId);
      initScript.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${gaMeasurementId}', { send_page_view: false });
      `;
      document.head.appendChild(initScript);
    }
  }, [gaMeasurementId, googleSiteVerification]);

  useEffect(() => {
    if (!gaMeasurementId) return;

    const gtagWindow = window as GtagWindow;
    if (typeof gtagWindow.gtag !== "function") return;

    gtagWindow.gtag("config", gaMeasurementId, {
      page_path: `${location.pathname}${location.search}${location.hash}`,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [gaMeasurementId, location.hash, location.pathname, location.search]);

  return null;
};

export default SiteTracking;
