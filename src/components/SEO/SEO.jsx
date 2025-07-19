import { Helmet } from "react-helmet";

const SEO = ({ title, description, canonical, structuredData }) => {
  const BASE_URL = "https://thainestmassage.com.au";
  const logoUrl = `${BASE_URL}/assets/images/LogoThaiNest.svg`;
  const siteName = "ThaiNest Massage & Facial";

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
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logoUrl} />
      <meta property="og:url" content={BASE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logoUrl} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
