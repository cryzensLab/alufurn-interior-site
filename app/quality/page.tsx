import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Quality & Manufacturing | ALUFURN",
    description: "Learn about ALUFURN's precision manufacturing — 0.1mm accuracy, 100% automated production lines, E1 formaldehyde standard compliance.",
};

const stats = [
    { value: "0.1 mm", label: "Machining Accuracy", detail: "CNC precision on every profile and panel" },
    { value: "100%", label: "Automated Production", detail: "Zero manual deviation at any stage" },
    { value: "E0", label: "Formaldehyde Standard", detail: "European safety compliance across all boards" },
    { value: "25+", label: "Projects Delivered", detail: "From single residences to developer contracts" },
];

const pillars = [
    {
        title: "German Machinery",
        description: "Our production lines are equipped with precision CNC routing and edge-banding machines from leading German manufacturers — the same equipment used by Europe's top cabinet makers.",
    },
    {
        title: "Aluminium-First Design",
        description: "Every product starts with the assumption that aluminium is the right material — not wood, not MDF. This shapes our tolerances, finishes, and structural approach from day one.",
    },
    {
        title: "Zero-Compromise Finishing",
        description: "Anodising, powder coating, and PVD treatments are done in-house under controlled conditions. No outsourcing means no variance in surface quality across an entire project.",
    },
    {
        title: "Site-Ready Delivery",
        description: "Panels arrive pre-cut, pre-drilled, and pre-labelled. Our installation partners can complete a full kitchen fit-out in a fraction of the time of conventional cabinetry.",
    },
];

export default function QualityPage() {
    return (
        <div className="min-h-screen bg-brand-surface">

            {/* ── Full-bleed Page Hero ── */}
            <div className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden">
                <Image
                    src="/images/manufacturing.webp"
                    alt="ALUFURN Manufacturing"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                        Our Standards
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-5">
                        Quality &amp; Manufacturing
                    </h1>
                    <p className="text-white/70 text-sm md:text-base font-light max-w-md leading-relaxed">
                        Precision engineering at every step — where German machinery meets Indian craftsmanship.
                    </p>
                </div>
            </div>

            {/* ── Stats Bar ── */}
            <div className="bg-brand-primary py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-1">
                                    {stat.value}
                                </p>
                                <p className="text-brand-gold text-[9px] uppercase tracking-[0.3em] font-bold mb-2">
                                    {stat.label}
                                </p>
                                <p className="text-white/45 text-[11px] font-light leading-snug hidden md:block">
                                    {stat.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Manufacturing Pillars ── */}
            <div className="container mx-auto px-6 md:px-12 py-20 md:py-28">
                <div className="mb-14">
                    <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                        How We Build
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight uppercase leading-tight max-w-lg">
                        Built Different, By Design
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mb-20">
                    {pillars.map((pillar, index) => (
                        <div key={pillar.title} className="border-l-2 border-brand-gold pl-6 py-1">
                            <span className="text-brand-gold text-[9px] uppercase tracking-[0.3em] font-bold mb-2 block">
                                0{index + 1}
                            </span>
                            <h3 className="text-lg md:text-xl font-bold text-brand-primary uppercase tracking-tight mb-3">
                                {pillar.title}
                            </h3>
                            <p className="text-brand-text-muted text-sm font-light leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Manufacturing image */}
                <div className="relative w-full overflow-hidden mb-16" style={{ aspectRatio: "21/9" }}>
                    <Image
                        src="/images/manufacturing.webp"
                        alt="ALUFURN manufacturing floor"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-primary/20" />
                </div>

                {/* CTA */}
                <div className="text-center border-t border-brand-border pt-16">
                    <p className="text-brand-text-muted text-sm font-light mb-6 max-w-md mx-auto leading-relaxed">
                        Ready to experience the ALUFURN difference in your project?
                    </p>
                    <Link
                        href="/experience"
                        className="inline-block px-10 py-4 bg-brand-primary text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-gold transition-colors duration-300"
                    >
                        Visit an Experience Centre
                    </Link>
                </div>
            </div>
        </div>
    );
}
