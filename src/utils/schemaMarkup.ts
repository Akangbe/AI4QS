
// Schema.org structured data for AI4QS
export const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI4QS",
    "url": "https://ai4qs.com",
    "logo": "https://ai4qs.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Room M148, 35 Marylebone Road",
      "addressLocality": "London",
      "postalCode": "NW1 5LS",
      "addressCountry": "UK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-20-1234-5678",
      "contactType": "customer service",
      "email": "contact@ai4qs.com"
    },
    "sameAs": [
      "https://www.facebook.com/ai4qs",
      "https://www.twitter.com/ai4qs",
      "https://www.linkedin.com/company/ai4qs",
      "https://www.instagram.com/ai4qs"
    ],
    "description": "AI4QS provides cutting-edge artificial intelligence solutions for quantity surveying practices, helping professionals deliver more accurate cost estimations and efficient workflows."
  };
};

export const getServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Powered Quantity Surveying Solutions",
    "provider": {
      "@type": "Organization",
      "name": "AI4QS"
    },
    "serviceType": "Quantity Surveying Technology",
    "description": "Advanced AI solutions for quantity surveyors including automated takeoffs, cost estimation, and predictive analytics.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  };
};

export const getWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://ai4qs.com",
    "name": "AI4QS - AI Solutions for Quantity Surveying",
    "description": "Transform your quantity surveying practice with AI4QS's cutting-edge artificial intelligence solutions.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ai4qs.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
};

// Use this function to implement schema markup in your pages
export const generateSchemaScript = (schema: object) => {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
};
