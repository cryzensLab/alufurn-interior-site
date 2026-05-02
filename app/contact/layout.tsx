import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | ALUFURN",
  description: "Contact ALUFURN to schedule a personalized consultation and visit our manufacturing space or experience center.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "ALUFURN Studio",
  "image": "https://alufurn.com/images/contact_bg.webp",
  "@id": "https://alufurn.com/contact",
  "url": "https://alufurn.com/contact",
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
