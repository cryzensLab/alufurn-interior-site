import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Luxury Aluminium Interiors & Products Catalog | ALUFURN",
    description: "Download the ALUFURN catalog to explore luxury aluminium interior designs, products, and custom solutions.",
};

const jsonLd = {
  "@context": "https://schema.org",
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
      "name": "Catalog",
      "item": "https://alufurn.com/catalog"
    }
  ]
};

export default function CatalogLayout({
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
