"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export interface Category {
    id: string;
    label: string;
}

interface CategoryNavProps {
    categories: Category[];
    activeId: string;
    onSelect: (id: string) => void;
}

export default function CategoryNav({
    categories,
    activeId,
    onSelect,
}: CategoryNavProps) {
    const navRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);

    /* Detect when the nav becomes sticky */
    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the sentinel goes out of view, the nav is stuck
                setIsSticky(!entry.isIntersecting);
            },
            { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
        );

        // Create a sentinel element just before the nav
        const sentinel = document.createElement("div");
        sentinel.style.height = "1px";
        sentinel.style.width = "100%";
        sentinel.style.position = "absolute";
        sentinel.style.top = "-1px";
        sentinel.setAttribute("aria-hidden", "true");
        nav.style.position = "relative";
        nav.prepend(sentinel);

        observer.observe(sentinel);

        return () => {
            observer.disconnect();
            sentinel.remove();
        };
    }, []);

    const handleClick = (id: string) => {
        onSelect(id);
        const el = document.getElementById(id);
        if (el) {
            const navHeight = navRef.current?.offsetHeight || 80;
            const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 20;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <div
            ref={navRef}
            className={`sticky top-0 z-40 transition-all duration-300 ${
                isSticky
                    ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
                    : "bg-white"
            }`}
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center overflow-x-auto scrollbar-hide gap-1 py-1">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleClick(cat.id)}
                            className={`relative whitespace-nowrap px-5 md:px-7 py-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                                activeId === cat.id
                                    ? "text-brand-gold"
                                    : "text-brand-primary/50 hover:text-brand-primary"
                            }`}
                        >
                            {cat.label}
                            {/* Active indicator */}
                            {activeId === cat.id && (
                                <motion.div
                                    layoutId="category-indicator"
                                    className="absolute bottom-0 left-5 right-5 md:left-7 md:right-7 h-[2px] bg-brand-gold"
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30,
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
