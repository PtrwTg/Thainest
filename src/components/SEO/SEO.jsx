import { Helmet } from "react-helmet";
import LogoThaiNest from './Navbar/LogoThaiNest.svg';


const SEO = ({ title, description, structuredData }) => {
  const logoUrl = window.location.origin + LogoThaiNest; 

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Spa",
    "name": "ThaiNest Massage & Facial",
    "image": logoUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4/74 Bulcock Street",
      "addressLocality": "Caloundra",
      "addressRegion": "QLD",
      "postalCode": "4551",
      "addressCountry": "AU"
    },
    "telephone": "048-3063-980",
    "url": window.location.origin
  };

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
