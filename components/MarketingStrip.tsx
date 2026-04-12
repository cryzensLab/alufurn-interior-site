import Link from "next/link";
/**
 * MarketingStrip Component
 * 
 * A high-visibility banner section featuring a tricolor brand gradient 
 * and a direct call-to-action for facility visits.
 */
export default function MarketingStrip() {
    return (
        <section className="py-6 bg-gradient-to-b from-[#FF9933] via-white to-brand-primary relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Banner Text */}
                <h2 className="text-lg md:text-xl font-bold text-brand-primary uppercase tracking-widest text-center md:text-left">
                    Experience Our Manufacturing Facility — <span className="text-brand-primary/70">Schedule Your Visit</span>
                </h2>
                {/* CTA Link */}
                <Link
                    href="/contact"
                    className="px-8 py-3 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold transition-all duration-300 shadow-lg whitespace-nowrap"
                >
                    Contact Now
                </Link>

            </div>
        </section>
    );
}