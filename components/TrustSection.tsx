"use client";
import { motion } from "framer-motion";
import { PenTool, CheckCircle2, ShieldCheck, Award } from "lucide-react";
/**
 * TrustSection Component
 * 
 * Highlighting brand value propositions with animated icons and progress-reveal lines.
 * Encapsulates the "Why Trust Us" logic for the home page.
 */
export default function TrustSection() {
    const features = [
        {
            icon: <PenTool className="text-brand-gold" size={40} />,
            title: "Complete Home Interiors",
            desc: "Comprehensive interior solutions including kitchens, wardrobes, vanities and interior doors."
        },
        {
            icon: <CheckCircle2 className="text-brand-gold" size={40} />,
            title: "Bespoke Design Approach",
            desc: "Tailor-made interiors crafted to match your lifestyle and space."
        },
        {
            icon: <ShieldCheck className="text-brand-gold" size={40} />,
            title: "Exceptional Quality",
            desc: "High-quality finishes and hardware ensuring durability and elegance."
        },
        {
            icon: <Award className="text-brand-gold" size={40} />,
            title: "Trusted Expertise",
            desc: "Professional execution with precision and attention to detail."
        }
    ];
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="mb-8 flex items-center gap-4">
                                {/* Icon Container with Hover Animation */}
                                <motion.div
                                    whileInView={{ scale: [1, 1.1, 1] }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="p-4 bg-brand-light rounded-none md:group-hover:bg-brand-primary transition-colors duration-500"
                                >
                                    <div className="md:group-hover:text-white transition-colors duration-500">
                                        {feature.icon}
                                    </div>
                                </motion.div>
                                {/* Animated Accent Line */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.3 }}
                                    className="h-px flex-1 bg-gray-100 md:group-hover:bg-brand-gold transition-colors duration-500 origin-left"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-brand-primary mb-4 tracking-tight">
                                {feature.title}
                            </h3>

                            <p className="text-brand-primary/60 leading-relaxed font-light text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}