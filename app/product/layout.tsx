import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products | ALUFURN",
    description: "Exquisite luxury aluminium modular kitchens featuring moisture resistance, seamless finishes, and lifetime durability.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://alufurn.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://alufurn.com/product"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Luxury Aluminium Modular Kitchen",
      "image": [
        "https://alufurn.com/images/luxury_bespoke.webp"
      ],
      "description": "Exquisite luxury aluminium modular kitchens featuring moisture resistance, seamless finishes, and lifetime durability.",
      "brand": {
        "@type": "Brand",
        "name": "ALUFURN"
      },
      "category": "Furniture > Kitchen",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "150000",
        "highPrice": "1000000",
        "offerCount": "12",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};

export default function ProductLayout({
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
