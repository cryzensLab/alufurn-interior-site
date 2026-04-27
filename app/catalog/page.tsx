"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, ChevronRight } from 'lucide-react';
import Link from 'next/link';

/**
 * CatalogSection component converted to Next.js App Router.
 * Maintains original Tailwind styling and Framer Motion animations.
 */
export default function CatalogSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        country: 'India',
        products: [] as string[],
        quantity: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [submitMessage, setSubmitMessage] = useState('');


    const productOptions = [
        "Kitchen Cabinets",
        "Wardrobes",
        "Bathroom Vanities",
        "Interior Doors",
        "Aluminum Doors and Windows",
        "Whole House Solution",
        "Others"
    ];

    const handleCheckboxChange = (product: string) => {
        setFormData(prev => ({
            ...prev,
            products: prev.products.includes(product)
                ? prev.products.filter(p => p !== product)
                : [...prev.products, product]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const res = await fetch('/api/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    city: formData.city,
                    location: `${formData.city}, ${formData.country}`,
                    projectType: 'Catalog Download Request',
                    product: formData.products,
                    quantity: formData.quantity,
                    message: formData.message,
                    uploadedFile: 'N/A' // Placeholder for now, as file upload is not fully implemented
                }),
            });

            if (res.ok) {
                setSubmitStatus('success');
                setSubmitMessage('Thank you! Your catalog request has been submitted. We will contact you within 24 hours.');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    city: '',
                    country: 'India',
                    products: [],
                    quantity: '',
                    message: ''
                });
                alert('Thank you! Your catalog request has been submitted. We will contact you within 24 hours.');
            } else {
                const data = await res.json();
                setSubmitStatus('error');
                setSubmitMessage(data.error || 'Something went wrong. Please try again.');
                alert(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setSubmitStatus('error');
            setSubmitMessage('An error occurred. Please try again later.');
            alert('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-24 md:pt-32 pb-20 bg-white">
            {/* Breadcrumb */}
            <div className="bg-gray-50 py-4 mb-12">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brand-primary/40">
                        <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
                        <ChevronRight size={10} />
                        <span className="text-brand-primary/80">Download Catalog</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12">
                {/* Heading */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-brand-primary tracking-tighter uppercase"
                    >
                        Download Catalog
                    </motion.h1>
                    <div className="w-20 h-1 bg-brand-gold mx-auto mt-6" />
                </div>

                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative max-w-6xl mx-auto bg-brand-primary text-white overflow-hidden shadow-2xl"
                >
                    {/* Background Texture */}
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop"
                            alt="Interior Background"
                            className="w-full h-full object-cover brightness-50"
                        />
                    </div>

                    <div className="relative z-10 p-8 md:p-16">
                        <div className="mb-12">
                            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-4">
                                Fill in to get our latest catalog for free!
                            </h2>
                            <p className="text-brand-gold text-sm font-medium flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                Kindly send us your project details and floor plan. We will contact you within 24 hours!
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Main Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">* Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-brand-gold transition-all"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">* Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-brand-gold transition-all"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">* Tel/Whatsapp</label>
                                    <div className="flex">
                                        <div className="bg-white/10 border border-white/10 px-3 flex items-center gap-2 text-xs">
                                            <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4" />
                                            <span>+91</span>
                                        </div>
                                        <input
                                            type="tel"
                                            required
                                            className="flex-1 bg-white/5 border border-white/10 border-l-0 px-4 py-4 text-sm focus:outline-none focus:border-brand-gold transition-all"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">* City</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-brand-gold transition-all"
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">* Country</label>
                                    <select
                                        className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-brand-gold transition-all appearance-none"
                                        value={formData.country}
                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                    >
                                        <option value="India" className="bg-brand-primary">India</option>
                                        <option value="UAE" className="bg-brand-primary">UAE</option>
                                        <option value="USA" className="bg-brand-primary">USA</option>
                                        <option value="UK" className="bg-brand-primary">UK</option>
                                    </select>
                                </div>
                            </div>

                            {/* Product Needed */}
                            <div>
                                <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-4">Product Needed *</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {productOptions.map(option => (
                                        <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                            <div
                                                onClick={() => handleCheckboxChange(option)}
                                                className={`w-5 h-5 border flex items-center justify-center transition-all ${formData.products.includes(option) ? 'bg-brand-gold border-brand-gold' : 'border-white/20 group-hover:border-brand-gold'}`}
                                            >
                                                {formData.products.includes(option) && <div className="w-2 h-2 bg-white" />}
                                            </div>
                                            <span className="text-xs text-white/70 group-hover:text-white transition-colors">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity & File Upload */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">* Quantity</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-brand-gold transition-all"
                                        value={formData.quantity}
                                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">File Upload</label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            className="absolute inset-0 opacity-0 cursor-pointer z-20"
                                        />
                                        <div className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm flex items-center justify-between">
                                            <span className="text-white/40">No files selected.</span>
                                            <Upload size={16} className="text-brand-gold" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">
                                    * Message: Kindly share your house floor plans or measurements to get a fast quote. More detailed info will help us serve you better.
                                </label>
                                <textarea
                                    rows={6}
                                    className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-brand-gold transition-all resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            {/* Submit */}
                            <div className="text-center pt-6">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    whileInView={{ scale: [1, 1.02, 1] }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-brand-gold text-white px-20 py-5 text-[10px] font-bold uppercase tracking-[0.5em] md:hover:bg-white md:hover:text-brand-primary transition-all duration-500 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </motion.button>
                                {submitStatus === 'success' && (
                                    <p className="mt-4 text-green-400 text-sm">{submitMessage}</p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="mt-4 text-red-400 text-sm">{submitMessage}</p>
                                )}
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
