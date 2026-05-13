"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useQuote } from "./AppWrapper";
/**
 * WhyChooseUs Component
 * 
 * Highlighting the technical precision and German engineering behind the manufacturing.
 * Featuring staggered reveal animations and technical specification callouts.
 */
export default function WhyChooseUs() {
    const { openQuote } = useQuote();
    return (
        <section className="py-32 bg-brand-charcoal text-white overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* ── Centered Header Block ── */}
                <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-3 block font-bold"
                    >
                        IN-HOUSE MANUFACTURING
                    </motion.span>
                    {/* Gold draw-in line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "40px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-px bg-brand-gold mx-auto mb-6"
                    />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter leading-none"
                    >
                        Precision <em className="font-light" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>by Technology.</em>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        Engineered in India, our manufacturing blends advanced automation with refined craftsmanship.
                        Built on a next-generation ecosystem designed for scale, precision, and consistency.
                    </motion.p>
                </div>

                {/* ── Cinematic Visual & Stats Block ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden mb-16 border border-white/[0.05]"
                >
                    <Image
                        src="/images/manufacturing.webp"
                        alt="Modern Manufacturing"
                        fill
                        className="object-cover opacity-60 hover:opacity-80 transition-opacity duration-1000"
                        referrerPolicy="no-referrer"
                    />
                    {/* Deep gradient to make text legible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent pointer-events-none" />

                    {/* Stats Grid Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-t border-white/10 pt-6 md:pt-8 backdrop-blur-sm bg-[#111111]/20">
                            <div className="flex flex-col items-center text-center pt-4 sm:pt-0">
                                <span className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">0.1mm</span>
                                <span className="text-brand-gold text-[9px] md:text-[10px] uppercase tracking-widest font-bold">Accuracy</span>
                            </div>
                            <div className="flex flex-col items-center text-center pt-4 sm:pt-0">
                                <span className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">100%</span>
                                <span className="text-brand-gold text-[9px] md:text-[10px] uppercase tracking-widest font-bold">Automated</span>
                            </div>
                            <div className="flex flex-col items-center text-center pt-4 sm:pt-0">
                                <span className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">E0</span>
                                <span className="text-brand-gold text-[9px] md:text-[10px] uppercase tracking-widest font-bold">Eco-Safe Standards</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── Mid-page enquiry CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-20 pt-12 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                    <div>
                        <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-1">Ready to begin?</p>
                        <p className="text-white text-lg md:text-xl font-light">
                            Get a free design consultation — no commitment.
                        </p>
                    </div>
                    <motion.button
                        onClick={openQuote}
                        whileHover={{ backgroundColor: "#C5A059", scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="shrink-0 px-8 py-4 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-[0.35em] shadow-lg cursor-pointer transition-all duration-300"
                    >
                        Enquire Now
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}