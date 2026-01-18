"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-accent text-sm font-medium mb-6 backdrop-blur-sm">
                        The Future of Autonomous Enterprise
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Automate the <br />
                        <span className="text-gradient">Impossible</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-10">
                        We deploy autonomous AI agents that architect your workflows, securities, and operations. 24/7 reliability. Zero friction.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full bg-primary-gradient text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all flex items-center gap-2"
                        >
                            Start Building <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/about"
                            className="px-8 py-4 rounded-full bg-transparent border border-border text-white font-semibold hover:bg-white/5 transition-all"
                        >
                            View Our Work
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Grid or Particles could go here */}
        </section>
    );
}
