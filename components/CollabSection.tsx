"use client";
import { motion } from "framer-motion";
/**
 * Collaborators Component
 * 
 * A dark-themed section highlighting industry partnerships with staggered reveal animations.
 */
export default function Collaborators() {
    const partners = [
        "Designers",
        "Homeowners",
        "Developers",
        "Contractors",
        "Boutique Hotels",
        "Luxury Estates"
    ];
    return (
        <section className="py-20 bg-brand-primary text-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Header Area */}
                    <div className="max-w-md text-center md:text-left">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block"
                        >
                            Our Partners
                        </motion.span>
                        <h2 className="text-3xl font-semibold tracking-tight">
                            Collaborating with the industry's finest visionaries.
                        </h2>
                    </div>
                    {/* Partners Tags Grid */}
                    <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-default"
                            >
                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-brand-gold transition-colors duration-300">
                                    {partner}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}