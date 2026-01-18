"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Architecture", href: "/architecture" },
        { name: "Manifesto", href: "/manifesto" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4" : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 relative">
                        <img src="/logo.png" alt="Entric" className="object-contain" />
                    </div>
                    <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent group-hover:opacity-80 transition-opacity">
                        ENTRIC
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-text-primary hover:text-primary font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-5 py-2 rounded-full bg-surface border border-border hover:bg-white/10 transition-all text-sm font-semibold"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border absolute w-full"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
