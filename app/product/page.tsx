"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CategoryNav, { type Category } from "@/components/CategoryNav";
import ProductCard from "@/components/ProductCard";

/* ──────────────────────────────────────────────
   Category & Product Data
   ────────────────────────────────────────────── */
const categories: Category[] = [
    { id: "kitchen", label: "Kitchen Design" },
    { id: "wardrobe", label: "Wardrobe Solutions" },
    { id: "vanity", label: "Vanity Units" },
    { id: "interior-doors", label: "Interior Doors" },
    { id: "aluminium-panels", label: "Aluminium Panels" },
];

interface Product {
    title: string;
    subtitle: string;
    image: string;
}

interface CategorySection {
    id: string;
    heading: string;
    tagline: string;
    description: string;
    products: Product[];
}

const sections: CategorySection[] = [
    {
        id: "kitchen",
        heading: "Kitchen Design",
        tagline: "Where Culinary Art Meets Architecture",
        description:
            "Precision-engineered aluminium kitchens that blend cutting-edge functionality with timeless elegance. Every surface, every detail — designed for the way you live.",
        products: [
            {
                title: "Linear Series",
                subtitle: "Minimalist Handleless",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Island Pro",
                subtitle: "Open Plan Kitchen",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Classic Matte",
                subtitle: "Traditional Elegance",
                image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Modular Max",
                subtitle: "Compact Solutions",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Luxury Bespoke",
                subtitle: "Custom Built",
                image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Urban Loft",
                subtitle: "Industrial Chic",
                image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
            },
        ],
    },
    {
        id: "wardrobe",
        heading: "Wardrobe Solutions",
        tagline: "Organize Life, Beautifully",
        description:
            "Intelligent storage crafted from premium aluminium profiles. Walk-ins, sliding systems, and fitted wardrobes that transform your personal space.",
        products: [
            {
                title: "Walk-In Elite",
                subtitle: "Full Room System",
                image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Sliding Luxe",
                subtitle: "Space Saving Design",
                image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Fitted Pro",
                subtitle: "Wall-to-Wall",
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Hinged Classic",
                subtitle: "Traditional Doors",
                image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Modular Cube",
                subtitle: "Customizable Units",
                image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Dresser Suite",
                subtitle: "Integrated Vanity",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
            },
        ],
    },
    {
        id: "vanity",
        heading: "Vanity Units",
        tagline: "Refined Bathroom Luxury",
        description:
            "Waterproof aluminium vanities with premium finishes. Engineered for durability, designed for the spa-like bathroom experience you deserve.",
        products: [
            {
                title: "Floating Vanity",
                subtitle: "Wall Mounted",
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Double Basin",
                subtitle: "His & Hers",
                image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Compact Unit",
                subtitle: "Powder Room",
                image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Mirror Cabinet",
                subtitle: "Storage & Light",
                image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Luxury Console",
                subtitle: "Freestanding",
                image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Corner Unit",
                subtitle: "Space Optimizer",
                image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
            },
        ],
    },
    {
        id: "interior-doors",
        heading: "Interior Doors",
        tagline: "Doorways to Distinction",
        description:
            "Architectural aluminium doors that make a statement. Pivot, sliding, and hinged systems with precision-milled profiles and designer finishes.",
        products: [
            {
                title: "Pivot Grand",
                subtitle: "Statement Entry",
                image: "https://images.unsplash.com/photo-1515898913320-f38370edab7a?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Barn Slider",
                subtitle: "Rustic Modern",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Flush Panel",
                subtitle: "Seamless Design",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Glass Divide",
                subtitle: "Transparent Living",
                image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Hidden Door",
                subtitle: "Secret Passage",
                image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "French Style",
                subtitle: "Classic Pair",
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
            },
        ],
    },
    {
        id: "aluminium-panels",
        heading: "Custom Aluminium Panels",
        tagline: "Surfaces That Inspire",
        description:
            "Architectural-grade aluminium panels for facades, feature walls, and ceiling systems. Unlimited finishes, engineered for Indian climates.",
        products: [
            {
                title: "Facade System",
                subtitle: "Exterior Cladding",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Feature Wall",
                subtitle: "Interior Accent",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Ceiling Panel",
                subtitle: "Suspended System",
                image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Partition Screen",
                subtitle: "Room Divider",
                image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Perforated Art",
                subtitle: "Decorative Panel",
                image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800&auto=format&fit=crop",
            },
            {
                title: "Composite Core",
                subtitle: "High Performance",
                image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=800&auto=format&fit=crop",
            },
        ],
    },
];

/* Hero images keyed by category ID */
const heroImages: Record<string, string> = {
    kitchen:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    wardrobe:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000&auto=format&fit=crop",
    vanity:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop",
    "interior-doors":
        "https://images.unsplash.com/photo-1515898913320-f38370edab7a?q=80&w=2000&auto=format&fit=crop",
    "aluminium-panels":
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop",
};

/* ──────────────────────────────────────────────
   Products Page Component
   ────────────────────────────────────────────── */
export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
    const isScrolling = useRef(false);

    /* ── Handle hash-based navigation on mount ── */
    useEffect(() => {
        const hash = window.location.hash.replace("#", "");
        if (hash && categories.some((c) => c.id === hash)) {
            setActiveCategory(hash);
            // Delay to allow layout to settle
            const timeout = setTimeout(() => {
                const el = document.getElementById(hash);
                if (el) {
                    const navHeight = 60;
                    const top =
                        el.getBoundingClientRect().top + window.scrollY - navHeight - 20;
                    window.scrollTo({ top, behavior: "smooth" });
                }
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, []);

    /* ── Intersection Observer for active section detection ── */
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        categories.forEach((cat) => {
            const el = document.getElementById(cat.id);
            if (!el) return;

            sectionRefs.current.set(cat.id, el);

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !isScrolling.current) {
                        setActiveCategory(cat.id);
                        // Update URL hash without scroll jump
                        window.history.replaceState(null, "", `#${cat.id}`);
                    }
                },
                {
                    rootMargin: "-30% 0px -60% 0px",
                    threshold: 0,
                }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    /* ── Handle category selection from nav ── */
    const handleCategorySelect = useCallback((id: string) => {
        isScrolling.current = true;
        setActiveCategory(id);
        window.history.replaceState(null, "", `#${id}`);

        // Reset scrolling flag after animation completes
        setTimeout(() => {
            isScrolling.current = false;
        }, 1000);
    }, []);

    /* ── Active hero image ── */
    const activeHeroImage = heroImages[activeCategory] || heroImages.kitchen;
    const activeCategoryData = categories.find((c) => c.id === activeCategory);

    return (
        <div className="pt-24 md:pt-32">
            {/* ═══════════════════════════════════════
                Hero Section
               ═══════════════════════════════════════ */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-brand-primary-deep">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={activeHeroImage}
                        alt="Products Collection"
                        fill
                        className="object-cover opacity-30 brightness-50 scale-105"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-primary-deep/80 via-brand-primary-deep/50 to-brand-primary-deep" />
                </div>

                {/* Grid overlay */}
                <div
                    className="absolute inset-0 z-[1] opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                    {/* Accent line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-16 h-[1px] bg-brand-gold mx-auto mb-8 origin-center"
                    />

                    <motion.span
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-brand-gold-muted text-[10px] md:text-[11px] uppercase tracking-[0.5em] mb-6 block font-semibold"
                    >
                        Our Collections
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Premium Aluminium{" "}
                        <br className="hidden md:block" />
                        <span
                            className="text-brand-gold-light italic font-medium"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Interiors.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-white/40 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed mb-10"
                    >
                        Explore our complete range of precision-engineered aluminium
                        solutions for every space in your home.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="group/cta relative inline-flex items-center gap-3 overflow-hidden
                            border-2 border-white/30 text-white
                            px-10 md:px-14 py-4 md:py-5
                            text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.4em]
                            transition-all duration-500
                            hover:border-brand-gold hover:tracking-[0.55em]"
                    >
                        <span className="absolute inset-0 bg-brand-gold scale-x-0 origin-left group-hover/cta:scale-x-100 transition-transform duration-500 ease-out" />
                        <span className="relative z-10">Get a Quote</span>
                        <ArrowRight
                            size={14}
                            className="relative z-10 transition-transform duration-300 group-hover/cta:translate-x-1"
                        />
                    </motion.button>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut",
                            }}
                            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
                        >
                            <div className="w-[3px] h-[6px] rounded-full bg-brand-gold-muted" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                Sticky Category Navigation
               ═══════════════════════════════════════ */}
            <CategoryNav
                categories={categories}
                activeId={activeCategory}
                onSelect={handleCategorySelect}
            />

            {/* ═══════════════════════════════════════
                Product Sections
               ═══════════════════════════════════════ */}
            {sections.map((section, sectionIndex) => (
                <section
                    key={section.id}
                    id={section.id}
                    className={`py-20 md:py-32 ${
                        sectionIndex % 2 === 0 ? "bg-white" : "bg-brand-surface"
                    }`}
                >
                    <div className="container mx-auto px-6 md:px-12">
                        {/* Section Header */}
                        <div className="max-w-3xl mb-16 md:mb-20">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold"
                            >
                                {section.tagline}
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-primary tracking-tighter uppercase leading-none mb-6"
                            >
                                {section.heading}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-brand-text-muted text-sm md:text-base font-light leading-relaxed max-w-2xl"
                            >
                                {section.description}
                            </motion.p>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                            {section.products.map((product, index) => (
                                <ProductCard
                                    key={product.title}
                                    title={product.title}
                                    subtitle={product.subtitle}
                                    image={product.image}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* Section CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-16 md:mt-20 flex justify-center"
                        >
                            <button className="group/btn relative inline-flex items-center gap-3 overflow-hidden border border-brand-primary/20 text-brand-primary px-10 md:px-14 py-4 md:py-5 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.3em] transition-all duration-500 hover:border-brand-primary hover:tracking-[0.45em]">
                                <span className="absolute inset-0 bg-brand-primary scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-500 ease-out" />
                                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-500">
                                    Explore All {section.heading}
                                </span>
                                <ArrowRight
                                    size={14}
                                    className="relative z-10 group-hover/btn:text-white transition-all duration-300 group-hover/btn:translate-x-1"
                                />
                            </button>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* ═══════════════════════════════════════
                Bottom CTA Section
               ═══════════════════════════════════════ */}
            <section className="relative py-24 md:py-32 bg-brand-primary-deep text-white overflow-hidden">
                {/* Background texture */}
                <div className="absolute inset-0 opacity-[0.07]">
                    <Image
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>

                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.04] z-[1]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-12 h-[1px] bg-brand-gold mx-auto mb-8"
                    />

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Can&apos;t Find What You Need?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-white/35 text-base md:text-lg mb-12 font-light leading-relaxed"
                    >
                        Our team specializes in custom aluminium solutions. Share your
                        vision and we&apos;ll bring it to life with precision engineering.
                    </motion.p>

                    <motion.button
                        id="products-cta-enquire"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group/cta relative inline-flex items-center gap-3 overflow-hidden
                            border border-brand-gold/40 text-white
                            px-10 md:px-14 py-4 md:py-5
                            text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.4em]
                            transition-all duration-500
                            hover:border-brand-gold hover:tracking-[0.55em]"
                    >
                        <span className="absolute inset-0 bg-brand-gold scale-x-0 origin-left group-hover/cta:scale-x-100 transition-transform duration-500 ease-out" />
                        <span className="relative z-10">Enquire Now</span>
                        <ArrowRight
                            size={14}
                            className="relative z-10 transition-transform duration-300 group-hover/cta:translate-x-1"
                        />
                    </motion.button>
                </div>
            </section>
        </div>
    );
}