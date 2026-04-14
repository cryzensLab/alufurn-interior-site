"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, CheckCircle2, MessageSquare, Phone } from "lucide-react";

/**
 * Brand Colors:
 * Deep Green: #0F2A25
 * Surface Green: #163832
 * Accent Gold: #C8A96A
 */

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [startTime] = useState(Date.now());

    // Form State
    const [formData, setFormData] = useState({
        projectType: "",
        product: [] as string[],
        budget: "",
        location: "",
        timeline: "Immediate",
        name: "",
        phone: "",
        email: "",
        message: "",
        honeypot: "",
    });

    const totalSteps = 5;
    const progress = (step / totalSteps) * 100;

    // Reset on close
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setStep(1);
                setIsSuccess(false);
                setFormData({
                    projectType: "",
                    product: [],
                    budget: "",
                    location: "",
                    timeline: "Immediate",
                    name: "",
                    phone: "",
                    email: "",
                    message: "",
                    honeypot: "",
                });
            }, 500);
        }
    }, [isOpen]);

    const handleNext = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log("Submitting selection:", formData.product);
        try {
            const response = await fetch("/api/quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, startTime }),
            });

            if (response.ok) {
                setIsSuccess(true);
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

    const toggleProduct = (p: string) => {
        setFormData(prev => ({
            ...prev,
            product: prev.product.includes(p)
                ? prev.product.filter(item => item !== p)
                : [...prev.product, p]
        }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
                    />

                    {/* Modal/Drawer Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 h-full w-full max-w-[520px] bg-[#0F2A25] z-[210] shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header Section */}
                        <div className="p-8 pb-4 relative">
                            <button
                                onClick={onClose}
                                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {!isSuccess && (
                                <>
                                    <h2 className="text-3xl font-bold text-white mb-2">Get a Quote</h2>
                                    <p className="text-white/60 text-sm mb-8">
                                        Tell us about your project in 60 seconds
                                    </p>

                                    {/* Progress Section */}
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C8A96A]">
                                            Step {step} of {totalSteps}
                                        </span>
                                        <span className="text-[10px] text-white/40 font-mono">
                                            {Math.round(progress)}%
                                        </span>
                                    </div>
                                    <div className="h-1 w-full bg-white/5 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progress}%` }}
                                            className="h-full bg-[#C8A96A]"
                                        />
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <SuccessState onClose={onClose} />
                                ) : (
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        {step === 1 && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-medium text-white mb-6">What is your project type?</h3>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {["Home Interior", "Office Space", "Commercial Project", "Custom Requirement"].map((type) => (
                                                        <SelectionCard
                                                            key={type}
                                                            label={type}
                                                            isSelected={formData.projectType === type}
                                                            onClick={() => {
                                                                setFormData({ ...formData, projectType: type });
                                                                handleNext();
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {step === 2 && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-medium text-white mb-2">Select product interest</h3>
                                                <p className="text-white/40 text-xs mb-6">You can select multiple options</p>
                                                <div className="flex flex-wrap gap-3">
                                                    {["Aluminium Doors", "Windows", "Partitions", "Wardrobes", "Kitchen Solutions", "Custom Work"].map((prod) => (
                                                        <Chip
                                                            key={prod}
                                                            label={prod}
                                                            isSelected={formData.product.includes(prod)}
                                                            onClick={() => toggleProduct(prod)}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {step === 3 && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-medium text-white mb-6">Approximate budget range?</h3>
                                                <div className="space-y-3">
                                                    {["Under ₹1L", "₹1L – ₹3L", "₹3L – ₹7L", "₹7L+"].map((range) => (
                                                        <SelectionCard
                                                            key={range}
                                                            label={range}
                                                            fullWidth
                                                            isSelected={formData.budget === range}
                                                            onClick={() => {
                                                                setFormData({ ...formData, budget: range });
                                                                handleNext();
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {step === 4 && (
                                            <div className="space-y-8">
                                                <h3 className="text-xl font-medium text-white">Location & Timeline</h3>
                                                <div className="space-y-6">
                                                    <Input
                                                        label="Project Location"
                                                        value={formData.location}
                                                        onChange={(v) => setFormData({ ...formData, location: v })}
                                                        placeholder="e.g. Gurugram, Sector 54"
                                                        required
                                                    />
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Planned Timeline</label>
                                                        <div className="grid grid-cols-3 gap-2">
                                                            {["Immediate", "1–3 months", "Planning"].map((t) => (
                                                                <button
                                                                    key={t}
                                                                    onClick={() => setFormData({ ...formData, timeline: t })}
                                                                    className={`py-3 text-[10px] font-bold uppercase tracking-widest border transition-all ${formData.timeline === t
                                                                        ? "bg-[#C8A96A] border-[#C8A96A] text-[#0F2A25]"
                                                                        : "border-white/10 text-white/60 hover:border-white/30"
                                                                        }`}
                                                                >
                                                                    {t}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {step === 5 && (
                                            <div className="space-y-8">
                                                <h3 className="text-xl font-medium text-white">Contact Details</h3>
                                                <div className="space-y-6">
                                                    <input type="text" className="hidden" value={formData.honeypot} onChange={e => setFormData({ ...formData, honeypot: e.target.value })} />
                                                    <Input
                                                        label="Full Name"
                                                        value={formData.name}
                                                        onChange={(v) => setFormData({ ...formData, name: v })}
                                                        required
                                                    />
                                                    <Input
                                                        label="Email Address"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(v) => setFormData({ ...formData, email: v })}
                                                        required
                                                    />
                                                    <Input
                                                        label="Phone Number"
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={(v) => setFormData({ ...formData, phone: v })}
                                                        placeholder="+91"
                                                        required
                                                    />
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Special Message (Optional)</label>
                                                        <textarea
                                                            className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-[#C8A96A] transition-colors resize-none h-20"
                                                            value={formData.message}
                                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Footer CTA Section */}
                        {!isSuccess && (
                            <div className="p-8 bg-[#163832]/50 border-t border-white/5 space-y-4">
                                <div className="flex gap-4">
                                    {step > 1 && (
                                        <button
                                            onClick={handleBack}
                                            className="w-16 h-14 border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
                                        >
                                            <ArrowLeft size={20} />
                                        </button>
                                    )}
                                    <button
                                        onClick={step === 5 ? handleSubmit : handleNext}
                                        disabled={
                                            isSubmitting ||
                                            (step === 1 && !formData.projectType) ||
                                            (step === 2 && formData.product.length === 0) ||
                                            (step === 4 && !formData.location) ||
                                            (step === 5 && (!formData.name || !formData.phone || !formData.email))
                                        }
                                        className={`flex-1 h-14 bg-gradient-to-r from-[#C8A96A] to-[#A6894B] text-[#0F2A25] text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all duration-300 shadow-xl ${isSubmitting ? "opacity-90 cursor-wait" : "hover:scale-[1.02] hover:shadow-[#C8A96A]/20"
                                            } disabled:opacity-30 disabled:grayscale disabled:scale-100`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-[#0F2A25]/30 border-t-[#0F2A25] rounded-full animate-spin" />
                                                <span>Processing Inquiry...</span>
                                            </>
                                        ) : (
                                            <>
                                                {step === 5 ? "Get My Custom Quote" : "Continue"}
                                                <ArrowRight size={16} />
                                            </>
                                        )}
                                    </button>
                                </div>

                                {step === 5 && (
                                    <p className="text-center text-[10px] text-white/30 uppercase tracking-widest font-medium">
                                        We&apos;ll contact you within 24 hours
                                    </p>
                                )}

                                <div className="pt-2">
                                    <a
                                        href="https://wa.me/911234567890"
                                        target="_blank"
                                        className="w-full flex items-center justify-center gap-2 text-white/40 hover:text-[#C8A96A] text-[10px] font-bold uppercase tracking-widest transition-colors"
                                    >
                                        Or talk instantly on WhatsApp <ArrowRight size={12} />
                                    </a>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// Sub-components
function SelectionCard({ label, isSelected, onClick, fullWidth = false }: { label: string, isSelected: boolean, onClick: () => void, fullWidth?: boolean }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center p-5 border text-left transition-all duration-300 group ${fullWidth ? "w-full" : ""
                } ${isSelected
                    ? "border-[#C8A96A] bg-[#C8A96A]/5"
                    : "border-white/10 hover:border-white/30"
                }`}
        >
            <div className={`w-4 h-4 rounded-full border-2 mr-4 flex items-center justify-center transition-colors ${isSelected ? "border-[#C8A96A]" : "border-white/20 group-hover:border-white/40"
                }`}>
                {isSelected && <div className="w-2 h-2 rounded-full bg-[#C8A96A]" />}
            </div>
            <span className={`text-sm tracking-wide ${isSelected ? "text-[#C8A96A]" : "text-white/70 group-hover:text-white"}`}>
                {label}
            </span>
        </button>
    );
}

function Chip({ label, isSelected, onClick }: { label: string, isSelected: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`px-5 py-3 rounded-none text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${isSelected
                ? "bg-[#C8A96A] text-[#0F2A25]"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
        >
            {label}
        </button>
    );
}

function Input({ label, value, onChange, placeholder, type = "text", required = false }: { label: string, value: string, onChange: (v: string) => void, placeholder?: string, type?: string, required?: boolean }) {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (required && inputRef.current) inputRef.current.focus();
    }, []);

    return (
        <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                {label} {required && <span className="text-[#C8A96A]">*</span>}
            </label>
            <input
                ref={inputRef}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg focus:outline-none focus:border-[#C8A96A] transition-colors placeholder:text-white/10"
            />
        </div>
    );
}

function SuccessState({ onClose }: { onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-12"
        >
            <div className="w-24 h-24 rounded-full bg-[#C8A96A]/10 flex items-center justify-center mb-8">
                <CheckCircle2 size={48} className="text-[#C8A96A]" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Request Sent!</h3>
            <p className="text-white/60 leading-relaxed max-w-xs mb-10">
                Our experts are reviewing your requirements. Expect a callback or email within 24 hours.
            </p>
            <button
                onClick={onClose}
                className="w-full py-5 border border-white/10 text-[11px] font-bold uppercase tracking-[0.4em] text-white hover:bg-white hover:text-[#0F2A25] transition-all"
            >
                Close Window
            </button>
        </motion.div>
    );
}
