
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schemaData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'AI4QS - AI Solutions for Quantity Surveying',
  description = 'Transform your quantity surveying practice with AI4QS. We provide cutting-edge AI solutions for accurate cost estimations and efficient workflows.',
  keywords = 'quantity surveying, AI, artificial intelligence, construction cost management',
  canonicalUrl,
  ogImage = 'https://ai4qs.com/og-image.png',
  ogType = 'website',
  schemaData
}) => {
  const location = useLocation();
  
  useEffect(() => {
    // Update the document title
    document.title = title;
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
    
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
      ogImageTag.setAttribute('content', ogImage);
    }
    
    const ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (ogTypeTag) {
      ogTypeTag.setAttribute('content', ogType);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl || `https://ai4qs.com${location.pathname}`);
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', description);
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImage);
    }
    
    // Update canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', canonicalUrl || `https://ai4qs.com${location.pathname}`);
    }
    
    // Add Schema.org JSON-LD if provided
    if (schemaData) {
      // Remove any existing schema script
      const existingSchema = document.querySelector('#schema-script');
      if (existingSchema) {
        existingSchema.remove();
      }
      
      // Add new schema script
      const script = document.createElement('script');
      script.id = 'schema-script';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);
      
      // Clean up function to remove the script when component unmounts
      return () => {
        const schemaScript = document.querySelector('#schema-script');
        if (schemaScript) {
          schemaScript.remove();
        }
      };
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schemaData, location.pathname]);
  
  // This component doesn't render anything visible
  return null;
};

export default SEOHead;
