"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProductCardProps {
    title: string;
    subtitle: string;
    image: string;
    index?: number;
}

export default function ProductCard({
    title,
    subtitle,
    image,
    index = 0,
}: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
        >
            {/* Image Container */}
            <div className="relative aspect-[3/2] overflow-hidden mb-5 bg-brand-light">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-colors duration-500" />

                {/* Quick-view label */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="bg-brand-primary/90 backdrop-blur-sm px-5 py-3">
                        <span className="text-white text-[10px] font-semibold uppercase tracking-[0.3em]">
                            View Details
                        </span>
                    </div>
                </div>
            </div>

            {/* Info */}
            <h3 className="text-sm md:text-base font-bold text-brand-primary uppercase tracking-wide mb-1 group-hover:text-brand-gold transition-colors duration-300">
                {title}
            </h3>
            <p className="text-[11px] md:text-xs text-brand-text-muted font-light tracking-wider uppercase">
                {subtitle}
            </p>
        </motion.div>
    );
}
