"use client";
export const dynamic = "force-dynamic";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Layout,
    MapPin,
    Clock,
    Phone,
    Calendar,
    Eye,
    Sparkles,
    ShieldCheck,
    PenTool,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';

/**
 * ExperienceCenter component converted to Next.js App Router.
 * Maintains original Tailwind styling and Framer Motion animations.
 */
export default function ExperienceCenter() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        city: 'Gurugram'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [startTime] = useState(Date.now());

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, startTime }),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: '', phone: '', date: '', city: 'Gurugram' });
                alert('Thank you! Your visit has been scheduled. Our team will contact you to confirm the timing.');
            } else {
                const data = await response.json();
                alert(data.error || "Something went wrong.");
            }
        } catch (error) {
            alert("Connection error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const features = [
        {
            icon: <Eye className="w-8 h-8" />,
            title: "Live Product Demonstration",
            desc: "See our aluminium systems in action with fully functional kitchen and wardrobe setups."
        },
        {
            icon: <PenTool className="w-8 h-8" />,
            title: "Expert Design Guidance",
            desc: "Consult with our lead architects to visualize your dream space in real-time."
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Custom Solutions",
            desc: "Explore endless possibilities of customization in finishes, textures, and hardware."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Premium Quality Assurance",
            desc: "Experience the precision of German engineering and the durability of high-grade aluminium."
        }
    ];

    const galleryImages = [
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503387762-592dec5832f2?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop"
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/experience.png"
                        alt="ALUFURN Showroom"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-primary/60 backdrop-blur-[2px]" />
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-brand-gold text-[10px] uppercase tracking-[0.6em] mb-8 block font-bold"
                    >
                        The Experience Center
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none uppercase"
                    >
                        Step Into the <br />
                        <span className="text-brand-gold italic font-light text-4xl md:text-7xl">World of ALUFURN.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12"
                    >
                        Experience Aluminium Interiors Like Never Before. Precision meets luxury in every square inch.
                    </motion.p>

                    <Link
                        href="/contact"
                        className="inline-block bg-brand-gold text-white px-16 py-6 text-[10px] font-bold uppercase tracking-[0.5em] md:hover:bg-white md:hover:text-brand-primary transition-all duration-500 shadow-2xl"
                    >
                        Book a Visit
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-12 tracking-tighter uppercase">Beyond a Showroom</h2>
                            <p className="text-brand-primary/60 text-lg md:text-xl font-light leading-relaxed mb-16">
                                Our Experience Center is a curated space designed to inspire. It's where architectural precision meets lifestyle design. Witness the future of home interiors through real-life product setups, premium finishes, and materials that are proudly manufactured in India.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { label: "Manufactured in India", icon: <ShieldCheck className="mx-auto mb-4 text-brand-gold" /> },
                                { label: "Real-life product setups", icon: <Layout className="mx-auto mb-4 text-brand-gold" /> },
                                { label: "Premium finishes & materials", icon: <Sparkles className="mx-auto mb-4 text-brand-gold" /> }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div className="text-brand-gold mb-2">{item.icon}</div>
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-primary/40">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Immersive Experience (Split Section) */}
            <section className="py-32 bg-brand-light overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-[3/2] overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="/images/experience_1.png"
                                    alt="Experience"
                                    className="w-full h-full object-cover brightness-90 md:hover:brightness-100 transition-all duration-1000"
                                />
                            </motion.div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-brand-gold/30 hidden md:block" />
                        </div>

                        <div className="w-full lg:w-1/2">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-brand-gold text-[10px] uppercase tracking-[0.6em] mb-8 block font-bold"
                            >
                                What You Can Explore
                            </motion.span>
                            <h2 className="text-4xl md:text-7xl font-bold text-brand-primary mb-12 tracking-tighter uppercase leading-none">
                                See. Touch. <br /> <span className="text-brand-gold italic font-light">Experience.</span>
                            </h2>

                            <div className="space-y-12">
                                {[
                                    { title: "Walk through real setups", desc: "Experience the flow and functionality of our modular kitchens and wardrobes in a real-world environment." },
                                    { title: "Understand materials & finishes", desc: "Feel the texture of our premium aluminium finishes and explore our extensive color palette." },
                                    { title: "Get expert consultation", desc: "Our design experts are on-site to help you translate your vision into a technical reality." }
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-6 group">
                                        <motion.div
                                            whileInView={{ width: [48, 80, 48] }}
                                            viewport={{ once: true }}
                                            className="w-12 h-px bg-brand-gold mt-4 shrink-0 md:group-hover:w-20 transition-all duration-500"
                                        />
                                        <div>
                                            <h4 className="text-xl font-bold text-brand-primary mb-2 uppercase tracking-widest">{item.title}</h4>
                                            <p className="text-brand-primary/60 font-light text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Visit Us */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tighter uppercase">Why Visit Us</h2>
                        <div className="w-20 h-1 bg-brand-gold mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-10 bg-brand-light md:hover:bg-brand-primary md:hover:text-white transition-all duration-500 group"
                            >
                                <motion.div
                                    whileInView={{ scale: [1, 1.1, 1] }}
                                    viewport={{ once: true }}
                                    className="text-brand-gold mb-8 md:group-hover:scale-110 transition-transform duration-500"
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">{item.title}</h3>
                                <p className="opacity-60 text-sm leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section - Hidden for future use
            <section className="py-32 bg-brand-primary overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] mb-4 block font-bold">Gallery</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase">Visual Journey</h2>
                        </div>
                        <div className="hidden md:flex gap-4">
                            <button className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-primary transition-all">
                                <ArrowRight size={20} className="rotate-180" />
                            </button>
                            <button className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-primary transition-all">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {galleryImages.map((img, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileInView={{ scale: [1, 1.05, 1] }}
                                viewport={{ once: true }}
                                className="aspect-[3/2] overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={img}
                                    alt={`Showroom ${index + 1}`}
                                    className="w-full h-full object-cover brightness-90 md:hover:brightness-100 transition-all duration-700"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            */}

            {/* Visit Information - Map Section */}
            <section className="py-32 bg-white relative group/map overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                     <div className="h-[400px] md:h-[600px] w-full bg-brand-light overflow-hidden rounded-xl shadow-inner mx-auto mb-12 border border-brand-border/20 relative">
                        <iframe
                            title="Alufurn Studio Location — Patna"
                            src="https://www.google.com/maps?q=25.6117,85.1426&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="transition-all duration-1000"
                        />
                        
                        {/* Map overlay labels & Actions */}
                        <div className="absolute top-8 left-8 right-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pointer-events-none">
                            <div className="bg-white/95 backdrop-blur-sm px-6 py-4 shadow-xl border border-brand-border/10 flex items-center gap-3 pointer-events-auto">
                                <MapPin size={16} className="text-brand-gold" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-primary">Our Showroom</span>
                                    <span className="text-[12px] font-medium text-brand-primary/60">Patna, Bihar</span>
                                </div>
                            </div>

                            <a
                                href="https://maps.app.goo.gl/9CuuLSiMVcXLk3rY6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pointer-events-auto group/btn flex items-center gap-3 bg-brand-primary text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-gold transition-all duration-500 shadow-2xl"
                            >
                                Open in Maps
                                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                         <div>
                            <p className="text-[10px] uppercase tracking-widest font-bold text-brand-primary/40 mb-4">Location Details</p>
                            <h3 className="text-2xl font-bold text-brand-primary mb-4 uppercase tracking-widest">Visit our Showroom</h3>
                            <p className="text-lg font-medium text-brand-primary leading-relaxed">G-15, Shashi Complex Exhibition Road<br />Patna, Bihar, India - 800001</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-primary/40 mb-2">Timings</p>
                                <p className="text-lg font-medium text-brand-primary leading-tight">Mon - Sat: 10:00 AM - 7:00 PM</p>
                                <p className="text-sm text-brand-primary/60 mt-1 italic">Sunday by Appointment Only</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-primary/40 mb-2">Contact</p>
                                <p className="text-lg font-medium text-brand-primary">+91 776 397 0474</p>
                                <p className="text-sm text-brand-primary/60 mt-1 italic">enquiries@alufurn.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <section id="book" className="py-32 bg-brand-light">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
                        <div className="w-full md:w-2/5 bg-brand-primary p-12 text-white flex flex-col justify-center">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter uppercase leading-tight">
                                Plan Your <br /> <span className="text-brand-gold italic font-light">Visit Today.</span>
                            </h2>
                            <p className="text-white/40 font-light text-sm mb-8">
                                Schedule a personalized walkthrough with our design experts and witness the precision of ALUFURN.
                            </p>
                            <div className="flex items-center gap-4 text-brand-gold">
                                <Calendar size={20} />
                                <span className="text-white font-bold uppercase tracking-widest text-[10px]">Personalized Consultation</span>
                            </div>
                        </div>

                        <div className="w-full md:w-3/5 p-12 md:p-16">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-primary/40 mb-2">Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-brand-gold transition-colors text-brand-primary"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-primary/40 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-brand-gold transition-colors text-brand-primary"
                                            placeholder="+91"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-primary/40 mb-2">Preferred Date</label>
                                        <input
                                            type="date"
                                            required
                                            className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-brand-gold transition-colors text-brand-primary bg-transparent"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-primary/40 mb-2">City</label>
                                        <select
                                            className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-brand-gold transition-colors text-brand-primary bg-transparent appearance-none"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        >
                                            <option>Gurugram</option>
                                            <option>Delhi</option>
                                            <option>Noida</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-brand-primary text-white py-6 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-brand-gold transition-all duration-500 shadow-xl ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    {isSubmitting ? "Scheduling..." : "Schedule Visit"}
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
