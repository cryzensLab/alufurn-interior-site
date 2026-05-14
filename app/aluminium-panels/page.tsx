"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react";
import { useQuote } from "@/components/AppWrapper";

/* ── FAQ Data ── */
const faqs = [
    {
        q: "What is the price of aluminium wall panels per square foot in India?",
        a: "Interior aluminium wall panels range from approximately ₹350 to ₹800 per square foot, including installation sub-frame and surface finish. Exterior facade cladding systems vary depending on engineering requirements and building height. ALUFURN provides detailed per-sqft pricing after a project brief review — contact us for a free estimate.",
    },
    {
        q: "Are aluminium panels suitable for exterior facade cladding in India?",
        a: "Yes. Aluminium is one of the most specified facade cladding materials for Indian commercial and residential buildings. It is corrosion-resistant, dimensionally stable in high temperature and humidity environments, non-combustible (important for fire safety compliance), and requires no maintenance painting cycle.",
    },
    {
        q: "Can aluminium wall panels be custom-designed with patterns or perforations?",
        a: "Absolutely. ALUFURN's CNC panel manufacturing capability allows for fully custom perforation patterns, geometric relief patterns, embossed textures, and bespoke panel sizes and shapes. Custom designs are available with no minimum order quantity for architectural projects. Our design team works with your architect's drawings to produce the exact panel specification required.",
    },
    {
        q: "How are ALUFURN aluminium panels fixed to the wall?",
        a: "ALUFURN uses concealed aluminium sub-frame fixing systems for all panel installations. This eliminates visible fixings, allows for precise alignment, and accommodates thermal expansion without stress on the panels. For exterior facade applications, the sub-frame system is engineered for wind load and structural requirements.",
    },
    {
        q: "What is the lead time for aluminium wall panel supply in India?",
        a: "Standard interior aluminium wall panels have a manufacturing lead time of 3–4 weeks from design approval. Complex bespoke or high-volume facade projects are scheduled on a project-specific basis agreed at the time of order. ALUFURN provides firm lead time commitments before production begins.",
    },
];

/* ── Panel Range ── */
const panelRange = [
    {
        name: "Facade System",
        type: "Exterior Aluminium Cladding",
        desc: "Full exterior aluminium cladding in cassette, rainscreen, and composite panel formats. 2mm to 4mm thickness with concealed fixing systems. 100+ powder-coated RAL colours and anodised finishes.",
        image: "/images/facade-system.webp",
    },
    {
        name: "Feature Wall",
        type: "Interior Aluminium Wall Panels",
        desc: "Precision-folded aluminium panels on a concealed sub-frame for interior living rooms, lobbies, and hospitality spaces. Flat, textured, perforated, and 3D-relief profiles available.",
        image: "/images/feature-wall.webp",
    },
    {
        name: "Wall Panel",
        type: "Suspended Ceiling & Wall Systems",
        desc: "Grid-based and free-span aluminium ceiling systems with optional acoustic perforation and integrated lighting channels. Consistent material language across ceilings and walls.",
        image: "/images/wall-panel.webp",
    },
];

/* ── Why Aluminium Panels ── */
const advantages = [
    "Corrosion-resistant — performs in coastal and high-humidity zones",
    "Non-combustible — compliant with Indian building fire safety codes",
    "Zero maintenance painting cycle required",
    "Dimensionally stable across India's temperature extremes",
    "Custom CNC perforation, emboss, and 3D-relief patterns available",
    "100+ powder-coated RAL colour options + PVD metallic finishes",
    "Concealed sub-frame fixing — no visible fasteners",
    "Interior and exterior panel systems from a single manufacturer",
];

/* ── FAQ Accordion ── */
function FaqItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                onClick={toggle}
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                aria-expanded={isOpen}
            >
                <span className="text-brand-primary font-semibold text-sm md:text-base leading-snug group-hover:text-brand-gold transition-colors duration-200">
                    {q}
                </span>
                <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-brand-primary/70 text-sm md:text-base leading-relaxed pb-5 font-light">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function AluminiumPanelsPage() {
    const { openQuote } = useQuote();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-brand-surface">

            {/* ── Hero ── */}
            <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
                <Image
                    src="/images/wallpanel_01.webp"
                    alt="ALUFURN aluminium wall panel cladding India – interior facade"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                <div className="absolute inset-0 flex flex-col items-start justify-end px-6 md:px-16 pb-16 md:pb-24 max-w-6xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold"
                    >
                        Aluminium Wall Panels & Facade Cladding
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-5 max-w-4xl"
                    >
                        Custom Aluminium Wall Panels —{" "}
                        <em className="font-light not-italic" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                            Made in India
                        </em>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/75 text-sm md:text-lg font-light max-w-xl leading-relaxed mb-8"
                    >
                        Architectural-grade aluminium panels for interior feature walls, building facades, and ceiling systems. Unlimited finishes. Engineered for Indian climates.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="flex flex-col sm:flex-row gap-3"
                    >
                        <button
                            onClick={openQuote}
                            className="px-8 py-4 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-[0.35em] hover:bg-[#C5A059] transition-colors duration-200"
                        >
                            Get a Free Panel Quote
                        </button>
                        <Link
                            href="/projects"
                            className="px-8 py-4 border border-white/40 text-white text-[10px] font-bold uppercase tracking-[0.35em] hover:border-white/80 hover:bg-white/10 transition-all duration-200 text-center"
                        >
                            See Panel Projects
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* ── Section 1: Why Aluminium Panels ── */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                                Why Aluminium Panels
                            </span>
                            <div className="h-px w-10 bg-brand-gold mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tighter uppercase leading-tight mb-6">
                                The Rise of Aluminium Wall Panels in Indian Architecture
                            </h2>
                            <p className="text-brand-primary/70 text-sm md:text-base font-light leading-relaxed mb-6">
                                Aluminium wall panels have moved from niche architectural application to mainstream premium choice across India's residential and commercial design sectors. Architects are specifying aluminium panels where they once defaulted to stone cladding, timber wall finishes, and composite materials.
                            </p>
                            <p className="text-brand-primary/70 text-sm md:text-base font-light leading-relaxed mb-8">
                                For building facades, aluminium cladding is corrosion-resistant (critical in coastal zones like Calicut), non-combustible for fire safety compliance, and dimensionally stable across India's extremes. For interiors, aluminium panels deliver a premium aesthetic that endures through years of daily contact — scratch-resistant, moisture-proof, and easy to clean.
                            </p>
                            <ul className="space-y-3">
                                {advantages.map((adv) => (
                                    <li key={adv} className="flex items-start gap-3 text-sm text-brand-primary/80">
                                        <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />
                                        <span className="font-light">{adv}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-[4/5] overflow-hidden"
                        >
                            <Image
                                src="/images/feature-wall.webp"
                                alt="ALUFURN aluminium feature wall panel interior accent India"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                                <p className="text-white/60 text-[10px] uppercase tracking-[0.4em] font-bold mb-1">Featured</p>
                                <p className="text-white font-bold text-lg tracking-tight uppercase">Interior Feature Wall System</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Section 2: Panel Range ── */}
            <section className="py-24 md:py-32 bg-[#f4f4f4]">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">Panel Systems</span>
                        <div className="h-px w-10 bg-brand-gold mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tighter uppercase leading-tight mb-4">
                            Our Aluminium Panel Range —{" "}
                            <em className="font-light" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                                Interior, Exterior & Ceiling
                            </em>
                        </h2>
                        <p className="text-brand-primary/60 text-sm md:text-base font-light max-w-xl mx-auto">
                            Three primary aluminium panel systems, each engineered for specific applications. All manufactured at our in-house facility and available in custom sizes and finishes.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {panelRange.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group relative overflow-hidden bg-white"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={`ALUFURN ${item.name} aluminium panel India`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <p className="text-brand-gold text-[9px] uppercase tracking-[0.4em] font-bold mb-1">{item.type}</p>
                                    <h3 className="text-brand-primary font-bold text-lg uppercase tracking-tight mb-2">{item.name}</h3>
                                    <p className="text-brand-primary/60 text-sm font-light leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 h-[2px] bg-brand-gold w-0 group-hover:w-full transition-all duration-700 ease-out" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Section 3: Process ── */}
            <section className="py-24 md:py-32 bg-brand-charcoal text-white">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/3] overflow-hidden lg:order-2"
                        >
                            <Image
                                src="/images/facade-system.webp"
                                alt="ALUFURN aluminium facade cladding system exterior building India"
                                fill
                                className="object-cover opacity-75"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
                                {[
                                    { val: "3–4wk", label: "Lead Time" },
                                    { val: "100+", label: "RAL Colours" },
                                    { val: "2–4mm", label: "Panel Thickness" },
                                ].map((s) => (
                                    <div key={s.label} className="flex flex-col items-center text-center px-4 first:pl-0 last:pr-0">
                                        <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{s.val}</span>
                                        <span className="text-brand-gold text-[9px] uppercase tracking-widest font-bold mt-1">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:order-1"
                        >
                            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                                Design to Installation
                            </span>
                            <div className="h-px w-10 bg-brand-gold mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter uppercase leading-tight mb-6">
                                Working with ALUFURN on Aluminium Panel Projects
                            </h2>
                            <div className="space-y-5 mb-8">
                                {[
                                    { step: "01", title: "Design Development", desc: "Our technical team reviews your architectural drawings and produces panel shop drawings and finish specifications for client approval." },
                                    { step: "02", title: "Engineering & Approval", desc: "For facade systems, we produce structural calculations covering panel deflection, wind load resistance, and fixing design to Indian building code standards." },
                                    { step: "03", title: "In-House Manufacturing", desc: "CNC panel cutting, forming, powder coating, and surface finishing — all completed at our factory. 3–4 week lead time from design approval." },
                                    { step: "04", title: "Site Installation", desc: "Panels arrive pre-cut, pre-finished, and panel-labelled for sequence installation. Installation partner teams complete the fit-out to shop drawing specification." },
                                ].map((s) => (
                                    <div key={s.step} className="flex gap-4">
                                        <span className="text-brand-gold font-bold text-[11px] tracking-widest shrink-0 mt-0.5">{s.step}</span>
                                        <div>
                                            <p className="text-white font-semibold text-sm mb-1">{s.title}</p>
                                            <p className="text-white/55 text-sm font-light leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] hover:gap-4 transition-all duration-300 group"
                            >
                                Send Your Panel Project Brief
                                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section id="faq" className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">FAQ</span>
                        <div className="h-px w-10 bg-brand-gold mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tighter uppercase leading-tight">
                            Aluminium Panels —{" "}
                            <em className="font-light" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                                Common Questions
                            </em>
                        </h2>
                    </motion.div>
                    <div className="divide-y divide-gray-200 border-y border-gray-200">
                        {faqs.map((faq, i) => (
                            <FaqItem
                                key={i}
                                q={faq.q}
                                a={faq.a}
                                isOpen={openFaq === i}
                                toggle={() => setOpenFaq(openFaq === i ? null : i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 bg-[#f4f4f4]">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">Start Your Panel Project</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tighter uppercase leading-tight mb-5">
                            Start Your Aluminium Panel Project with ALUFURN
                        </h2>
                        <p className="text-brand-primary/60 text-sm md:text-base font-light mb-8 max-w-lg mx-auto leading-relaxed">
                            Our architectural panel team works directly with architects, interior designers, and developers from design concept to site installation. Send us your project brief to get started.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                                onClick={openQuote}
                                className="px-10 py-4 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-[0.35em] hover:bg-[#C5A059] transition-colors duration-200"
                            >
                                Get a Free Panel Design Quote
                            </button>
                            <Link
                                href="/projects"
                                className="px-10 py-4 border border-brand-primary/30 text-brand-primary text-[10px] font-bold uppercase tracking-[0.35em] hover:border-brand-primary/60 transition-all duration-200 text-center inline-flex items-center justify-center gap-2 group"
                            >
                                See Aluminium Panel Projects
                                <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Internal Links ── */}
            <section className="py-14 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <p className="text-brand-primary/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-6 text-center">Explore More from ALUFURN</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { label: "Aluminium Modular Kitchens", href: "/aluminium-kitchen" },
                            { label: "Aluminium Interior & Facade Doors", href: "/aluminium-doors" },
                            { label: "In-House Aluminium Panel Manufacturing", href: "/quality" },
                            { label: "Completed Aluminium Panel Projects", href: "/projects" },
                            { label: "See Aluminium Panels at Our Experience Centre", href: "/experience" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-brand-primary/60 hover:text-brand-gold text-xs font-light border border-gray-200 hover:border-brand-gold/30 px-4 py-2 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
