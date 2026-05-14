import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aluminium Interiors Experience Centres — Patna, Jaipur & Calicut",
    description:
        "Visit ALUFURN's experience centres in Patna, Jaipur & Calicut. See aluminium modular kitchens, doors, and panels live. Book a showroom visit today.",
    alternates: {
        canonical: "https://alufurn.com/experience",
    },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://alufurn.com/#location-patna",
      "name": "ALUFURN Experience Centre — Patna",
      "description": "ALUFURN aluminium interiors showroom in Patna. Displaying aluminium modular kitchens, wardrobes, interior doors, and custom panels.",
      "url": "https://alufurn.com/experience",
      "telephone": "+91-7763970474",
      "email": "enquiries@alufurn.com",
      "image": "https://alufurn.com/images/experience_1.webp",
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
      "@type": "LocalBusiness",
      "@id": "https://alufurn.com/#location-jaipur",
      "name": "ALUFURN Experience Centre — Jaipur",
      "telephone": "+91-9776397047",
      "email": "enquiries@alufurn.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "131-132, Motilal Omparkash, Opp. Jhotwara Police Station, Near Amazon Office, Main Niwaru Road, Jhotwara Industrial Area",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
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
      "@type": "LocalBusiness",
      "@id": "https://alufurn.com/#location-calicut",
      "name": "ALUFURN Experience Centre — Calicut",
      "telephone": "+91-9776397047",
      "email": "enquiries@alufurn.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Behind Industrial Estate, Ground Floor, 42/1680, Kunnummal Nallalam P.O.",
        "addressLocality": "Kozhikode",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      },
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
        { "@type": "ListItem", "position": 2, "name": "Experience Centres", "item": "https://alufurn.com/experience" }
      ]
    }
  ]
};

export default function ExperienceLayout({
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
