"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProductShowcase from "@/components/ProductShowcase";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutUs from "@/components/AboutUs";
import CollabSection from "@/components/CollabSection";
import OutletSection from "@/components/OutletSection";
import ConsultationSection from "@/components/ConsultationSection";
import QuickLinks from "@/components/QuickLinks";
import MarketingStrip from "@/components/MarketingStrip";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ProductShowcase />
            <TrustSection />
            <WhyChooseUs />
            <AboutUs />
            <CollabSection />
            <OutletSection />
            <ConsultationSection />
            <QuickLinks />
            <MarketingStrip />
        </>
    );
}