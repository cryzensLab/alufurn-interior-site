"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Menu, X, ArrowRight } from "lucide-react";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
const locations = [
    {
        city: "Patna",
        address: "G-15, Shashi Complex Exhibition Road",
        phone: "+91 776 397 0474",
    },
    {
        city: "JAIPUR",
        address: "131-132, Motilal Omparkash Opp. Jhotwara Police Station Near Amazon Office, Main Niwaru Road Jhotwara Industrial Area",
        phone: "+91 9776 397 0474",
    },
    {
        city: "Calicut",
        address: "Behind Industrial EstateGround Floor 42/1680, Kunnummal Nallalam, P.O Calicut",
        phone: "+91 9776 397 0474",
    },
];

const products = [
    { name: "Kitchen Designs", image: "/images/luxury_bespoke.webp", href: "/product#kitchen" },
    { name: "Wardrobe Solutions", image: "/images/hinged-classic.webp", href: "/product#wardrobe" },
    { name: "Vanity Units", image: "/images/double-basin.webp", href: "/product#vanity" },
    { name: "Interior Door", image: "/images/pivot-grand.webp", href: "/product#interior-doors" },
    { name: "Custom Aluminium Panels", image: "/images/wall-panel.webp", href: "/product#aluminium-panels" },
];

const navLinks = [
    { name: "Products", href: "/product" },
    { name: "Experience Center", href: "/experience" },
    { name: "Catalog", href: "/catalog" },
    { name: "Contact", href: "/contact" },
];

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
export default function Navbar({ onOpenQuote }: { onOpenQuote?: () => void }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [hoveredProduct, setHoveredProduct] = useState("Kitchen Designs");

    const pathname = usePathname();
    const router = useRouter();

    /* ── Scroll behaviour ── */
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;

            if (scrollY < 100) {
                setIsVisible(true);
            } else if (scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(scrollY);

            const threshold =
                window.innerWidth < 768 ? 200 : window.innerHeight - 100;
            setIsScrolled(scrollY > threshold);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    /* ── Lock scroll when mobile menu open ── */
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            setMobileProductsOpen(false);
        }
    }, [mobileMenuOpen]);

    /* ── Derived state ── */
    const isSecondaryPage = ["/contact", "/catalog", "/experience", "/product"].includes(
        pathname
    );
    const isWhiteNavbar = isScrolled || showProductsDropdown || isSecondaryPage;
    const isFixedNavbar =
        isScrolled || showProductsDropdown || (isSecondaryPage && lastScrollY > 10);
    const shouldHide =
        !isVisible && isFixedNavbar && lastScrollY > 100 && !mobileMenuOpen;

    return (
        <nav
            className={`top-0 left-0 w-full z-50 transition-all duration-500 ${shouldHide ? "-translate-y-full" : "translate-y-0"
                } ${mobileMenuOpen
                    ? "fixed inset-0 h-screen overflow-hidden"
                    : isFixedNavbar
                        ? "fixed bg-white py-3 md:py-4 shadow-lg"
                        : isSecondaryPage
                            ? "absolute bg-white py-6 md:py-8"
                            : "absolute bg-transparent py-6 md:py-8"
                }`}
        >
            {/* ── Top Bar ── */}
            <div
                className={`container mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-500 ${mobileMenuOpen
                    ? "py-6 md:py-8 border-b border-gray-100 bg-white relative z-[110]"
                    : ""
                    }`}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <Image
                        src={
                            isWhiteNavbar || mobileMenuOpen
                                ? "/logo_green.png"
                                : "/logo_white.png"
                        }
                        alt="ALUFURN"
                        width={120}
                        height={40}
                        className="h-8 md:h-10 w-auto transition-all duration-500"
                        priority
                    />
                </Link>

                {/* ── Desktop Menu ── */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative py-4"
                            onMouseEnter={() =>
                                link.name === "Products" && setShowProductsDropdown(true)
                            }
                            onMouseLeave={() =>
                                link.name === "Products" && setShowProductsDropdown(false)
                            }
                        >
                            <Link
                                href={link.href}
                                className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isWhiteNavbar
                                    ? "text-brand-primary/70 hover:text-brand-primary"
                                    : "text-white/70 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>

                            {/* Products Mega-Menu */}
                            {link.name === "Products" && (
                                <AnimatePresence>
                                    {showProductsDropdown && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[800px] z-50"
                                        >
                                            {/* Triangle Arrow */}
                                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white" />

                                            <div className="bg-white shadow-2xl overflow-hidden flex items-stretch border border-gray-100">
                                                {/* Product Links */}
                                                <div className="w-1/2 p-8 border-r border-gray-100">
                                                    <ul className="space-y-2">
                                                        {products.map((item) => (
                                                            <li key={item.name}>
                                                                <Link
                                                                    href={item.href}
                                                                    onMouseEnter={() =>
                                                                        setHoveredProduct(item.name)
                                                                    }
                                                                    onClick={() =>
                                                                        setShowProductsDropdown(false)
                                                                    }
                                                                    className={`block w-full text-left py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${hoveredProduct === item.name
                                                                        ? "text-brand-gold pl-4"
                                                                        : "text-brand-primary/60 hover:text-brand-gold hover:pl-2"
                                                                        }`}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Dynamic Image */}
                                                <div className="w-1/2 relative overflow-hidden bg-gray-100">
                                                    <AnimatePresence mode="wait">
                                                        <motion.div
                                                            key={hoveredProduct}
                                                            initial={{ opacity: 0, scale: 1.1 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 0.95 }}
                                                            transition={{ duration: 0.4 }}
                                                            className="absolute inset-0"
                                                        >
                                                            <Image
                                                                src={
                                                                    products.find((p) => p.name === hoveredProduct)?.image || "/fallback.jpg"
                                                                }
                                                                alt={hoveredProduct}
                                                                fill
                                                                className="object-cover"
                                                                sizes="400px"
                                                                priority
                                                            />
                                                        </motion.div>
                                                    </AnimatePresence>
                                                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                                                    <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
                                                        <p className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-1">
                                                            Collection
                                                        </p>
                                                        <h4 className="text-white text-xl font-bold uppercase tracking-tight">
                                                            {hoveredProduct}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}

                    {/* Location Icon + Dropdown */}
                    <div
                        className={`flex items-center gap-6 ml-4 ${isWhiteNavbar ? "text-brand-primary" : "text-white"
                            }`}
                    >
                        <div
                            className="relative py-4"
                            onMouseEnter={() => setShowLocationDropdown(true)}
                            onMouseLeave={() => setShowLocationDropdown(false)}
                        >
                            <button className="hover:text-brand-gold transition-colors cursor-pointer">
                                <MapPin size={20} />
                            </button>

                            <AnimatePresence>
                                {showLocationDropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="absolute top-full right-0 pt-4 w-72 z-50"
                                    >
                                        <div className="absolute top-2 right-2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white" />

                                        <div className="bg-white shadow-2xl overflow-hidden border border-gray-100 p-6">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-4">
                                                Our Experience Centers
                                            </p>
                                            <div className="space-y-6">
                                                {locations.map((loc) => (
                                                    <div
                                                        key={loc.city}
                                                        className="group cursor-pointer"
                                                    >
                                                        <h5 className="text-sm font-bold uppercase tracking-widest text-brand-primary group-hover:text-brand-gold transition-colors mb-1">
                                                            {loc.city}
                                                        </h5>
                                                        <p className="text-[11px] text-brand-primary/60 leading-relaxed mb-1">
                                                            {loc.address}
                                                        </p>
                                                        <p className="text-[10px] font-mono text-brand-primary/40">
                                                            {loc.phone}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <button className="w-full mt-6 py-3 border border-brand-primary/10 text-[9px] font-bold uppercase tracking-widest text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300">
                                                View All Locations
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* ── Mobile / Tablet Toggle ── */}
                <button
                    className={`lg:hidden z-[110] transition-colors duration-500 ${mobileMenuOpen
                        ? "text-brand-primary"
                        : isWhiteNavbar
                            ? "text-brand-primary"
                            : "text-white"
                        }`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X size={32} strokeWidth={1.5} />
                    ) : (
                        <Menu size={32} strokeWidth={1.5} />
                    )}
                </button>
            </div>

            {/* ── Mobile / Tablet Menu ── */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Dark Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/40 z-[90] lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="fixed inset-0 w-full h-full bg-white z-[100] flex flex-col lg:hidden"
                        >
                            {/* Spacer for Header */}
                            <div className="h-[80px] md:h-[100px] w-full shrink-0" />

                            <div className="flex-1 flex flex-col py-10 px-8 overflow-y-auto">
                                {/* Primary Menu */}
                                <div className="space-y-8 mb-12">
                                    {navLinks.map((link, index) => (
                                        <div key={link.name} className="flex flex-col">
                                            <motion.button
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: index * 0.05 + 0.1,
                                                }}
                                                className={`text-[20px] md:text-[22px] font-bold uppercase tracking-[0.15em] text-brand-primary text-left flex items-center justify-between group transition-all duration-300 ${mobileProductsOpen &&
                                                    link.name === "Products"
                                                    ? "text-brand-gold"
                                                    : "hover:text-brand-gold"
                                                    }`}
                                                onClick={() => {
                                                    if (link.name === "Products") {
                                                        setMobileProductsOpen(
                                                            !mobileProductsOpen
                                                        );
                                                    } else {
                                                        setMobileMenuOpen(false);
                                                        router.push(link.href);
                                                    }
                                                }}
                                            >
                                                <span className="relative">
                                                    {link.name}
                                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300" />
                                                </span>
                                                {link.name === "Products" && (
                                                    <motion.div
                                                        animate={{
                                                            rotate: mobileProductsOpen
                                                                ? 180
                                                                : 0,
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <ArrowRight
                                                            size={20}
                                                            className="rotate-90 opacity-40"
                                                        />
                                                    </motion.div>
                                                )}
                                            </motion.button>

                                            {/* Products Sub-Menu */}
                                            {link.name === "Products" && (
                                                <AnimatePresence>
                                                    {mobileProductsOpen && (
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                height: 0,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                height: "auto",
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                                height: 0,
                                                            }}
                                                            className="overflow-hidden flex flex-col gap-5 mt-6 pl-6 border-l border-gray-100"
                                                        >
                                                            {products.map(
                                                                (product, pIndex) => (
                                                                    <motion.div
                                                                        key={product.name}
                                                                        initial={{
                                                                            opacity: 0,
                                                                            x: 10,
                                                                        }}
                                                                        animate={{
                                                                            opacity: 1,
                                                                            x: 0,
                                                                        }}
                                                                        transition={{
                                                                            delay:
                                                                                pIndex * 0.03,
                                                                        }}
                                                                    >
                                                                        <Link
                                                                            href={product.href}
                                                                            className="block text-left text-sm font-bold uppercase tracking-widest text-brand-primary/60 hover:text-brand-gold transition-colors"
                                                                            onClick={() =>
                                                                                setMobileMenuOpen(
                                                                                    false
                                                                                )
                                                                            }
                                                                        >
                                                                            {product.name}
                                                                        </Link>
                                                                    </motion.div>
                                                                )
                                                            )}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-8 pt-8 border-t border-gray-100"
                                >
                                    <motion.button
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            onOpenQuote?.();
                                        }}
                                        whileInView={{ scale: [1, 1.05, 1] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 3,
                                        }}
                                        className="w-full bg-brand-primary text-white py-5 text-[11px] font-bold uppercase tracking-[0.4em] md:hover:bg-brand-gold transition-all duration-500 shadow-lg"
                                    >
                                        Enquire Now
                                    </motion.button>
                                </motion.div>
                            </div>

                            {/* Bottom Info Panel */}
                            <div className="p-8 bg-gray-50 flex flex-col gap-4 mt-auto">
                                <div className="flex items-center gap-3 text-brand-primary/60">
                                    <MapPin size={16} className="text-brand-gold" />
                                    <span className="text-[10px] uppercase tracking-widest font-bold">
                                        Gurugram, India
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-brand-primary/60">
                                    <Phone size={16} className="text-brand-gold" />
                                    <span className="text-[10px] uppercase tracking-widest font-bold">
                                        +91 123 456 7890
                                    </span>
                                </div>
                                <p className="text-[9px] uppercase tracking-[0.3em] text-brand-primary/20 mt-2">
                                    © 2026 ALUFURN. Precision Engineered.
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
