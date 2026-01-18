"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed to send");

            setStatus("success");
            e.target.reset();
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }

    return (
        <div className="pt-32 pb-24 px-6 container mx-auto max-w-4xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Something <span className="text-gradient">Powerful</span></h1>
                <p className="text-xl text-text-muted">Tell us what you want to automate — we'll respond with a plan.</p>
            </div>

            <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
                {/* Decorative Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-text-dim uppercase tracking-wider">Name</label>
                            <input name="name" required type="text" placeholder="John Doe" className="w-full bg-surface border border-border rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-text-dim uppercase tracking-wider">Email</label>
                            <input name="email" required type="email" placeholder="john@company.com" className="w-full bg-surface border border-border rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-text-dim uppercase tracking-wider">Message</label>
                        <textarea name="message" required rows="5" placeholder="Tell us about your processes..." className="w-full bg-surface border border-border rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === "loading" || status === "success"}
                        className="w-full py-4 rounded-xl bg-primary-gradient text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                        {status === "loading" ? "Sending..." : status === "success" ? "Sent Successfully" : "Send Message"}
                        {status === "success" ? <CheckCircle size={20} /> : <Send size={20} />}
                    </button>

                    {status === "success" && (
                        <p className="text-green-400 text-center mt-4">Message sent! We'll get back to you shortly.</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-400 text-center mt-4 flex items-center justify-center gap-2"><AlertCircle size={18} /> Failed to send message. Please try again.</p>
                    )}
                </form>
            </div>

            <div className="text-center mt-12 text-text-dim">
                <p>Or email us directly: <a href="mailto:contact@entric.xyz" className="text-accent hover:underline">contact@entric.xyz</a></p>
            </div>
        </div>
    );
}
