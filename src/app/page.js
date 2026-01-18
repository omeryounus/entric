import Hero from "../components/Hero";
import { Cpu, Zap, Shield, CheckCircle } from "lucide-react";

export default function Home() {
    return (
        <>
            <Hero />

            {/* Services Grid */}
            <section className="py-24 px-6 relative">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligence as a Service</h2>
                        <p className="text-text-muted max-w-2xl mx-auto">Modular solutions for the modern stack. We deploy agents that learn and adapt.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={<Cpu size={40} className="text-primary" />}
                            title="Agentic Workflows"
                            desc="Replace repetitive cognitive tasks with intelligent agents that learn and adapt. Perfect for support and research."
                        />
                        <ServiceCard
                            icon={<Zap size={40} className="text-accent" />}
                            title="Robotic Process Automation"
                            desc="Hard-coded bridge scripts for legacy software that lacks APIs. Streamline invoices, HR, and logistics."
                        />
                        <ServiceCard
                            icon={<Shield size={40} className="text-secondary" />}
                            title="Security & Governance"
                            desc="AI that monitors AI. Audit logs, access control, and threat detection built into every deployment."
                        />
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-24 px-6 bg-surface/30">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">How We Work</h2>
                    <div className="space-y-12 relative border-l-2 border-border ml-4 md:ml-12 pl-8 md:pl-16">
                        <TimelineItem
                            step="01"
                            title="Discovery"
                            desc="We analyze your current workflows to identify bottlenecks and automation opportunities."
                        />
                        <TimelineItem
                            step="02"
                            title="Strategy"
                            desc="Our engineers design a custom bespoke architecture tailored to your business needs."
                        />
                        <TimelineItem
                            step="03"
                            title="Implementation"
                            desc="We build and deploy intelligent agents and scripts, ensuring seamless integration."
                        />
                        <TimelineItem
                            step="04"
                            title="Optimization"
                            desc="Continuous monitoring and refinement to ensure maximum efficiency and ROI."
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Client Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <TestimonialCard
                            quote="Entric completely transformed our backend operations. Tasks that took days now take minutes."
                            author="Marcus Chen"
                            role="CTO, FinTech Sol"
                        />
                        <TestimonialCard
                            quote="The AI agents they built handle 80% of our customer queries autonomously. Incredible."
                            author="Sarah Jenkins"
                            role="Director of Ops, Retailio"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

function ServiceCard({ icon, title, desc }) {
    return (
        <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-6 bg-surface w-fit p-4 rounded-xl border border-border">{icon}</div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-text-muted leading-relaxed">{desc}</p>
        </div>
    );
}

function TimelineItem({ step, title, desc }) {
    return (
        <div className="relative">
            <div className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_rgba(100,108,255,0.5)]"></div>
            <h3 className="text-2xl font-bold mb-2 text-white"><span className="text-primary mr-2 text-lg align-middle opacity-80">{step}.</span> {title}</h3>
            <p className="text-text-muted text-lg">{desc}</p>
        </div>
    );
}

function TestimonialCard({ quote, author, role }) {
    return (
        <div className="glass-card p-10 rounded-2xl flex flex-col justify-between h-full bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-lg italic text-text-muted mb-8 leading-relaxed">"{quote}"</p>
            <div>
                <strong className="block text-primary text-lg">{author}</strong>
                <span className="text-sm text-text-dim">{role}</span>
            </div>
        </div>
    );
}
