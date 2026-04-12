"use client";
import { motion } from "framer-motion";
/**
 * AboutUs Component
 * 
 * Showcasing industrial scale and global leadership through high-impact statistics 
 * and detailed brand narrative. Features a subtle carbon-fibre background texture.
 */
export default function AboutUs() {
    const stats = [
        { value: "9M+", label: "CABINETS ANNUALLY" },
        { value: "5", label: "GLOBAL PRODUCTION BASES" },
        { value: "146", label: "COUNTRIES SERVED" },
        { value: "500K+", label: "SQ. FT. SMART FACILITY" }
    ];
    return (
        <section className="py-32 bg-white text-center overflow-hidden relative">
            {/* Background industrial texture or subtle pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            </div>
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-brand-primary text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold"
                >
                    INDUSTRIAL SCALE
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-brand-gold mb-12 tracking-[0.1em] uppercase"
                >
                    GLOBAL LEADERSHIP
                </motion.h2>
                <div className="max-w-5xl mx-auto space-y-10 mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-brand-primary text-xl md:text-2xl leading-relaxed font-medium"
                    >
                        Alufurn is powered by the world's largest cabinetry manufacturing infrastructure.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-brand-primary/60 text-base md:text-lg leading-relaxed font-light"
                    >
                        With an annual output exceeding 9 million cabinets and five advanced production bases,
                        we leverage heavy-duty German engineering and AI-integrated logistics to deliver
                        premium interiors at an unprecedented scale. Our commitment to high-capacity
                        precision ensures that every project, from luxury villas to massive developments,
                        receives the same uncompromising quality.
                    </motion.p>
                </div>
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-brand-light p-12 border border-gray-100 group hover:bg-brand-primary transition-all duration-700 relative overflow-hidden"
                        >
                            <div className="relative z-10 text-center">
                                <span className="text-5xl font-bold text-brand-primary group-hover:text-white mb-4 block transition-colors duration-500">
                                    {stat.value}
                                </span>

                                <div className="w-10 h-1 bg-brand-gold mx-auto mb-4 group-hover:w-full transition-all duration-500" />

                                <span className="text-[10px] font-bold text-brand-primary/40 group-hover:text-white/60 tracking-[0.2em] uppercase transition-colors duration-500">
                                    {stat.label}
                                </span>
                            </div>

                            {/* Background Index Number as Decorative Element */}
                            <div className="absolute -bottom-4 -right-4 text-brand-primary/5 group-hover:text-white/5 text-8xl font-black transition-colors duration-500 select-none">
                                {index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}