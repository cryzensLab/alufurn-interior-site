import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AppWrapper from "@/components/AppWrapper";

/* ── Fonts ── */
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
});

/* ── Metadata ── */
export const metadata: Metadata = {
    title: "Premium Aluminium Interiors, Kitchens & Wardrobes | ALUFURN",
    description:
        "Redefining luxury through architectural precision and timeless design. Custom aluminium kitchens, wardrobes, doors and interiors.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": "https://alufurn.com/#website",
            "url": "https://alufurn.com/",
            "name": "ALUFURN",
            "description": "Premium aluminium interiors for kitchens, wardrobes, and doors.",
            "publisher": {
                "@id": "https://alufurn.com/#organization"
            },
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://alufurn.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@type": "Organization",
            "@id": "https://alufurn.com/#organization",
            "name": "ALUFURN",
            "url": "https://alufurn.com/",
            "logo": "https://alufurn.com/assets/logo.webp",
            "description": "Premium aluminium interiors for kitchens, wardrobes, and doors.",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7763970474",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi"]
            },
            "sameAs": [
                "https://www.facebook.com/alufurn",
                "https://www.instagram.com/alufurn",
                "https://www.linkedin.com/company/alufurn"
            ]
        }
    ]
};

/* ── Root Layout ── */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${playfair.variable} antialiased`}
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="min-h-screen">
                <AppWrapper>
                    {children}
                </AppWrapper>
            </body>
        </html>
    );
}