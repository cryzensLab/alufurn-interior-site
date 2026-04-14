"use client";

import { useState, createContext, useContext } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import QuoteModal from "@/components/QuoteModal";

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

    const openQuote = () => setIsQuoteOpen(true);
    const closeQuote = () => setIsQuoteOpen(false);

    return (
        <QuoteContext.Provider value={{ openQuote }}>
            <div className="min-h-screen flex flex-col">
                <Navbar onOpenQuote={openQuote} />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
                <FloatingActions />
                <QuoteModal isOpen={isQuoteOpen} onClose={closeQuote} />
            </div>
        </QuoteContext.Provider>
    );
}
