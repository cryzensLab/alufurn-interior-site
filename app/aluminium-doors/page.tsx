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
        q: "What is the price of aluminium interior doors in India?",
        a: "A standard aluminium flush door for a bedroom or bathroom typically ranges from ₹18,000 to ₹45,000 per unit including frame and hardware. Pivot doors and custom systems with concealed hardware are priced higher based on size and specification. Contact ALUFURN for a detailed quote based on your project requirements.",
    },
    {
        q: "Are aluminium pivot doors suitable for Indian homes?",
        a: "Yes — aluminium pivot doors are ideally suited to Indian homes. The pivot mechanism distributes the door's weight more evenly than conventional hinges, making oversized doors feasible and ensuring smooth, long-lasting operation. Aluminium's dimensional stability means there is no warping or sticking across India's varied climate zones.",
    },
    {
        q: "What finishes are available for ALUFURN aluminium interior doors?",
        a: "ALUFURN aluminium interior doors are available in powder-coated finishes (matte, gloss, satin), anodised finishes, PVD metallic finishes, and real wood veneer laminated faces on aluminium substrates. We offer over 50 standard colour and texture options, with RAL custom colour matching available. Samples are available at all three experience centres.",
    },
    {
        q: "Can aluminium doors be used for both interior and exterior applications?",
        a: "ALUFURN's standard door range is designed for interior applications. For exterior-facing doors (e.g., balcony, courtyard), we produce specific weather-sealed aluminium door systems with thermally broken profiles. Please specify the application at the time of enquiry so our team can recommend the appropriate system.",
    },
    {
        q: "Do ALUFURN aluminium doors come with a warranty?",
        a: "Yes. ALUFURN aluminium interior doors carry a structural warranty covering profile integrity and hardware function. Surface finishes carry a separate warranty covering adhesion and colour retention. German and European hardware components carry the respective manufacturer's warranty. Full warranty documentation is provided with every completed project.",
    },
];

/* ── Door Range ── */
const doorRange = [
    {
        name: "Pivot Grand",
        system: "Aluminium Pivot Doors",
        desc: "Floor-to-ceiling aluminium pivot doors with concealed pivot hardware. Available in matte, gloss, textured, and wood-effect finishes. Sizes from standard to 3.5 metres tall.",
        image: "/images/pivot-grand.webp",
    },
    {
        name: "Flush Panel",
        system: "Seamless Aluminium Flush Doors",
        desc: "CNC-machined aluminium flush doors with concealed hinges, no visible frame lines, and perfectly flat faces. Available in painted, anodised, or laminated finishes.",
        image: "/images/flush-panel.webp",
    },
    {
        name: "Barn Slider",
        system: "Aluminium Barn Door System",
        desc: "Exposed aluminium track hardware with door panels available in solid, glass-inset, or perforated aluminium options. Popular in home offices, media rooms, and studio apartments.",
        image: "/images/barn-slider.webp",
    },
    {
        name: "Glass Divide",
        system: "Aluminium-Framed Glass Doors",
        desc: "Slim aluminium profiles with single or double-glazed panels. Maximum glass area for a light, open feel without sacrificing visual separation between spaces.",
        image: "/images/glass-divide.webp",
    },
    {
        name: "Hidden Door",
        system: "Concealed Aluminium Door System",
        desc: "A door finished identically to the surrounding wall — same paint, same texture, no visible frame, no visible handle. The most technically complex system in our range.",
        image: "/images/hidden-door.webp",
    },
];

/* ── Why Aluminium Advantages ── */
const advantages = [
    "Dimensionally stable — no warping or sticking in monsoon or dry season",
    "Structural strength for oversized pivot doors up to 3.5m tall",
    "Precision to ±0.1mm — perfectly flush installation every time",
    "German and European hardware with lifetime smooth action",
    "50+ surface finishes including RAL custom colour matching",
    "Zero maintenance — no repainting, no wood treatment required",
    "Non-combustible aluminium profiles for fire safety compliance",
    "Custom sizes and configurations — no standard limitations",
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

export default function AluminiumDoorsPage() {
    const { openQuote } = useQuote();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-brand-surface">

            {/* ── Hero ── */}
            <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
                <Image
                    src="/images/door_01.webp"
                    alt="ALUFURN aluminium interior flush door seamless design India"
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
                        Aluminium Interior Doors
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-5 max-w-4xl"
                    >
                        Aluminium Interior Doors —{" "}
                        <em className="font-light not-italic" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                            Precision Engineered
                        </em>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/75 text-sm md:text-lg font-light max-w-xl leading-relaxed mb-8"
                    >
                        Pivot, flush, sliding, and barn-style aluminium doors. Custom profiles, unlimited finishes, and German-standard hardware — manufactured in India.
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
                            Get a Free Door Quote
                        </button>
                        <Link
                            href="/projects"
                            className="px-8 py-4 border border-white/40 text-white text-[10px] font-bold uppercase tracking-[0.35em] hover:border-white/80 hover:bg-white/10 transition-all duration-200 text-center"
                        >
                            See Door Projects
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* ── Section 1: Why Aluminium ── */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/5] overflow-hidden lg:order-2"
                        >
                            <Image
                                src="/images/pivot-grand.webp"
                                alt="ALUFURN Pivot Grand aluminium pivot interior door – statement entry India"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                                <p className="text-white/60 text-[10px] uppercase tracking-[0.4em] font-bold mb-1">Featured</p>
                                <p className="text-white font-bold text-lg tracking-tight uppercase">Pivot Grand System</p>
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
                                The Aluminium Advantage
                            </span>
                            <div className="h-px w-10 bg-brand-gold mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tighter uppercase leading-tight mb-6">
                                Why India's Top Architects Are Switching to Aluminium Interior Doors
                            </h2>
                            <p className="text-brand-primary/70 text-sm md:text-base font-light leading-relaxed mb-6">
                                Solid wood interior doors in India absorb moisture in monsoon, expand, and then crack in the dry season — they stick, warp, and eventually fail to close flush. In coastal cities like Calicut, the problem is particularly severe. Aluminium does not absorb moisture and is dimensionally stable across all Indian climate zones.
                            </p>
                            <p className="text-brand-primary/70 text-sm md:text-base font-light leading-relaxed mb-8">
                                Oversized pivot doors — the defining architectural element of luxury Indian interiors — require structural rigidity that only aluminium or steel can provide. Machined to ±0.1mm at our in-house facility, every door closes with the same effortless precision on year twenty as it did on day one.
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
                    </div>
                </div>
            </section>

            {/* ── Section 2: Door Range ── */}
            <section className="py-24 md:py-32 bg-[#f4f4f4]">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">Our Door Systems</span>
                        <div className="h-px w-10 bg-brand-gold mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tighter uppercase leading-tight mb-4">
                            ALUFURN Door Range —{" "}
                            <em className="font-light" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                                Pivot to Flush Panel
                            </em>
                        </h2>
                        <p className="text-brand-primary/60 text-sm md:text-base font-light max-w-xl mx-auto">
                            Five distinct aluminium door systems, each engineered for specific architectural applications. Every door custom-made to your exact dimensions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {doorRange.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.07 }}
                                className="group relative overflow-hidden bg-white"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={`ALUFURN ${item.name} aluminium interior door India`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <p className="text-brand-gold text-[9px] uppercase tracking-[0.4em] font-bold mb-1">{item.system}</p>
                                    <h3 className="text-brand-primary font-bold text-lg uppercase tracking-tight mb-2">{item.name}</h3>
                                    <p className="text-brand-primary/60 text-sm font-light leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 h-[2px] bg-brand-gold w-0 group-hover:w-full transition-all duration-700 ease-out" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Section 3: Manufacturing / Projects ── */}
            <section className="py-24 md:py-32 bg-brand-charcoal text-white">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                                Custom Manufacturing
                            </span>
                            <div className="h-px w-10 bg-brand-gold mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter uppercase leading-tight mb-6">
                                Custom Aluminium Door Manufacturing — From 1 Door to 100 Units
                            </h2>
                            <p className="text-white/65 text-sm md:text-base font-light leading-relaxed mb-5">
                                ALUFURN's door manufacturing spans single residential doors through to developer-scale supply of 50–100+ units. Our vertically integrated production means aluminium profiles, surface finishing, glazing, and hardware fitting are all completed at our in-house facility — eliminating the quality variance of multi-contractor projects.
                            </p>
                            <p className="text-white/65 text-sm md:text-base font-light leading-relaxed mb-8">
                                We have supplied aluminium interior doors for luxury 3BHK residences in Patna, high-rise developer projects in Jaipur, and architect-led villa projects in Calicut — with a firm lead time of 3–5 weeks from design approval.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={openQuote}
                                    className="inline-flex items-center gap-2 text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] hover:gap-4 transition-all duration-300 group"
                                >
                                    Get a Free Door Quote
                                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                                </button>
                                <span className="hidden sm:block text-white/20">|</span>
                                <Link
                                    href="/quality"
                                    className="inline-flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors duration-200"
                                >
                                    Precision Manufacturing
                                    <ArrowRight size={12} />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-2 gap-3"
                        >
                            {[
                                { image: "/images/flush-panel.webp", label: "Flush Panel" },
                                { image: "/images/barn-slider.webp", label: "Barn Slider" },
                                { image: "/images/glass-divide.webp", label: "Glass Divide" },
                                { image: "/images/hinged-classic.webp", label: "Hinged Classic" },
                            ].map((img) => (
                                <div key={img.label} className="relative aspect-square overflow-hidden">
                                    <Image
                                        src={img.image}
                                        alt={`ALUFURN ${img.label} aluminium door India`}
                                        fill
                                        className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                                        <p className="text-white text-[9px] uppercase tracking-widest font-bold">{img.label}</p>
                                    </div>
                                </div>
                            ))}
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
                            Aluminium Doors —{" "}
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
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">Design Your Doors</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tighter uppercase leading-tight mb-5">
                            Design Your Aluminium Interior Doors with ALUFURN
                        </h2>
                        <p className="text-brand-primary/60 text-sm md:text-base font-light mb-8 max-w-lg mx-auto leading-relaxed">
                            Visit our Patna, Jaipur, or Calicut experience centre to see our full door range in person. Our design team will help you select the right system for your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                                onClick={openQuote}
                                className="px-10 py-4 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-[0.35em] hover:bg-[#C5A059] transition-colors duration-200"
                            >
                                Get a Free Door Quote
                            </button>
                            <Link
                                href="/projects"
                                className="px-10 py-4 border border-brand-primary/30 text-brand-primary text-[10px] font-bold uppercase tracking-[0.35em] hover:border-brand-primary/60 transition-all duration-200 text-center inline-flex items-center justify-center gap-2 group"
                            >
                                See Completed Door Projects
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
                            { label: "Aluminium Wall Panels & Cladding", href: "/aluminium-panels" },
                            { label: "Precision Manufacturing Process", href: "/quality" },
                            { label: "Completed Door Projects", href: "/projects" },
                            { label: "Visit an Experience Centre", href: "/experience" },
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
