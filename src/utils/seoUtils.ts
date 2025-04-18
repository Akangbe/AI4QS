/**
 * SEO utility functions for AI4QS website
 * These functions help optimize content for search engines
 */

// Generate a URL-friendly slug from a string
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove consecutive hyphens
    .trim();
};

// Generate structured breadcrumbs data for SEO
export const generateBreadcrumbsData = (items: {name: string, url: string}[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://ai4qs.com${item.url}`
    }))
  };
};

// Generate FAQ schema for rich results
export const generateFAQSchema = (questions: {question: string, answer: string}[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };
};

// Generate article schema for blog posts
export const generateArticleSchema = (article: {
  title: string,
  description: string,
  publishDate: string,
  modifiedDate: string,
  author: string,
  image: string,
  url: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.publishDate,
    "dateModified": article.modifiedDate,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI4QS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ai4qs.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ai4qs.com${article.url}`
    }
  };
};

// Generate proper alt text for images
export const generateImageAltText = (imageName: string, context?: string): string => {
  // Remove file extension and replace hyphens with spaces
  let baseText = imageName.split('.')[0].replace(/-/g, ' ');
  
  // Capitalize first letter of each word
  baseText = baseText.replace(/\b\w/g, l => l.toUpperCase());
  
  // Add context if provided
  if (context) {
    return `${baseText} - ${context}`;
  }
  
  return baseText;
};

// Generate meta description from longer text
export const generateMetaDescription = (text: string, maxLength: number = 160): string => {
  if (text.length <= maxLength) return text;
  
  // Try to cut at a period or comma near the maxLength
  const punctuationCut = text.substring(0, maxLength).lastIndexOf('.');
  if (punctuationCut > maxLength * 0.7) {
    return text.substring(0, punctuationCut + 1);
  }
  
  // Otherwise cut at a space
  const spaceCut = text.substring(0, maxLength).lastIndexOf(' ');
  return text.substring(0, spaceCut) + '...';
};

// Format date in ISO 8601 for SEO
export const formatDateForSEO = (date: Date): string => {
  return date.toISOString();
};
