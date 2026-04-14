"use client";
import { motion } from "framer-motion";
/**
 * WhyChooseUs Component
 * 
 * Highlighting the technical precision and German engineering behind the manufacturing.
 * Featuring staggered reveal animations and technical specification callouts.
 */
export default function WhyChooseUs() {
    return (
        <section className="py-32 bg-brand-primary text-white overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Content Column */}
                    <div className="w-full lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-6 block font-bold"
                        >
                            IN-HOUSE MANUFACTURING
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-none"
                        >
                            Precision <br />
                            <span className="text-brand-gold italic font-light">by Technology.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-xl font-light leading-relaxed mb-12 max-w-lg"
                        >
                            Engineered in India, our manufacturing blends advanced automation with refined craftsmanship.
                            We deliver 0.1mm accuracy that manual craft cannot reach.
                        </motion.p>
                        <div className="flex flex-wrap gap-12">
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-white mb-1 tracking-tight">0.1mm</span>
                                <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">Accuracy</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-white mb-1 tracking-tight">100%</span>
                                <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">Automated</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-white mb-1 tracking-tight">E1</span>
                                <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">Eco-Safe Standards</span>
                            </div>
                        </div>
                    </div>
                    {/* Right Visual Column */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="aspect-video overflow-hidden border border-white/10">
                                <img
                                    src="/images/manufacturing.png"
                                    alt="Modern Manufacturing"
                                    className="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-1000"
                                    referrerPolicy="no-referrer"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-brand-gold p-8 hidden md:block">
                                <p className="text-white font-bold text-xs tracking-widest uppercase leading-tight text-center">
                                    Modern <br /> Equipment
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}