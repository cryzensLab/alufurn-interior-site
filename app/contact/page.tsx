"use client";
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    ArrowRight,
    CheckCircle,
    ChevronDown,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Types
   ────────────────────────────────────────────── */
type ProjectType = "Kitchen" | "Wardrobe" | "Doors" | "Custom Interiors" | "Facade Systems";

interface FormData {
    fullName: string;
    phone: string;
    email: string;
    projectType: ProjectType;
    message: string;
}

/* ──────────────────────────────────────────────
   Animation presets
   ────────────────────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
    }),
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};

/* ──────────────────────────────────────────────
   Contact info data
   ────────────────────────────────────────────── */
const contactInfo = [
    {
        icon: Phone,
        label: "Call Us",
        primary: "+91 123 456 7890",
        secondary: "+91 098 765 4321",
        href: "tel:+911234567890",
    },
    {
        icon: Mail,
        label: "Email Us",
        primary: "hello@alufurn.com",
        secondary: "support@alufurn.com",
        href: "mailto:hello@alufurn.com",
    },
    {
        icon: MapPin,
        label: "Our Studio",
        primary: "123 Industrial Estate, Phase II",
        secondary: "Gurugram, Haryana, India — 122001",
        href: "https://maps.google.com/?q=Gurugram+Haryana+India",
    },
    {
        icon: Clock,
        label: "Working Hours",
        primary: "Mon — Sat: 10:00 AM – 7:00 PM",
        secondary: "Sunday: Closed",
        href: undefined,
    },
];

const projectTypes: ProjectType[] = [
    "Kitchen",
    "Wardrobe",
    "Doors",
    "Custom Interiors",
    "Facade Systems",
];

/* ──────────────────────────────────────────────
   Floating Label Input Component
   ────────────────────────────────────────────── */
const FloatingInput = ({
    id,
    label,
    type = "text",
    required = false,
    value,
    onChange,
}: {
    id: string;
    label: string;
    type?: string;
    required?: boolean;
    value: string;
    onChange: (v: string) => void;
}) => {
    const [focused, setFocused] = useState(false);
    const isActive = focused || value.length > 0;

    return (
        <div className="relative group">
            <input
                id={id}
                type={type}
                required={required}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="peer w-full bg-transparent border-0 border-b border-brand-border
                   px-0 pt-6 pb-3 text-[15px] text-brand-primary font-medium
                   focus:outline-none focus:ring-0 focus:border-brand-gold
                   transition-colors duration-300 placeholder-transparent"
                placeholder={label}
            />
            <label
                htmlFor={id}
                className={`absolute left-0 transition-all duration-300 pointer-events-none
                    ${isActive
                        ? "top-0 text-[10px] tracking-[0.15em] uppercase font-semibold text-brand-gold"
                        : "top-6 text-[13px] tracking-normal font-normal text-brand-text-muted"
                    }`}
            >
                {label}
            </label>
            {/* Animated underline */}
            <div
                className={`absolute bottom-0 left-0 h-[1.5px] bg-brand-gold transition-all duration-500 ease-out
                    ${focused ? "w-full" : "w-0"}`}
            />
        </div>
    );
};

/* ──────────────────────────────────────────────
   Main Contact Page
   ────────────────────────────────────────────── */
const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        phone: "",
        email: "",
        projectType: "Kitchen",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [messageFocused, setMessageFocused] = useState(false);

    const formRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const formInView = useInView(formRef, { once: true, margin: "-80px" });
    const infoInView = useInView(infoRef, { once: true, margin: "-80px" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate async submission
        await new Promise((resolve) => setTimeout(resolve, 1800));

        setIsSubmitting(false);
        setSubmitted(true);
        console.log("Form submitted:", formData);
    };

    const resetForm = () => {
        setSubmitted(false);
        setFormData({
            fullName: "",
            phone: "",
            email: "",
            projectType: "Kitchen",
            message: "",
        });
    };

    const messageActive = messageFocused || formData.message.length > 0;

    return (
        <div className="pt-24 md:pt-32">
            {/* ═══════════════════════════════════════
          Hero Section — Cinematic, dark, minimal
          ═══════════════════════════════════════ */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-brand-primary-deep">
                {/* Textured background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
                        alt="Industrial Texture"
                        className="w-full h-full object-cover opacity-15 brightness-50 scale-105"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-primary-deep/80 via-brand-primary-deep/50 to-brand-primary-deep" />
                </div>

                {/* Subtle grid overlay */}
                <div
                    className="absolute inset-0 z-[1] opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                <div className="container mx-auto px-6 md:px-16 relative z-10 text-center">
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
                        Get In Touch
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Let&apos;s Build Something{" "}
                        <br className="hidden md:block" />
                        <span
                            className="text-brand-gold-light italic font-medium"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Exceptional.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-white/40 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed"
                    >
                        Connect with our team for bespoke aluminium interior solutions,
                        crafted with precision and purpose.
                    </motion.p>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
                        >
                            <div className="w-[3px] h-[6px] rounded-full bg-brand-gold-muted" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          Form + Info Section — Clean, elevated
          ═══════════════════════════════════════ */}
            <section className="py-20 md:py-32 bg-brand-surface">
                <div className="container mx-auto px-6 md:px-16">
                    {/* Section header */}
                    <div className="text-center mb-16 md:mb-24">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-semibold block mb-4"
                        >
                            Start a Conversation
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl md:text-4xl font-bold text-brand-primary tracking-tight"
                        >
                            How Can We Help?
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 max-w-7xl mx-auto">
                        {/* ─── Form Card ─── */}
                        <motion.div
                            ref={formRef}
                            initial="hidden"
                            animate={formInView ? "visible" : "hidden"}
                            variants={stagger}
                            className="lg:col-span-7"
                        >
                            <div className="bg-white p-8 md:p-12 lg:p-14 shadow-[0_4px_40px_rgba(0,0,0,0.06)] rounded-sm">
                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        /* ─── Success State ─── */
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="py-16 text-center"
                                        >
                                            <div className="w-16 h-16 mx-auto mb-6 bg-brand-light rounded-full flex items-center justify-center">
                                                <CheckCircle className="text-brand-gold" size={28} />
                                            </div>
                                            <h3
                                                className="text-2xl font-semibold text-brand-primary mb-3"
                                                style={{ fontFamily: "var(--font-display)" }}
                                            >
                                                Message Sent
                                            </h3>
                                            <p className="text-brand-text-muted text-sm leading-relaxed max-w-sm mx-auto mb-8">
                                                Thank you for reaching out. Our team will get back to you
                                                within 24 hours.
                                            </p>
                                            <button
                                                onClick={resetForm}
                                                className="text-brand-gold text-[11px] uppercase tracking-[0.3em] font-semibold
                                   hover:text-brand-primary transition-colors duration-300
                                   border-b border-brand-gold/30 pb-1"
                                            >
                                                Send Another
                                            </button>
                                        </motion.div>
                                    ) : (
                                        /* ─── Form ─── */
                                        <motion.form
                                            key="form"
                                            onSubmit={handleSubmit}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-8 md:space-y-10"
                                        >
                                            {/* Form header */}
                                            <div className="mb-2">
                                                <h3
                                                    className="text-xl md:text-2xl font-semibold text-brand-primary tracking-tight mb-1"
                                                    style={{ fontFamily: "var(--font-display)" }}
                                                >
                                                    Send a Message
                                                </h3>
                                                <p className="text-brand-text-muted text-sm font-light">
                                                    Fill out the form below and we&apos;ll respond promptly.
                                                </p>
                                            </div>

                                            {/* Full Name */}
                                            <motion.div variants={fadeUp} custom={0}>
                                                <FloatingInput
                                                    id="contact-fullname"
                                                    label="Full Name"
                                                    required
                                                    value={formData.fullName}
                                                    onChange={(v) =>
                                                        setFormData({ ...formData, fullName: v })
                                                    }
                                                />
                                            </motion.div>

                                            {/* Phone + Email */}
                                            <motion.div
                                                variants={fadeUp}
                                                custom={0.05}
                                                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
                                            >
                                                <FloatingInput
                                                    id="contact-phone"
                                                    label="Phone Number"
                                                    type="tel"
                                                    required
                                                    value={formData.phone}
                                                    onChange={(v) =>
                                                        setFormData({ ...formData, phone: v })
                                                    }
                                                />
                                                <FloatingInput
                                                    id="contact-email"
                                                    label="Email Address"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(v) =>
                                                        setFormData({ ...formData, email: v })
                                                    }
                                                />
                                            </motion.div>

                                            {/* Project Type — Custom Select */}
                                            <motion.div variants={fadeUp} custom={0.1} className="relative group">
                                                <label className="block text-[10px] tracking-[0.15em] uppercase font-semibold text-brand-gold mb-3">
                                                    Project Type
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        id="contact-project-type"
                                                        className="w-full bg-transparent border-0 border-b border-brand-border
                                       appearance-none cursor-pointer
                                       px-0 pb-3 pt-1 text-[15px] text-brand-primary font-medium
                                       focus:outline-none focus:ring-0 focus:border-brand-gold
                                       transition-colors duration-300"
                                                        value={formData.projectType}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                projectType: e.target.value as ProjectType,
                                                            })
                                                        }
                                                    >
                                                        {projectTypes.map((type) => (
                                                            <option key={type} value={type}>
                                                                {type}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown
                                                        size={16}
                                                        className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-text-muted pointer-events-none"
                                                    />
                                                </div>
                                            </motion.div>

                                            {/* Message — Floating Textarea */}
                                            <motion.div variants={fadeUp} custom={0.15} className="relative group">
                                                <textarea
                                                    id="contact-message"
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, message: e.target.value })
                                                    }
                                                    onFocus={() => setMessageFocused(true)}
                                                    onBlur={() => setMessageFocused(false)}
                                                    className="peer w-full bg-transparent border-0 border-b border-brand-border
                                     px-0 pt-6 pb-3 text-[15px] text-brand-primary font-medium
                                     focus:outline-none focus:ring-0 focus:border-brand-gold
                                     transition-colors duration-300 resize-none placeholder-transparent"
                                                    placeholder="Tell us about your project..."
                                                />
                                                <label
                                                    htmlFor="contact-message"
                                                    className={`absolute left-0 transition-all duration-300 pointer-events-none
                                      ${messageActive
                                                            ? "top-0 text-[10px] tracking-[0.15em] uppercase font-semibold text-brand-gold"
                                                            : "top-6 text-[13px] tracking-normal font-normal text-brand-text-muted"
                                                        }`}
                                                >
                                                    Tell us about your project…
                                                </label>
                                                <div
                                                    className={`absolute bottom-0 left-0 h-[1.5px] bg-brand-gold transition-all duration-500 ease-out
                                      ${messageFocused ? "w-full" : "w-0"}`}
                                                />
                                            </motion.div>

                                            {/* Submit Button */}
                                            <motion.div variants={fadeUp} custom={0.2}>
                                                <button
                                                    id="contact-submit-btn"
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="group/btn w-full relative overflow-hidden
                                     bg-brand-primary text-white py-5
                                     text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.35em]
                                     transition-all duration-500
                                     hover:tracking-[0.5em]
                                     disabled:opacity-70 disabled:cursor-not-allowed
                                     flex items-center justify-center gap-3"
                                                >
                                                    {/* Hover fill */}
                                                    <span className="absolute inset-0 bg-brand-gold scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-500 ease-out" />

                                                    <span className="relative z-10 flex items-center gap-3">
                                                        {isSubmitting ? (
                                                            <>
                                                                <svg
                                                                    className="animate-spin h-4 w-4"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <circle
                                                                        className="opacity-25"
                                                                        cx="12"
                                                                        cy="12"
                                                                        r="10"
                                                                        stroke="currentColor"
                                                                        strokeWidth="3"
                                                                        fill="none"
                                                                    />
                                                                    <path
                                                                        className="opacity-75"
                                                                        fill="currentColor"
                                                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                                    />
                                                                </svg>
                                                                Sending…
                                                            </>
                                                        ) : (
                                                            <>
                                                                Schedule a Consultation
                                                                <ArrowRight
                                                                    size={14}
                                                                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                                                                />
                                                            </>
                                                        )}
                                                    </span>
                                                </button>
                                            </motion.div>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        {/* ─── Contact Info ─── */}
                        <motion.div
                            ref={infoRef}
                            initial="hidden"
                            animate={infoInView ? "visible" : "hidden"}
                            variants={stagger}
                            className="lg:col-span-5 flex flex-col"
                        >
                            {/* Info header */}
                            <motion.div variants={fadeUp} custom={0} className="mb-10">
                                <h3
                                    className="text-xl md:text-2xl font-semibold text-brand-primary tracking-tight mb-2"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    Contact Information
                                </h3>
                                <p className="text-brand-text-muted text-sm font-light leading-relaxed">
                                    Reach out through any channel — we respond within one business
                                    day.
                                </p>
                            </motion.div>

                            {/* Info Cards */}
                            <div className="space-y-1">
                                {contactInfo.map((item, i) => {
                                    const Icon = item.icon;
                                    const cardClassName = `group flex items-start gap-5 p-5 rounded-sm transition-all duration-300 hover:bg-white hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)] ${item.href ? "cursor-pointer" : ""}`;

                                    const cardContent = (
                                        <>
                                            <div
                                                className="w-11 h-11 rounded-sm bg-brand-light flex items-center justify-center
                                     text-brand-gold-muted group-hover:text-brand-gold group-hover:bg-brand-gold/10
                                     transition-all duration-300 shrink-0"
                                            >
                                                <Icon size={18} strokeWidth={1.5} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-brand-text-muted/60 mb-1.5">
                                                    {item.label}
                                                </p>
                                                <p className="text-[15px] font-medium text-brand-primary leading-snug">
                                                    {item.primary}
                                                </p>
                                                <p className="text-[13px] text-brand-text-muted mt-0.5">
                                                    {item.secondary}
                                                </p>
                                            </div>
                                            {item.href && (
                                                <ArrowRight
                                                    size={14}
                                                    className="ml-auto text-brand-border group-hover:text-brand-gold
                                       transition-all duration-300 group-hover:translate-x-1
                                       shrink-0 mt-3.5"
                                                />
                                            )}
                                        </>
                                    );

                                    return (
                                        <motion.div key={item.label} variants={fadeUp} custom={i * 0.08}>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    className={cardClassName}
                                                >
                                                    {cardContent}
                                                </a>
                                            ) : (
                                                <div className={cardClassName}>
                                                    {cardContent}
                                                </div>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Decorative divider */}
                            <div className="mt-10 pt-8 border-t border-brand-border">
                                <motion.p
                                    variants={fadeUp}
                                    custom={0.4}
                                    className="text-[11px] text-brand-text-muted/50 font-light leading-relaxed"
                                >
                                    <span className="font-semibold text-brand-primary/50">
                                        Alufurn®
                                    </span>{" "}
                                    — Premium aluminium interiors, engineered in India with German
                                    precision.
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          Map Section — Clean embed with overlay
          ═══════════════════════════════════════ */}
            <section className="relative group/map">
                <div className="h-[400px] md:h-[500px] w-full bg-brand-light overflow-hidden">
                    <iframe
                        title="Alufurn Studio Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112234.3986427303!2d77.01711!3d28.459497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5de8c5c2d0084!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1712640000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(80%) contrast(1.05)" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="group-hover/map:grayscale-0 transition-all duration-1000"
                    />
                </div>
                {/* Map overlay label */}
                <div
                    className="absolute top-6 left-6 md:top-8 md:left-8 bg-white/95 backdrop-blur-sm
                      px-5 py-3 shadow-lg flex items-center gap-3 pointer-events-none"
                >
                    <MapPin size={14} className="text-brand-gold" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-primary">
                        Our Studio — Gurugram
                    </span>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          CTA Section — Factory Visit
          ═══════════════════════════════════════ */}
            <section className="relative py-24 md:py-32 bg-brand-primary-deep text-white overflow-hidden">
                {/* Background texture */}
                <div className="absolute inset-0 opacity-[0.07]">
                    <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
                        alt=""
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>

                {/* Grain overlay */}
                <div
                    className="absolute inset-0 opacity-[0.04] z-[1]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                <div className="container mx-auto px-6 md:px-16 relative z-10 text-center max-w-3xl">
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
                        Visit Our Manufacturing Space
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-white/35 text-base md:text-lg mb-12 font-light leading-relaxed"
                    >
                        Witness the precision of German engineering and AI-driven automation
                        firsthand. Experience how raw aluminium transforms into art.
                    </motion.p>

                    <motion.button
                        id="cta-book-visit"
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
                        <span className="relative z-10">Book a Visit</span>
                        <ArrowRight
                            size={14}
                            className="relative z-10 transition-transform duration-300 group-hover/cta:translate-x-1"
                        />
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
