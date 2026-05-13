"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
const projects = [
    {
        id: 1,
        name: "Luxury 3BHK Kitchen",
        city: "Patna",
        descriptor: "Full modular aluminium kitchen with island counter",
        image: "/images/kitchen_01.webp",
    },
    {
        id: 2,
        name: "Developer Project — 12 Units",
        city: "Jaipur",
        descriptor: "Turnkey wardrobe & vanity supply for residential complex",
        image: "/images/wardrobe_01.webp",
    },
    {
        id: 3,
        name: "Premium Villa Interior",
        city: "Calicut",
        descriptor: "Bespoke kitchen, wardrobe & interior doors — end-to-end",
        image: "/images/linear-series.webp",
    },
    {
        id: 4,
        name: "Boutique Apartment Fit-Out",
        city: "Patna",
        descriptor: "Sliding wardrobes & floating vanity units throughout",
        image: "/images/dresser-suite.webp",
    },
    {
        id: 5,
        name: "High-Rise Developer Supply",
        city: "Jaipur",
        descriptor: "Aluminium panel cladding for facade & lobbies — 6 floors",
        image: "/images/wallpanel_01.webp",
    },
    {
        id: 6,
        name: "Architect-Led Residence",
        city: "Calicut",
        descriptor: "Pivot door entrance + seamless flush interior doors",
        image: "/images/door_01.webp",
    },
];

const testimonial = {
    quote:
        "ALUFURN delivered exceptional precision — every panel, every hinge was exactly to spec. Their aluminium systems saved us weeks of installation time across all 12 units. The finish quality impressed our buyers.",
    name: "Vikram Sethi",
    role: "Principal Architect & Developer, Jaipur",
};

const stats = [
    { value: "0.1 mm", label: "Machining Accuracy" },
    { value: "100%", label: "Automated Production" },
    { value: "E0", label: "Formaldehyde Standard" },
    { value: "25+", label: "Projects Delivered" },
];

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
export default function ProjectGallery() {
    return (
        <section className="py-24 md:py-32 bg-brand-surface">
            <div className="container mx-auto px-6 md:px-12">

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto"
                >
                    <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                        Our Work
                    </span>
                    {/* Gold draw-in line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "40px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-px bg-brand-gold mx-auto mt-1 mb-6"
                    />
                    <h2
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-primary tracking-tighter uppercase leading-none mb-6"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Projects We&apos;re{" "}
                        <em
                            className="font-light"
                            style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                        >
                            Proud Of
                        </em>
                    </h2>
                    <p className="text-brand-text-muted text-sm md:text-base font-light leading-relaxed">
                        From single luxury residences to large developer contracts — precision aluminium interiors, delivered on time.
                    </p>
                </motion.div>

                {/* ── Pinterest Masonry Grid ── */}
                <div
                    className="mb-16"
                    style={{ columns: "2 280px", columnGap: "10px" }}
                >
                    {projects.map((project, index) => {
                        const heights = ["400px", "300px", "480px", "340px", "440px", "280px"];
                        const h = heights[index % heights.length];
                        return (
                            <div
                                key={project.id}
                                style={{ breakInside: "avoid", marginBottom: "10px", display: "inline-block", width: "100%" }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.55, delay: index * 0.06 }}
                                    className="group relative overflow-hidden cursor-pointer"
                                    style={{ height: h }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                                    />
                                    {/* Gradient — deepens on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent group-hover:via-black/35 transition-all duration-500" />

                                    {/* City pill */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-brand-gold text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1">
                                            {project.city}
                                        </span>
                                    </div>

                                    {/* Bottom info — descriptor slides up on hover */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                                        <h3 className="text-white font-bold text-sm md:text-base leading-tight tracking-tight mb-0 group-hover:mb-2 transition-all duration-300">
                                            {project.name}
                                        </h3>
                                        <p className="text-white/0 group-hover:text-white/65 text-[11px] font-light tracking-wide leading-relaxed max-h-0 group-hover:max-h-12 overflow-hidden transition-all duration-500">
                                            {project.descriptor}
                                        </p>
                                    </div>

                                    {/* Gold border on hover */}
                                    <div className="absolute inset-0 ring-0 group-hover:ring-2 group-hover:ring-brand-gold ring-inset transition-all duration-400 pointer-events-none" />
                                </motion.div>
                            </div>
                        );
                    })}
                </div>


                {/* ── What Sets Us Apart ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="border-t border-brand-border pt-20"
                >
                    <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-3 block font-bold">
                            Why ALUFURN
                        </span>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "40px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-px bg-brand-gold mx-auto mb-6"
                        />
                        <h2
                            className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tighter uppercase leading-none"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            What Sets Us <em className="font-light italic">Apart</em>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "100% In-House",
                                desc: "Every component is manufactured in our own facility, ensuring absolute quality control from raw material to finished product."
                            },
                            {
                                title: "German Precision",
                                desc: "Operating with advanced European machinery to achieve 0.1mm accuracy across all modular systems."
                            },
                            {
                                title: "E0 Grade Materials",
                                desc: "We exclusively use internationally certified, eco-safe materials that protect your family's health and environment."
                            },
                            {
                                title: "End-to-End Service",
                                desc: "From 3D spatial design to flawless installation by our trained technicians, we handle the entire lifecycle."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-brand-light p-8 md:p-10 border border-brand-border/50 hover:border-brand-gold/50 transition-colors duration-500 group"
                            >
                                <div className="w-8 h-px bg-brand-gold mb-6 group-hover:w-12 transition-all duration-300" />
                                <h3 className="text-brand-primary font-bold text-lg mb-3 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-brand-text-muted text-xs md:text-sm font-light leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
