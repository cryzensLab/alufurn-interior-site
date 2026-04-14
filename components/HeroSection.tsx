"use client";

import { motion } from "framer-motion";
import { useQuote } from "./AppWrapper";

/**
 * HeroSection Component
 * 
 * Reusable Next.js (App Router) component featuring a video background,
 * cinematic typography with a "Made in India" gradient, and framer-motion animations.
 */
export default function HeroSection() {
    const { openQuote } = useQuote();
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-end pb-16 md:pb-24">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/bg_hero_section.webm" type="video/webm" />
                </video>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 md:mb-6 uppercase">
                        <span className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent">
                            MADE IN INDIA
                        </span>
                        , DESIGNED FOR EVERY SPACE
                    </h1>

                    <p className="text-sm md:text-lg lg:text-2xl text-white mb-6 md:mb-10 max-w-2xl font-medium">
                        From Kitchens to Wardrobes — Built for Your Space
                    </p>

                    <motion.button
                        onClick={openQuote}
                        whileHover={{
                            backgroundColor: "#ffffff",
                            color: "#1a1a1a",
                            scale: 1.05
                        }}
                        whileInView={{ scale: [1, 1.05, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.1, delay: 0 }}
                        className="px-8 py-3 md:px-10 md:py-4 border-2 border-white text-white rounded-none tracking-widest text-xs md:text-base font-bold uppercase transition-colors"
                    >
                        Get a Quote
                    </motion.button>
                </motion.div>
            </div>

            {/* Subtle Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-30"
            >
                <div className="w-px h-8 bg-white" />
            </motion.div>
        </section>
    );
}
