import { useEffect } from "react";

export function SEO() {
  useEffect(() => {
    // Set title tag
    document.title = "Spectrum Internet & Mobile in St. Louis, MO | Omni Mobile Authorized Retailer";

    // Inject LocalBusiness Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Omni Mobile Authorized Retailer",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "65 Fenton Plaza",
        "addressLocality": "Fenton",
        "addressRegion": "MO",
        "postalCode": "63026"
      },
      "telephone": "636-496-7224",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.5262,
        "longitude": -90.4487
      },
      "areaServed": ["St. Louis", "Fenton", "St. Louis County"],
      "description": "Spectrum Authorized Retailer near me providing Spectrum Internet, Spectrum Mobile plans, device upgrades, and account support.",
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    script.id = 'local-business-schema';
    
    // Clean up previous script if exists (hot reloading)
    const existing = document.getElementById('local-business-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
