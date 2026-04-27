"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Loader2 } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

type ChatStep =
  | "initial"
  | "awaiting_interest"
  | "awaiting_confirmation"
  | "collecting_user_details"
  | "completed";

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<ChatStep>("initial");
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastBotMessageRef = useRef<string | null>(null);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcome = "Hello! I'm AURA, your ALUFURN assistant. How can I help you today with our premium aluminium interiors?";
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: welcome,
          timestamp: new Date(),
        },
      ]);
      lastBotMessageRef.current = welcome;
      setStep("awaiting_interest");
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  /* ── Logic Helpers ── */

  const normalizeInput = (text: string) => text.toLowerCase().trim();

  const isPositive = (text: string) => {
    const keywords = ["yes", "ye", "yeah", "y", "ok", "okay", "sure", "definitely", "yep"];
    return keywords.includes(normalizeInput(text));
  };

  const getNextResponse = useCallback((userText: string, currentStep: ChatStep): { response: string; nextStep: ChatStep } => {
    const normalized = normalizeInput(userText);

    // Step: awaiting_interest
    if (currentStep === "awaiting_interest") {
      return {
        response: `That sounds interesting! We offer premium solutions for ${normalized}. Would you like to schedule a free design consultation to discuss this further?`,
        nextStep: "awaiting_confirmation"
      };
    }

    // Step: awaiting_confirmation
    if (currentStep === "awaiting_confirmation") {
      if (isPositive(userText)) {
        return {
          response: "Great choice! Our experts would love to help. Please share your Name and Phone Number so we can reach out.",
          nextStep: "collecting_user_details"
        };
      }
      return {
        response: "No problem. Is there anything else about our kitchens, wardrobes or doors you'd like to know?",
        nextStep: "awaiting_interest"
      };
    }

    // Step: collecting_user_details
    if (currentStep === "collecting_user_details") {
      return {
        response: "Got it! One of our design consultants will contact you shortly to finalize the details. Have a wonderful day!",
        nextStep: "completed"
      };
    }

    // Default Fallback
    return {
      response: "I'm not quite sure I understood that. Could you please clarify or tell me what part of your home you're looking to upgrade?",
      nextStep: currentStep
    };
  }, []);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessageContent = input.trim();
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userMessageContent,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Process logic
    const { response, nextStep } = getNextResponse(userMessageContent, step);

    // Prevent duplicate responses
    if (response === lastBotMessageRef.current) {
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setStep(nextStep);
      lastBotMessageRef.current = response;
      setIsLoading(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-0 right-0 z-[9999] 
                     w-full md:w-[420px] 
                     md:bottom-5 md:right-5
                     h-[80vh] md:h-[600px] max-h-[85vh]
                     bg-white rounded-t-2xl md:rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.1),0_20px_50px_rgba(0,0,0,0.15)] 
                     border border-brand-border/50 flex flex-col overflow-hidden"
          id="chatbot-window"
        >
          {/* Header */}
          <div className="bg-brand-primary p-4 flex items-center justify-between text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Bot size={22} className="text-brand-gold-light" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight tracking-wide">AURA AI Support</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-white/70 uppercase tracking-widest font-semibold">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close Chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 scroll-smooth"
          >
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm shadow-sm
                    ${msg.role === "user"
                      ? "bg-brand-primary text-white rounded-tr-none"
                      : "bg-white text-gray-800 border border-brand-border/30 rounded-tl-none"
                    }
                  `}
                >
                  {msg.content}
                  <div className={`text-[9px] mt-1.5 opacity-50 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-white border border-brand-border/30 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSendMessage}
            className="p-4 bg-white border-t border-brand-border/30 flex gap-2 items-center shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={step === "completed"}
              className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading || step === "completed"}
              className="w-10 h-10 flex items-center justify-center bg-brand-primary text-white rounded-full hover:bg-brand-primary-deep disabled:opacity-50 disabled:bg-gray-400 transition-all shrink-0 shadow-md active:scale-95"
            >
              <Send size={18} className={isLoading ? "hidden" : "block"} />
              {isLoading && <Loader2 size={18} className="animate-spin" />}
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
