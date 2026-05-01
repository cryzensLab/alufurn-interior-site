"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    TrendingUp,
    Settings,
    Users,
    ArrowRight,
    CheckCircle2,
    Briefcase,
    Layout,
    Truck,
    Download
} from 'lucide-react';
import Image from 'next/image';

/**
 * FranchiseSection component converted to Next.js App Router.
 * Maintains original Tailwind styling and Framer Motion animations.
 */
export default function FranchiseSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: '',
        businessType: 'Interior Designer'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Franchise Application:', formData);
        alert('Thank you for your interest! Our franchise team will contact you shortly.');
    };

    const whyChoose = [
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Made in India",
            desc: "Proudly manufactured in our state-of-the-art facility in Gurugram, ensuring local precision and global quality."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "High Growth Market",
            desc: "Tap into the rapidly expanding luxury home interiors segment with a brand that defines modern living."
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: "Premium Aluminium Systems",
            desc: "Offer your clients the durability and elegance of precision-engineered aluminium interiors."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Business Support",
            desc: "From training to marketing, we provide comprehensive support to ensure your franchise thrives."
        }
    ];

    const steps = [
        { title: "Apply", desc: "Submit your interest through our online portal." },
        { title: "Consultation", desc: "Meet our team to discuss the business model." },
        { title: "Approval", desc: "Formalize the partnership and secure your territory." },
        { title: "Launch", desc: "Setup your showroom and start your journey." }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-primary">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2000&auto=format&fit=crop"
                        alt="Luxury Interior"
                        fill
                        className="object-cover opacity-40 brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/60 via-brand-primary/40 to-brand-primary" />
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-brand-gold text-[10px] uppercase tracking-[0.6em] mb-8 block font-bold"
                    >
                        Partnership Opportunity
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none uppercase"
                    >
                        Build the Future of <br />
                        <span className="text-brand-gold italic font-light text-4xl md:text-7xl">Luxury Interiors.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12"
                    >
                        Join India's leading precision-engineered aluminium interior brand. Manufactured in India, designed for the world.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="#apply"
                            className="bg-brand-gold text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.4em] md:hover:bg-white md:hover:text-brand-primary transition-all duration-500 shadow-2xl"
                        >
                            Apply for Franchise
                        </a>
                        <button className="flex items-center gap-4 text-white font-bold text-[10px] uppercase tracking-[0.4em] py-5 px-10 border border-white/20 md:hover:border-brand-gold transition-all">
                            Download Brochure <Download size={14} className="text-brand-gold" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Choose ALUFURN */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tighter uppercase">Why Choose ALUFURN</h2>
                        <div className="w-20 h-1 bg-brand-gold mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {whyChoose.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-10 bg-brand-light md:hover:bg-white md:hover:shadow-2xl transition-all duration-500 border border-transparent md:hover:border-brand-gold/20 group"
                            >
                                <motion.div
                                    whileInView={{ scale: [1, 1.1, 1] }}
                                    viewport={{ once: true }}
                                    className="text-brand-gold mb-8 md:group-hover:scale-110 transition-transform duration-500"
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-lg font-bold text-brand-primary mb-4 uppercase tracking-wider">{item.title}</h3>
                                <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition (Split Section) */}
            <section className="py-32 bg-brand-primary overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative aspect-square overflow-hidden"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop"
                                    alt="Manufacturing Support"
                                    fill
                                    className="object-cover brightness-75"
                                />
                                <div className="absolute inset-0 bg-brand-primary/20" />
                            </motion.div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-brand-gold/30 hidden md:block" />
                        </div>

                        <div className="w-full lg:w-1/2 text-white">
                            <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter uppercase leading-tight">
                                Unrivaled <br /> <span className="text-brand-gold">Support System.</span>
                            </h2>

                            <div className="space-y-10">
                                {[
                                    { title: "Training & Setup", desc: "Comprehensive onboarding for your sales and technical teams.", icon: <Layout size={24} /> },
                                    { title: "Marketing Support", desc: "National brand campaigns and localized digital marketing assistance.", icon: <TrendingUp size={24} /> },
                                    { title: "Product Range", desc: "Access to our full catalog of kitchens, wardrobes, and custom solutions.", icon: <Briefcase size={24} /> },
                                    { title: "Supply Chain", desc: "Efficient logistics and inventory management for seamless operations.", icon: <Truck size={24} /> }
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-6 group">
                                        <motion.div
                                            whileInView={{ scale: [1, 1.2, 1] }}
                                            viewport={{ once: true }}
                                            className="text-brand-gold shrink-0 md:group-hover:scale-110 transition-transform"
                                        >
                                            {item.icon}
                                        </motion.div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-2 uppercase tracking-widest">{item.title}</h4>
                                            <p className="text-white/40 font-light text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tighter uppercase">Our Product Ecosystem</h2>
                        <p className="text-brand-primary/40 font-light max-w-2xl mx-auto">Precision-engineered solutions for every corner of the modern home.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Kitchens", img: "https://picsum.photos/seed/kitchen-f/800/1000" },
                            { name: "Wardrobes", img: "https://picsum.photos/seed/wardrobe-f/800/1000" },
                            { name: "TV Units", img: "https://picsum.photos/seed/tv-f/800/1000" },
                            { name: "Custom Interiors", img: "https://picsum.photos/seed/custom-f/800/1000" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                whileInView={{ y: [0, -10, 0] }}
                                viewport={{ once: true }}
                                className="relative aspect-[3/2] overflow-hidden group cursor-pointer"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    className="object-cover brightness-90 md:group-hover:brightness-100 transition-all duration-1000 md:group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent opacity-60 md:group-hover:opacity-80 transition-opacity" />
                                <div className="absolute bottom-8 left-8">
                                    <h4 className="text-white font-bold text-xl uppercase tracking-widest">{item.name}</h4>
                                    <motion.div
                                        whileInView={{ width: ["0%", "100%", "0%"] }}
                                        viewport={{ once: true }}
                                        className="w-0 md:group-hover:w-full h-px bg-brand-gold transition-all duration-500 mt-2"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment & Returns */}
            <section className="py-32 bg-brand-light">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-5xl mx-auto bg-white p-12 md:p-24 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -mr-32 -mt-32" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-12 tracking-tighter uppercase">Investment & Scalability</h2>
                            <p className="text-brand-primary/60 text-lg font-light leading-relaxed mb-16 max-w-3xl">
                                We've engineered our business model to be as precise as our products. Focus on high-margin luxury segments with a scalable model that grows with your ambition.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div>
                                    <h4 className="text-brand-gold text-4xl font-bold mb-2">High</h4>
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-primary">Profit Margins</p>
                                </div>
                                <div>
                                    <h4 className="text-brand-gold text-4xl font-bold mb-2">Low</h4>
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-primary">Inventory Risk</p>
                                </div>
                                <div>
                                    <h4 className="text-brand-gold text-4xl font-bold mb-2">Rapid</h4>
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-primary">Market Expansion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Can Apply */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="w-full lg:w-1/3">
                            <h2 className="text-4xl font-bold text-brand-primary mb-8 tracking-tighter uppercase">Who Can <br /> Join Us?</h2>
                            <p className="text-brand-primary/40 font-light">We are looking for visionary partners who share our passion for excellence.</p>
                        </div>

                        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                "Established Furniture Dealers",
                                "Visionary Interior Designers",
                                "Dynamic Entrepreneurs",
                                "Premium Showroom Owners"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileInView={{ borderColor: ["#f3f4f6", "#c5a059", "#f3f4f6"] }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-6 p-8 border border-gray-100 md:hover:border-brand-gold transition-colors"
                                >
                                    <CheckCircle2 className="text-brand-gold shrink-0" />
                                    <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-32 bg-brand-primary text-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter uppercase">The Journey to Partnership</h2>
                        <div className="w-20 h-1 bg-brand-gold mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block" />

                        {steps.map((step, index) => (
                            <div key={index} className="relative z-10 text-center">
                                <div className="w-16 h-16 bg-brand-gold text-brand-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8">
                                    0{index + 1}
                                </div>
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-widest">{step.title}</h4>
                                <p className="text-white/40 font-light text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lead Form Section */}
            <section id="apply" className="py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
                        <div className="w-full lg:w-1/2 bg-brand-primary p-12 md:p-20 text-white flex flex-col justify-center">
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter uppercase leading-tight">
                                Start Your <br /> <span className="text-brand-gold italic font-light">Success Story.</span>
                            </h2>
                            <p className="text-white/40 font-light text-lg mb-12">
                                Fill out the form and our franchise development team will reach out to you within 48 hours.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-brand-gold">
                                    <ArrowRight size={20} />
                                    <span className="text-white font-bold uppercase tracking-widest text-xs">Exclusive Territory Rights</span>
                                </div>
                                <div className="flex items-center gap-4 text-brand-gold">
                                    <ArrowRight size={20} />
                                    <span className="text-white font-bold uppercase tracking-widest text-xs">Full Showroom Design Support</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 bg-white p-12 md:p-20">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-primary/40 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-brand-gold transition-colors text-brand-primary"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-primary/40 mb-2">Phone Number</label>
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
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-primary/40 mb-2">City</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-brand-gold transition-colors text-brand-primary"
                                        placeholder="Your location"
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-primary/40 mb-2">Business Type</label>
                                    <select
                                        className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-brand-gold transition-colors text-brand-primary bg-transparent appearance-none"
                                        value={formData.businessType}
                                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                                    >
                                        <option>Interior Designer</option>
                                        <option>Furniture Dealer</option>
                                        <option>Entrepreneur</option>
                                        <option>Showroom Owner</option>
                                    </select>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-brand-primary text-white py-6 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-brand-gold transition-all duration-500 shadow-xl"
                                >
                                    Submit Application
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
