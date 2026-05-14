import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aluminium Wall Panels India — Facade Cladding & Feature Walls Manufacturer",
    description:
        "Custom aluminium wall panels, facade cladding & interior feature walls. Architectural-grade, unlimited finishes. Manufactured in India. Get a free quote from ALUFURN.",
    alternates: {
        canonical: "https://alufurn.com/aluminium-panels",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Product",
            "@id": "https://alufurn.com/aluminium-panels#product",
            "name": "ALUFURN Custom Aluminium Wall Panels",
            "description":
                "Architectural-grade custom aluminium wall panels, facade cladding, and ceiling systems. CNC-manufactured in India for interior and exterior applications. Unlimited finishes.",
            "brand": { "@type": "Brand", "name": "ALUFURN" },
            "image": [
                "https://alufurn.com/images/wallpanel_01.webp",
                "https://alufurn.com/images/facade-system.webp",
                "https://alufurn.com/images/feature-wall.webp",
            ],
            "url": "https://alufurn.com/aluminium-panels",
            "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": "350",
                "availability": "https://schema.org/InStock",
                "seller": { "@id": "https://alufurn.com/#organization" },
            },
        },
        {
            "@type": "FAQPage",
            "url": "https://alufurn.com/aluminium-panels",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the price of aluminium wall panels per square foot in India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Interior aluminium wall panels: ₹350–₹800 per sq ft including sub-frame and surface finish. Exterior facade cladding varies by engineering requirements and building height.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Are aluminium panels suitable for exterior facade cladding in India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Corrosion-resistant, non-combustible, dimensionally stable in Indian climates, and requires no maintenance painting cycle.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Can aluminium wall panels be custom-designed with perforations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. CNC manufacturing allows fully custom perforation patterns, geometric reliefs, and bespoke sizes for any architectural project.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "How are ALUFURN aluminium panels fixed to the wall?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Concealed aluminium sub-frame fixing systems — no visible fixings, precise alignment, accommodates thermal expansion.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What is the lead time for aluminium wall panel supply in India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Standard panels: 3–4 weeks from design approval. Complex or high-volume facade projects scheduled on a project-specific basis.",
                    },
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://alufurn.com/" },
                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://alufurn.com/product" },
                { "@type": "ListItem", "position": 3, "name": "Aluminium Wall Panels", "item": "https://alufurn.com/aluminium-panels" },
            ],
        },
    ],
};

export default function AluminiumPanelsLayout({
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
