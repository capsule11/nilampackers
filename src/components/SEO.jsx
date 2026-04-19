import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, currentURL }) {
  const defaultTitle = "Nilam Packers";
  const defaultDesc = "Leading manufacturer of high-quality corrugated boxes and packaging solutions in Varanasi, Uttar Pradesh.";
  
  return (
    <Helmet>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph Tags for Social Media */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:type" content="website" />
      {currentURL && <meta property="og:url" content={currentURL} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
    </Helmet>
  );
}
