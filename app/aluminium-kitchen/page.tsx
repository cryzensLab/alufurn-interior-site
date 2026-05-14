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
        q: "What is the price of an aluminium modular kitchen in India?",
        a: "A standard ALUFURN aluminium modular kitchen for a 2BHK apartment (8–12 linear feet) ranges from ₹2.5 lakh to ₹6 lakh, including materials and installation. Larger kitchens, premium hardware, or bespoke configurations are priced accordingly. We provide a detailed quote at no charge after a site measurement.",
    },
    {
        q: "How does an aluminium modular kitchen compare to plywood or MDF?",
        a: "Aluminium outperforms plywood and MDF on every dimension that matters in an Indian kitchen. Aluminium is 100% waterproof, termite-proof, and structurally stable across temperature and humidity extremes. Aluminium kitchens have a lifespan of 20–30 years versus 8–15 years for plywood — the total lifetime cost of ownership is substantially lower.",
    },
    {
        q: "Are ALUFURN aluminium kitchens available outside Patna?",
        a: "Yes. ALUFURN has experience centres in Patna (Bihar), Jaipur (Rajasthan), and Calicut (Kerala), and supplies aluminium modular kitchens across all major Indian cities including Delhi, Mumbai, Bangalore, Hyderabad, Chennai, and Pune.",
    },
    {
        q: "How long does it take to manufacture and install an aluminium kitchen?",
        a: "Manufacturing lead time is typically 4–6 weeks from design approval. On-site installation takes 2–3 days for a standard kitchen — a fraction of the 7–10 days required for conventional wood-based systems.",
    },
    {
        q: "What warranty does ALUFURN offer on aluminium kitchens?",
        a: "ALUFURN aluminium kitchens carry a structural warranty covering manufacturing defects. Aluminium profiles are warrantied against corrosion and structural failure. Hardware (hinges, channels, drawer systems) carries the manufacturer's warranty from our German and European hardware partners. Full warranty terms are provided in writing at time of order.",
    },
];

/* ── Kitchen Range Data ── */
const kitchenRange = [
    {
        name: "Linear Series",
        tagline: "The Smart Indian Apartment Kitchen",
        desc: "Single-wall linear design with full-height aluminium cabinetry, handleless push-to-open doors, and concealed electrical conduits. Ideal for 1BHK and 2BHK apartments.",
        image: "/images/linear-series.webp",
    },
    {
        name: "Island Pro",
        tagline: "Open-Plan Living, Elevated",
        desc: "L-shaped base cabinet system with a freestanding aluminium island counter that doubles as a breakfast bar. Structural rigidity of aluminium makes islands possible at spans unsafe in plywood.",
        image: "/images/island-pro.webp",
    },
    {
        name: "Classic Matte",
        tagline: "Dramatic U-Shape for Larger Homes",
        desc: "U-shaped aluminium kitchen with deep pull-out drawers, corner carousel units, and a dedicated spice organisation system. Matte black and anthracite finishes create a striking contemporary aesthetic.",
        image: "/images/classic-matte.webp",
    },
    {
        name: "Modular Max",
        tagline: "Every Centimetre Counts",
        desc: "Compact solution for small Indian kitchens. Custom-width aluminium cabinets, wall-mounted storage modules, and integrated appliance housing — no compromise on quality.",
        image: "/images/modular_max.webp",
    },
    {
        name: "Luxury Bespoke",
        tagline: "No Standard Dimensions. No Limits.",
        desc: "No standard dimensions, no catalogue finishes, no compromises. Our design team works with your architect or interior designer to produce a kitchen that is as unique as your home.",
        image: "/images/luxury_bespoke.webp",
    },
];

/* ── Why Aluminium Advantages ── */
const advantages = [
    "100% waterproof — no swelling, no delamination",
    "Termite-proof and pest-resistant for life",
    "Dimensionally stable across all Indian climate zones",
    "Non-porous surface — hygienic for daily Indian cooking",
    "CNC precision to ±0.1mm on every profile",
    "20–30 year structural lifespan",
    "E0 formaldehyde standard — safer indoor air quality",
    "Site-ready installation in 2–3 days",
];

/* ── FAQ Accordion Item ── */
function FaqItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
    return (
        <div
            id="faq"
            className="border-b border-gray-200 last:border-0"
        >
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
                        <p className="text-brand-primary/70 text-sm md:text-base leading-relaxed pb-5 font-light">
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function AluminiumKitchenPage() {
    const { openQuote } = useQuote();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-brand-surface">

            {/* ── Hero ── */}
            <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
                <Image
                    src="/images/kitchen_01.webp"
                    alt="ALUFURN aluminium modular kitchen India – bespoke linear design"
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
                        Aluminium Modular Kitchen
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-5 max-w-4xl"
                    >
                        Aluminium Modular Kitchens —{" "}
                        <em className="font-light not-italic" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                            Built for India
                        </em>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/75 text-sm md:text-lg font-light max-w-xl leading-relaxed mb-8"
                    >
                        Precision-crafted aluminium kitchen cabinets with German-standard hardware. Waterproof, termite-proof, and made-to-measure for every Indian home.
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
                            Get a Free Kitchen Quote
                        </button>
                        <Link
                            href="/experience"
                            className="px-8 py-4 border border-white/40 text-white text-[10px] font-bold uppercase tracking-[0.35em] hover:border-white/80 hover:bg-white/10 transition-all duration-200 text-center"
                        >
                            Visit a Showroom
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* ── Section 1: Why Aluminium ── */}
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
                                Why Aluminium
                            </span>
                            <div className="h-px w-10 bg-brand-gold mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tighter uppercase leading-tight mb-6">
                                Why Indian Homeowners Are Switching to Aluminium Modular Kitchens
                            </h2>
                            <p className="text-brand-primary/70 text-sm md:text-base font-light leading-relaxed mb-6">
                                India's kitchen environment is unforgiving. High humidity, monsoon moisture, cooking steam, and tropical heat make conventional plywood or MDF kitchens a long-term liability. Within 5–8 years, wooden kitchen cabinets warp, swell, and become breeding grounds for termites and mould.
                            </p>
                            <p className="text-brand-primary/70 text-sm md:text-base font-light leading-relaxed mb-8">
                                ALUFURN aluminium modular kitchens are engineered for Indian climatic conditions — 100% waterproof, termite-proof, and resistant to humidity levels across Patna, Jaipur, and coastal Calicut. The result is a kitchen that looks identical on day 3,650 as it did on day one.
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
                                src="/images/island-pro.webp"
                                alt="ALUFURN Island Pro open-plan aluminium kitchen with island counter India"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                                <p className="text-white/60 text-[10px] uppercase tracking-[0.4em] font-bold mb-1">Featured</p>
                                <p className="text-white font-bold text-lg tracking-tight uppercase">Island Pro Kitchen</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Section 2: Kitchen Range ── */}
            <section className="py-24 md:py-32 bg-[#f4f4f4]">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">Our Collections</span>
                        <div className="h-px w-10 bg-brand-gold mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tighter uppercase leading-tight mb-4">
                            ALUFURN Aluminium Kitchen Collections —{" "}
                            <em className="font-light" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                                From Compact to Bespoke
                            </em>
                        </h2>
                        <p className="text-brand-primary/60 text-sm md:text-base font-light max-w-xl mx-auto">
                            Every ALUFURN kitchen is custom-designed and manufactured to your exact floor plan, ceiling height, and lifestyle preferences.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {kitchenRange.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.07 }}
                                className={`group relative overflow-hidden bg-white ${i === 0 || i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={`ALUFURN ${item.name} aluminium modular kitchen India`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <p className="text-brand-gold text-[9px] uppercase tracking-[0.4em] font-bold mb-1">{item.tagline}</p>
                                    <h3 className="text-brand-primary font-bold text-lg uppercase tracking-tight mb-2">{item.name}</h3>
                                    <p className="text-brand-primary/60 text-sm font-light leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 h-[2px] bg-brand-gold w-0 group-hover:w-full transition-all duration-700 ease-out" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Section 3: Manufacturing ── */}
            <section className="py-24 md:py-32 bg-brand-charcoal text-white">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/3] overflow-hidden"
                        >
                            <Image
                                src="/images/manufacturing.webp"
                                alt="ALUFURN aluminium furniture CNC manufacturing plant India – German precision"
                                fill
                                className="object-cover opacity-70"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
                                {[
                                    { val: "0.1mm", label: "Accuracy" },
                                    { val: "100%", label: "Automated" },
                                    { val: "E0", label: "Eco Standard" },
                                ].map((s) => (
                                    <div key={s.label} className="flex flex-col items-center text-center px-4 first:pl-0 last:pr-0">
                                        <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{s.val}</span>
                                        <span className="text-brand-gold text-[9px] uppercase tracking-widest font-bold mt-1">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                                In-House Manufacturing
                            </span>
                            <div className="h-px w-10 bg-brand-gold mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter uppercase leading-tight mb-6">
                                India's Most Precise Aluminium Kitchen Manufacturer
                            </h2>
                            <p className="text-white/65 text-sm md:text-base font-light leading-relaxed mb-5">
                                ALUFURN is one of the few aluminium kitchen manufacturers in India that operates a fully in-house, automated production facility. German CNC routing machines cut every panel to ±0.1mm accuracy — the same precision used by top European cabinet makers.
                            </p>
                            <p className="text-white/65 text-sm md:text-base font-light leading-relaxed mb-8">
                                In-house powder coating, anodising, and E0-compliant board work means zero batch variance across any single project. Your kitchen arrives pre-assembled, site-ready, and installs in 2–3 days.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/quality"
                                    className="inline-flex items-center gap-2 text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] hover:gap-4 transition-all duration-300 group"
                                >
                                    Our Manufacturing Standards
                                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                                </Link>
                                <span className="hidden sm:block text-white/20">|</span>
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors duration-200"
                                >
                                    Completed Kitchen Projects
                                    <ArrowRight size={12} />
                                </Link>
                            </div>
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
                            Aluminium Kitchen —{" "}
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
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">Start Your Project</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tighter uppercase leading-tight mb-5">
                            Ready to Design Your Aluminium Kitchen?
                        </h2>
                        <p className="text-brand-primary/60 text-sm md:text-base font-light mb-8 max-w-lg mx-auto leading-relaxed">
                            Visit our experience centre in Patna, Jaipur, or Calicut to see our aluminium kitchens in person — or book a free online consultation with our design team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                                onClick={openQuote}
                                className="px-10 py-4 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-[0.35em] hover:bg-[#C5A059] transition-colors duration-200"
                            >
                                Get a Free Design Quote
                            </button>
                            <Link
                                href="/experience"
                                className="px-10 py-4 border border-brand-primary/30 text-brand-primary text-[10px] font-bold uppercase tracking-[0.35em] hover:border-brand-primary/60 transition-all duration-200 text-center inline-flex items-center justify-center gap-2 group"
                            >
                                Visit an Experience Centre
                                <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Internal Links Signpost ── */}
            <section className="py-14 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <p className="text-brand-primary/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-6 text-center">Explore More from ALUFURN</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { label: "Aluminium Interior Doors", href: "/aluminium-doors" },
                            { label: "Aluminium Wall Panels & Cladding", href: "/aluminium-panels" },
                            { label: "Our In-House Manufacturing Facility", href: "/quality" },
                            { label: "Completed Kitchen Projects", href: "/projects" },
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
