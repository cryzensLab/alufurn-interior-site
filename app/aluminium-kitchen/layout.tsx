import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aluminium Modular Kitchen India — Manufacturer & Custom Design",
    description:
        "India's premium aluminium modular kitchen manufacturer. Waterproof, termite-free, custom-built kitchens. Showrooms in Patna, Jaipur & Calicut. Get a free design quote.",
    alternates: {
        canonical: "https://alufurn.com/aluminium-kitchen",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Product",
            "@id": "https://alufurn.com/aluminium-kitchen#product",
            "name": "ALUFURN Aluminium Modular Kitchen",
            "description":
                "Custom aluminium modular kitchens manufactured in India. Waterproof, termite-proof, CNC-machined to 0.1mm accuracy. Available in Linear, Island, U-Shape, L-Shape configurations.",
            "brand": { "@type": "Brand", "name": "ALUFURN" },
            "image": [
                "https://alufurn.com/images/kitchen_01.webp",
                "https://alufurn.com/images/linear-series.webp",
                "https://alufurn.com/images/island-pro.webp",
            ],
            "url": "https://alufurn.com/aluminium-kitchen",
            "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": "250000",
                "highPrice": "1500000",
                "availability": "https://schema.org/InStock",
                "seller": { "@id": "https://alufurn.com/#organization" },
            },
        },
        {
            "@type": "FAQPage",
            "url": "https://alufurn.com/aluminium-kitchen",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the price of an aluminium modular kitchen in India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A standard aluminium modular kitchen for a 2BHK apartment (8–12 linear feet) ranges from ₹2.5 lakh to ₹6 lakh including materials and installation. Contact ALUFURN for a detailed quote.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "How does an aluminium modular kitchen compare to plywood?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aluminium is 100% waterproof, termite-proof, and dimensionally stable. Lifespan is 20–30 years versus 8–15 years for plywood kitchens.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Are ALUFURN aluminium kitchens available outside Patna?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Showrooms in Patna, Jaipur, and Calicut. Supply and installation available across all major Indian cities.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "How long does manufacture and installation take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Manufacturing: 4–6 weeks from design approval. On-site installation: 2–3 days for a standard kitchen.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What warranty does ALUFURN offer on aluminium kitchens?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Structural warranty on profiles and manufacturing. Hardware carries manufacturer warranty from German/European suppliers. Full documentation provided at order.",
                    },
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://alufurn.com/" },
                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://alufurn.com/product" },
                { "@type": "ListItem", "position": 3, "name": "Aluminium Modular Kitchen", "item": "https://alufurn.com/aluminium-kitchen" },
            ],
        },
    ],
};

export default function AluminiumKitchenLayout({
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
