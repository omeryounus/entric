"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How is strict deterministic automation different from AI agents?",
        answer: "Deterministic automation (RPA) follows rigid, pre-programmed rules. It breaks if a button moves. Our AI agents are probabilistic—they 'see' the screen and adapt to changes, ensuring resilience."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We offer sovereign deployment options, meaning the models run on your own infrastructure (AWS VPC, Azure, or On-Prem). No data ever leaves your perimeter."
    },
    {
        question: "What is the typical implementation timeline?",
        answer: "Our System Audit takes 1 week. Initial 'Synaptic Deployment' of core agents typically happens within 3-4 weeks, with full autonomous handover by week 8."
    },
    {
        question: "Do you integrate with legacy ERPs?",
        answer: "Yes. Our agents can interface with any software a human can use—SAP, Oracle, Salesforce, or even green-screen mainframes—without needing expensive API integrations."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-24 px-6 container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked <span className="text-gradient">Questions</span></h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-border rounded-xl bg-surface/30 overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                        >
                            <span className="font-semibold text-lg pr-8">{faq.question}</span>
                            {openIndex === index ? <Minus className="text-primary shrink-0" /> : <Plus className="text-text-muted shrink-0" />}
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="p-6 pt-0 text-text-muted leading-relaxed border-t border-border/50">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
