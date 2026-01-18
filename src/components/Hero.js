"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image & Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background/80 z-10" /> {/* Overlay for readability */}
                <img src="/images/hero.png" alt="Neural Network Background" className="w-full h-full object-cover opacity-60" />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] z-0" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-accent text-sm font-medium mb-6 backdrop-blur-sm">
                        Architecting the Synthetic Workforce
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Automate the <br />
                        <span className="text-gradient">Impossible</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                        We do not build chatbots. We engineer autonomous <span className="text-white">neural infrastructure</span> that dismantles operational complexity.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full bg-primary-gradient text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all flex items-center gap-2"
                        >
                            Initialize Transformation <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/architecture"
                            className="px-8 py-4 rounded-full bg-transparent border border-border text-white font-semibold hover:bg-white/5 transition-all"
                        >
                            View Architecture
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Grid or Particles could go here */}
        </section>
    );
}
