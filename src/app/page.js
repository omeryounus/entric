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

            {/* Process Section - Architecting the Synthetic Workforce */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Architecting the <span className="text-gradient">Synthetic Workforce</span></h2>
                        <p className="text-text-muted max-w-2xl mx-auto text-lg">We don't just deploy software. We engineer the neural fabric of your enterprise.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0" />

                        {[
                            { step: "01", title: "System Audit", desc: "Topological mapping of your operational bottlenecks." },
                            { step: "02", title: "Neural Design", desc: "Blueprint of custom agentic workflows and governance protocols." },
                            { step: "03", title: "Synaptic Deployment", desc: "Seamless integration directly into your secure VPC or on-prem stack." },
                            { step: "04", title: "Autonomous Handover", desc: "Transfer of weights, keys, and control. You own the intelligence." }
                        ].map((item, index) => (
                            <div key={index} className="relative z-10 group">
                                <div className="w-24 h-24 mx-auto bg-background border border-border rounded-full flex items-center justify-center mb-8 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500">
                                    <span className="text-2xl font-mono text-primary">{item.step}</span>
                                </div>
                                <div className="text-center p-6 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/5 transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <UseCases />

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


