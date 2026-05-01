"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * ShowcaseItem Component
 * 
 * Individual product highlight with overlapping text content and scaling image effect.
 */
const ShowcaseItem = ({
    title,
    description,
    image,
    link,
    reverse = false
}: {
    title: string;
    description: string;
    image: string;
    link: string;
    reverse?: boolean;
}) => {
    return (
        <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center mb-24 last:mb-0 relative`}>
            {/* Image Container */}
            <div className="w-full md:w-[75%] aspect-[16/9] overflow-hidden shadow-2xl">
                <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
            </div>

            {/* Content Box - Overlapping */}
            <motion.div
                initial={{ opacity: 0, x: reverse ? 15 : -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`bg-white p-5 md:p-8 shadow-2xl z-10 w-[85%] md:w-[25%] mt-[-40px] md:mt-0 ${reverse ? "md:ml-[-6%]" : "md:mr-[-6%]"} flex flex-col justify-center border border-gray-50`}
            >
                <h3 className="text-lg md:text-xl font-bold text-brand-primary mb-2 tracking-tight uppercase">
                    {title}
                </h3>
                <p className="text-brand-primary/80 leading-relaxed font-medium text-[11px] md:text-[13px] max-w-sm">
                    {description}
                </p>
                <Link
                    href={link}
                    className="mt-4 text-brand-gold text-[8px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all duration-300 group"
                >
                    Explore {title} <ArrowRight size={10} className="transition-transform" />
                </Link>
            </motion.div>
        </div>
    );
};

/**
 * ProductShowcase Component
 * 
 * Main feature block for flagship categories (Kitchen & Wardrobe) 
 * followed by a grid of the extended collection.
 */
export default function ProductShowcase() {
    const extendedProducts = [
        {
            title: "Vanity",
            image: "/images/vanity_01.webp",
            desc: "Elegant bathroom solutions",
            link: "/product#vanity"
        },
        {
            title: "Aluminium Panels",
            image: "/images/wallpanel_01.webp",
            desc: "Modern architectural finishes",
            link: "/product#aluminium-panels"
        },
        {
            title: "Interior Doors",
            image: "/images/door_01.webp",
            desc: "Premium wood and glass designs",
            link: "/product#interior-doors"
        }
    ];

    return (
        <>
            {/* Section 01: Core Highlights */}
            <section className="py-32 bg-[#f4f4f4] overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    {/* Integrated Brand Intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-2xl md:text-5xl font-bold text-brand-primary uppercase tracking-tight mb-4">
                            COMPLETE HOME INTERIOR SOLUTIONS
                        </h2>
                        <p className="text-brand-gold italic text-xs md:text-base font-medium tracking-wide">
                            Kitchen, Wardrobes, Vanities & Doors — Perfectly Integrated.
                        </p>
                    </motion.div>

                    <ShowcaseItem
                        title="Kitchen"
                        description="Experience the perfect blend of form and function. Our bespoke kitchens are crafted with precision, featuring premium materials and state-of-the-art integration to elevate your culinary space."
                        image="/images/kitchen_01.webp"
                        link="/product#kitchen"
                    />

                    <ShowcaseItem
                        title="Wardrobe"
                        description="Transform your storage into a statement of luxury. Our intelligently designed wardrobes combine sophisticated aesthetics with unparalleled organization for a seamless lifestyle."
                        image="/images/wardrobe_01.webp"
                        link="/product#wardrobe"
                        reverse
                    />
                </div>
            </section>

            {/* Section 02: Extended Collection */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">EXTENDED COLLECTION</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary tracking-tighter uppercase leading-none">
                                Beyond Kitchens <br />
                                <span className="text-brand-gold italic font-light">& Wardrobes.</span>
                            </h2>
                        </div>
                        <p className="text-brand-primary/60 text-sm font-light max-w-xs mb-2">
                            Discover our specialized solutions for every corner of your home, crafted with the same precision and luxury.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {extendedProducts.map((product, index) => (
                            <motion.div
                                key={product.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="group"
                            >
                                <Link href={product.link} className="block cursor-pointer">
                                    <div className="relative aspect-[3/2] overflow-hidden mb-8 bg-brand-light">
                                        <motion.img
                                            whileHover={{ scale: 1.05 }}
                                            whileInView={{ scale: [1, 1.05, 1] }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 1.5 }}
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover brightness-90 md:group-hover:brightness-100 transition-all duration-700"
                                            referrerPolicy="no-referrer"
                                        />
                                        <div className="absolute inset-0 bg-brand-primary/10 md:group-hover:bg-transparent transition-colors duration-500" />
                                    </div>

                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-sm md:text-xl font-bold text-brand-primary uppercase tracking-tight mb-2">
                                                {product.title}
                                            </h3>
                                            <p className="text-brand-primary/60 text-[10px] md:text-xs font-light tracking-widest uppercase">
                                                {product.desc}
                                            </p>
                                        </div>
                                        <motion.div
                                            whileInView={{ x: [0, 5, 0] }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 }}
                                            className="w-10 h-10 border border-brand-primary/10 flex items-center justify-center md:group-hover:bg-brand-primary md:group-hover:text-white transition-all duration-500"
                                        >
                                            <ArrowRight size={18} />
                                        </motion.div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
