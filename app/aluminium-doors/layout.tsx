import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aluminium Interior Doors India — Pivot, Flush & Sliding Manufacturer",
    description:
        "Premium aluminium interior doors — pivot, flush & sliding. Custom manufactured in India. Showrooms in Patna, Jaipur & Calicut. Request a free quote from ALUFURN today.",
    alternates: {
        canonical: "https://alufurn.com/aluminium-doors",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Product",
            "@id": "https://alufurn.com/aluminium-doors#product",
            "name": "ALUFURN Aluminium Interior Doors",
            "description":
                "Custom aluminium interior doors — pivot, flush panel, sliding barn, glass divide and hidden door systems. Manufactured in India with German-standard hardware.",
            "brand": { "@type": "Brand", "name": "ALUFURN" },
            "image": [
                "https://alufurn.com/images/door_01.webp",
                "https://alufurn.com/images/pivot-grand.webp",
                "https://alufurn.com/images/flush-panel.webp",
            ],
            "url": "https://alufurn.com/aluminium-doors",
            "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": "18000",
                "highPrice": "300000",
                "availability": "https://schema.org/InStock",
                "seller": { "@id": "https://alufurn.com/#organization" },
            },
        },
        {
            "@type": "FAQPage",
            "url": "https://alufurn.com/aluminium-doors",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the price of aluminium interior doors in India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Standard aluminium flush doors: ₹18,000–₹45,000 per unit including frame and hardware. Pivot doors and custom systems priced higher. Contact ALUFURN for a detailed quote.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Are aluminium pivot doors suitable for Indian homes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Aluminium pivot doors are dimensionally stable across India's climates — no warping, sticking, or cracking across seasonal humidity changes.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What finishes are available for ALUFURN aluminium doors?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Powder coat (matte/gloss/satin), anodised, PVD metallic, and wood veneer laminate. 50+ standard options with RAL custom colour matching.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Can aluminium doors be used for exterior applications?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Exterior-facing doors require our weather-sealed system with thermally broken profiles. Specify the application at the time of enquiry.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What warranty comes with ALUFURN aluminium doors?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Structural warranty on profiles, a separate finish warranty, and hardware manufacturer warranties. Full documentation provided with every completed project.",
                    },
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://alufurn.com/" },
                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://alufurn.com/product" },
                { "@type": "ListItem", "position": 3, "name": "Aluminium Interior Doors", "item": "https://alufurn.com/aluminium-doors" },
            ],
        },
    ],
};

export default function AluminiumDoorsLayout({
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
