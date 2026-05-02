import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience Center | ALUFURN",
    description: "Visit our ALUFURN Experience Center in Patna to explore premium aluminium interiors, live product setups, and expert design guidance.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "ALUFURN Experience Center",
  "image": "https://alufurn.com/images/experience_1.webp",
  "@id": "https://alufurn.com/experience",
  "url": "https://alufurn.com/experience",
  "telephone": "+91-7763970474",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "G-15, Shashi Complex Exhibition Road",
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
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "19:00"
  },
  "priceRange": "$$$"
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
