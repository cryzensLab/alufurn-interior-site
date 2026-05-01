"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Mail, Bot, ArrowUp, X } from "lucide-react";
import Chatbot from "./Chatbot";

/* ── Scroll Detection Hook ── */
function useScrollVisibility(debounceMs = 200) {
    const [pastHero, setPastHero] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const rafRef = useRef<number | null>(null);

    const handleScroll = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        rafRef.current = requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const heroHeightPx = typeof window !== "undefined" ? window.innerHeight : 0;

            setPastHero(scrollY > heroHeightPx);
            setIsScrolling(true);

            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, debounceMs);
        });
    }, [debounceMs]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [handleScroll]);

    const isVisible = pastHero && !isScrolling;
    return { isVisible };
}

/* ── Animation Variants ── */
const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.07, delayChildren: 0.05 },
    },
    exit: {
        transition: { staggerChildren: 0.04, staggerDirection: -1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 400, damping: 24 },
    },
    exit: {
        opacity: 0,
        y: 16,
        scale: 0.85,
        transition: { duration: 0.18, ease: "easeIn" },
    },
};

/* ── Component ── */
export default function FloatingActions() {
    const { isVisible } = useScrollVisibility();
    const [tooltipId, setTooltipId] = useState<string | null>(null);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const openMail = useCallback(() => {
        window.location.href = "mailto:enquiries@alufurn.com";
    }, []);

    const openWhatsApp = useCallback(() => {
        window.open(
            "https://wa.me/917763970474?text=Hi%20I%27m%20interested%20in%20ALUFURN.%20Please%20share%20details.",
            "_blank",
            "noopener,noreferrer"
        );
    }, []);

    const toggleChat = useCallback(() => {
        setIsChatOpen(prev => !prev);
    }, []);

    const fabItems = [
        {
            id: "fab-mail",
            label: "Mail",
            icon: <Mail className="w-5 h-5" />,
            ariaLabel: "Send us an email",
            onClick: openMail,
            className: "bg-brand-primary text-white hover:bg-brand-primary-deep shadow-[0_4px_20px_rgba(30,71,60,0.35)]",
        },
        {
            id: "fab-whatsapp",
            label: "WhatsApp",
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            ariaLabel: "Chat on WhatsApp",
            onClick: openWhatsApp,
            className: "bg-[#25D366] text-white hover:bg-[#1ebe5a] shadow-[0_4px_20px_rgba(37,211,102,0.35)]",
        },
        {
            id: "chat-btn",
            label: isChatOpen ? "Close Chat" : "AI Chat",
            icon: isChatOpen ? <X className="w-5 h-5" /> : <Bot className="w-5 h-5" />,
            ariaLabel: "Toggle AI Chatbot",
            onClick: toggleChat,
            className: isChatOpen
                ? "bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)]"
                : "bg-gray-400 text-white hover:bg-gray-500 shadow-[0_4px_20px_rgba(0,0,0,0.15)]",
        },
        {
            id: "fab-top",
            label: "Top",
            icon: <ArrowUp className="w-5 h-5" />,
            ariaLabel: "Back to top",
            onClick: scrollToTop,
            className: "bg-white/90 text-brand-primary border border-brand-border hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.10)]",
        },
    ];

    return (
        <>
            {/* ── Custom Chatbot Component ── */}
            <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

            {/* ── FAB Stack ── */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="fab-stack"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 flex flex-col-reverse items-end gap-3"
                        role="group"
                        aria-label="Quick actions"
                    >
                        {fabItems.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                className="relative flex items-center"
                                onMouseEnter={() => setTooltipId(item.id)}
                                onMouseLeave={() => setTooltipId(null)}
                            >
                                {/* Tooltip */}
                                <AnimatePresence>
                                    {tooltipId === item.id && (
                                        <motion.span
                                            initial={{ opacity: 0, x: 8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 8 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-gray-900/90 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-sm pointer-events-none select-none"
                                        >
                                            {item.label}
                                        </motion.span>
                                    )}
                                </AnimatePresence>

                                {/* Button */}
                                <motion.button
                                    id={item.id}
                                    onClick={item.onClick}
                                    aria-label={item.ariaLabel}
                                    whileHover={{ scale: 1.12 }}
                                    whileTap={{ scale: 0.92 }}
                                    className={`
                                        flex items-center justify-center
                                        w-12 h-12 md:w-14 md:h-14
                                        rounded-full cursor-pointer
                                        transition-all duration-300
                                        focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2
                                        ${item.className}
                                    `}
                                >
                                    {item.icon}
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
