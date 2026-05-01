"use client";

import { useState, createContext, useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const QuoteModal = dynamic(() => import("@/components/QuoteModal"), { ssr: false });

interface QuoteContextType {
    openQuote: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const useQuote = () => {
    const context = useContext(QuoteContext);
    if (!context) throw new Error("useQuote must be used within a QuoteProvider");
    return context;
};

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const openQuote = () => setIsQuoteOpen(true);
    const closeQuote = () => setIsQuoteOpen(false);

    const shouldRenderQuote = !isMobile || isQuoteOpen;

    return (
        <QuoteContext.Provider value={{ openQuote }}>
            <div className="min-h-screen flex flex-col">
                <Navbar onOpenQuote={openQuote} />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
                <FloatingActions />
                {shouldRenderQuote && <QuoteModal isOpen={isQuoteOpen} onClose={closeQuote} />}
            </div>
        </QuoteContext.Provider>
    );
}
