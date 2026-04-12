"use client";
import { motion } from "framer-motion";
import Link from "next/link";
/**
 * QuickLinks Component
 * 
 * High-impact navigational cards featuring immersive background images, 
 * sleek gradient overlays, and hover-triggered micro-animations.
 */
export default function QuickLinks() {
    const links = [
        {
            title: "Product Catalogue",
            desc: "Explore our full range of designs",
            href: "/catalog",
            image: "/images/product_catalogue.png"
        },
        {
            title: "Alufurn Projects",
            desc: "View our portfolio of excellence",
            href: "/projects",
            image: "/images/projects.png"
        },
        {
            title: "Franchise Opportunity",
            desc: "Partner with a global leader",
            href: "/franchise",
            image: "/images/franchise.png"
        }
    ];
    return (
        <section className="bg-brand-light py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {links.map((link, index) => (
                        <motion.div
                            key={link.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="group relative h-[400px] flex flex-col items-start justify-end p-8 overflow-hidden bg-brand-primary block"
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={link.image}
                                        alt={link.title}
                                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
                                        referrerPolicy="no-referrer"
                                    />
                                    {/* Cinematic Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent" />
                                </div>
                                <div className="relative z-10 w-full">
                                    {/* Hover-revealed Label */}
                                    <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] mb-2 block font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                        Explore More
                                    </span>

                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight uppercase">
                                        {link.title}
                                    </h3>

                                    <p className="text-white/60 text-xs font-light tracking-widest uppercase mb-6">
                                        {link.desc}
                                    </p>

                                    {/* Decorative Progress Line */}
                                    <div className="w-12 h-px bg-brand-gold group-hover:w-full transition-all duration-700" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}