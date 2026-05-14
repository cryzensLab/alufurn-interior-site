import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ALUFURN — Aluminium Interior Manufacturer India",
  description:
    "Contact ALUFURN for aluminium modular kitchens, doors & panels. Call +91 776 397 0474. Showrooms in Patna (Bihar), Jaipur (Rajasthan) & Calicut (Kerala). Free design consultation.",
  alternates: {
    canonical: "https://alufurn.com/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://alufurn.com/contact#webpage",
      "url": "https://alufurn.com/contact",
      "name": "Contact ALUFURN",
      "description": "Contact ALUFURN for aluminium modular kitchens, interior doors and custom wall panels.",
      "isPartOf": { "@id": "https://alufurn.com/#website" }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://alufurn.com/#location-patna",
      "name": "ALUFURN Studio — Patna",
      "image": "https://alufurn.com/images/contact_bg.webp",
      "url": "https://alufurn.com/contact",
      "telephone": "+91-7763970474",
      "email": "enquiries@alufurn.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "G-15, Shashi Complex, Exhibition Road",
        "addressLocality": "Patna",
        "addressRegion": "Bihar",
        "postalCode": "800001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.6117,
        "longitude": 85.1426
      },
      "hasMap": "https://maps.app.goo.gl/9CuuLSiMVcXLk3rY6",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "10:00",
          "closes": "19:00"
        }
      ],
      "priceRange": "₹₹₹",
      "parentOrganization": { "@id": "https://alufurn.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://alufurn.com/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://alufurn.com/contact" }
      ]
    }
  ]
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
