import Hero from "../components/Hero";
import UseCases from "../components/UseCases";
import FAQ from "../components/FAQ";
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
                            title="Cognitive Process Automation"
                            desc="Deterministic automation breaks. Our probabilistic agents adapt to schema shifts and unstructured data, ensuring 99.9% uptime."
                        />
                        <ServiceCard
                            icon={<Zap size={40} className="text-accent" />}
                            title="Enterprise Knowledge Retrieval"
                            desc="Synthesize fragmented institutional knowledge (PDFs, SQL, Slack) into instant executive-level insights via neural retrieval."
                        />
                        <ServiceCard
                            icon={<Shield size={40} className="text-secondary" />}
                            title="Multi-Agent Orchestration"
                            desc="Deploy specialized agent swarms that collaborate, critique, and execute complex workflows faster than humanly possible."
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
                            title="System Audit"
                            desc="We map your entire digital topology to identify operational bottlenecks and legacy debt. No guessing."
                        />
                        <TimelineItem
                            step="02"
                            title="Neural Design"
                            desc="We blueprint custom agentic workflows tailored to your security compliance and latency requirements."
                        />
                        <TimelineItem
                            step="03"
                            title="Synaptic Deployment"
                            desc="Seamless integration directly into your stack (AWS, Azure, On-Prem). No rip-and-replace."
                        />
                        <TimelineItem
                            step="04"
                            title="Autonomous Handover"
                            desc="We deliver self-optimizing systems. You own the code, the weights, and the future."
                        />
                    </div>
                </div>
            </section>

            <UseCases />

            {/* Testimonials */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Client Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <TestimonialCard
                            quote="Entric didn't just automate our support; they re-architected our entire intake logic. We reduced ticket resolution latency by 40% in Week 1."
                            author="Marcus Chen"
                            role="Director of Operations, FinTech"
                        />
                        <TestimonialCard
                            quote="We were drowning in unstructured legal data. Entric’s retrieval system now parses 500+ contracts in seconds. It’s not a tool; it’s a superpower."
                            author="Sarah Jenkins"
                            role="General Counsel, Enterprise Logistics"
                        />
                    </div>
                </div>
            </section>

            <FAQ />
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
