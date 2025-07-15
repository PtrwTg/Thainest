import { Helmet } from "react-helmet";

const SEO = ({ title, description, structuredData }) => {
  //const logoUrl = window.location.origin + '/assets/images/LogoThaiNest.svg'; 

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Spa",
    "name": "ThaiNest Massage & Facial",
    "alternateName": "ThaiNest Caloundra, ThaiNest Massage, ThaiNest Facial, Thainest",
    "description": "ThaiNest Massage & Facial in Caloundra, QLD. Authentic Thai massage and facial treatments for relaxation and wellness.",
    "image": "https://thainestmassage.com.au/assets/images/LogoThaiNest.svg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4/74 Bulcock Street",
      "addressLocality": "Caloundra",
      "addressRegion": "QLD",
      "postalCode": "4551",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -26.80488,
      "longitude": 153.13115
    },
    "telephone": "048-3063-980",
    "email": "thainestmassage@gmail.com",
    "url": "https://thainestmassage.com.au",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "hasMap": "https://maps.app.goo.gl/KSRNqYugvas2MiKD6",
    "sameAs": [
      "https://www.facebook.com/thainestmassage",
      "https://maps.app.goo.gl/KSRNqYugvas2MiKD6"
    ],
    "areaServed": [
      {
        "@type": "Place",
        "name": "Caloundra"
      },
      {
        "@type": "Place",
        "name": "Sunshine Coast"
      }
    ]
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
