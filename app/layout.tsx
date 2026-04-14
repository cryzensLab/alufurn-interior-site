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
    title: "ALUFURN — Premium Aluminium Interiors",
    description:
        "Redefining luxury through architectural precision and timeless design. Custom aluminium kitchens, wardrobes, doors and interiors.",
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
            <body className="min-h-screen">
                <AppWrapper>
                    {children}
                </AppWrapper>
            </body>
        </html>
    );
}