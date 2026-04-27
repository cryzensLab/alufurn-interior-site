"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

/* ──────────────────────────────────────────────
   Inline SVG Social Icons (lucide dropped brand icons)
   ────────────────────────────────────────────── */
const InstagramIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

/* ──────────────────────────────────────────────
   Footer Data
   ────────────────────────────────────────────── */
const serviceLinks = [
    "Kitchen Design",
    "Wardrobe Solutions",
    "Vanity Units",
    "Interior Doors",
    "Custom Panels",
];

const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Our Process", href: "#" },
    { label: "Experience Center", href: "/experience" },
    { label: "Careers", href: "#" },
];

const supportLinks = [
    { label: "Contact Us", href: "/contact" },
    { label: "Catalog Download", href: "/catalog" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "FAQ", href: "#" },
];

const socialLinks = [
    { icon: InstagramIcon, href: "https://www.instagram.com/alufurn", label: "Instagram" },
    { icon: FacebookIcon, href: "https://www.facebook.com/people/Alufurn/61583290337095/", label: "Facebook" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/alufurn-home-44099b391?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
];

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
export default function Footer() {
    return (
        <footer className="bg-brand-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-6 md:px-12">
                {/* ── Top Bar ── */}
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-12 mb-12 gap-8">
                    <div className="flex items-center gap-8">
                        <a
                            href="mailto:hello@alufurn.com"
                            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                        >
                            <Mail size={18} />
                            <span className="text-sm">enquiries@alufurn.com</span>
                        </a>
                        <a
                            href="tel:+911234567890"
                            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                        >
                            <Phone size={18} />
                            <span className="text-sm">+91 776 397 0474</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-6">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-2 rounded-none border border-white/10 hover:bg-white hover:text-brand-primary transition-all"
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* ── Main Content ── */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Image
                            src="/logo_white.png"
                            alt="ALUFURN"
                            width={140}
                            height={40}
                            className="h-10 w-auto mb-6"
                        />
                        <p className="text-white/60 text-sm leading-relaxed mb-8 font-light">
                            Redefining luxury through architectural precision and
                            timeless design. We create spaces that resonate with
                            elegance and functionality.
                        </p>
                        <div className="flex items-start gap-3 text-white/60">
                            <MapPin size={20} className="shrink-0 mt-1" />
                            <span className="text-sm font-light">
                                G-15, Shashi Complex Exhibition Road
                                <br />
                                Patna, Bihar, India - 800001
                            </span>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8">
                            Services
                        </h4>
                        <ul className="space-y-4">
                            {serviceLinks.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-white/60 hover:text-white text-sm transition-colors font-light"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8">
                            Company
                        </h4>
                        <ul className="space-y-4">
                            {companyLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-white/60 hover:text-white text-sm transition-colors font-light"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8">
                            Support
                        </h4>
                        <ul className="space-y-4">
                            {supportLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-white/60 hover:text-white text-sm transition-colors font-light"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ── Bottom Bar ── */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">
                        © 2026 ALUFURN INTERIORS. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">
                        DESIGNED WITH PRECISION
                    </p>
                </div>
            </div>
        </footer>
    );
}