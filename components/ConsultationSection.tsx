"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
/**
 * Consultation Component
 * 
 * A cinematic call-to-action section with dynamic text cycling, 
 * architectural background overlays, and floating geometric accents.
 */
export default function Consultation() {
    const words = ["kitchen", "wardrobe", "space", "interiors", "lifestyle"];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(timer);
    }, [words.length]);
    return (
        <section className="py-40 bg-brand-primary text-white overflow-hidden relative">

            {/* Background Architectural Detail */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1503387762-592dec5832f2?q=80&w=2000&auto=format&fit=crop"
                    alt="Architectural Background"
                    className="w-full h-full object-cover brightness-50"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/80" />
            </div>
            {/* Floating Gold Lines - Animated Geometry */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 -left-20 w-[600px] h-px bg-brand-gold/20 rotate-45"
                />
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 -right-20 w-[800px] h-px bg-brand-gold/10 -rotate-12"
                />
            </div>
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] mb-6 block font-bold">
                            PRIVATE CONSULTATION
                        </span>
                        <div className="w-12 h-px bg-brand-gold mx-auto" />
                    </motion.div>
                    <h2 className="text-5xl md:text-8xl font-bold mb-16 tracking-tighter leading-none">
                        Ready to <br />
                        elevate your <br />
                        <div className="relative h-[1.2em] mt-4 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={words[index]}
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: "0%", opacity: 1 }}
                                    exit={{ y: "-100%", opacity: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-brand-gold font-serif italic font-light absolute left-0 w-full"
                                >
                                    {words[index]}?
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-16 max-w-2xl mx-auto"
                    >
                        Collaborate with our master designers to engineer a space that defines your legacy.
                        Precision meets luxury in every detail.
                    </motion.p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#C5A059", color: "#1E473C" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-brand-primary px-16 py-6 rounded-none text-[10px] font-bold uppercase tracking-[0.5em] transition-all duration-500 shadow-2xl"
                        >
                            Book Now
                        </motion.button>
                        <button className="group flex items-center gap-4 text-white font-bold text-[10px] uppercase tracking-[0.4em] py-6 px-10 border border-white/10 hover:border-brand-gold transition-all">
                            The Experience
                            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform text-brand-gold" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Decorative Corner Element */}
            <div className="absolute bottom-12 left-12 hidden lg:block">
                <div className="flex items-center gap-4 opacity-20">
                    <div className="w-8 h-8 border border-white flex items-center justify-center text-[8px] font-bold">
                        AF
                    </div>
                    <span className="text-[8px] uppercase tracking-[0.3em] font-light">
                        Precision Engineered
                    </span>
                </div>
            </div>
        </section>
    );
}