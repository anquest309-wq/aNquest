import { useEffect } from 'react';

const SEO = ({
  title = 'aNquest - Digital Solutions & Technology Services',
  description = 'aNquest specializes in creating cutting-edge digital solutions across web development, mobile applications, digital marketing, and business automation.',
  keywords = 'web development, mobile app development, digital marketing, SEO, CRM services, aNquest',
  ogImage = 'https://ik.imagekit.io/y7b5pqyxj/anquest%20(2).png?updatedAt=1761570757778',
  ogType = 'website',
  canonicalUrl = '',
  robots = 'INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1'
}) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', robots);
    
    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:type', ogType, 'property');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Cleanup function
    return () => {
      // Optionally reset to default on unmount
    };
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, robots]);

  return null;
};

export default SEO;

