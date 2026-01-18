import { Cpu, Zap, Shield, Globe, Database, Lock } from "lucide-react";

export const metadata = {
    title: "Services | Entric",
};

export default function Services() {
    const services = [
        {
            icon: <Cpu size={32} />,
            title: "Agentic Workflows",
            desc: "Custom LLM-powered agents that autonomously handle complex workflows, from customer support to data analysis.",
            bg: "from-primary/20"
        },
        {
            icon: <Zap size={32} />,
            title: "RPA Integration",
            desc: "Bridge legacy systems with modern automation scripts. Eliminate manual data entry and error-prone copy-pasting.",
            bg: "from-accent/20"
        },
        {
            icon: <Shield size={32} />,
            title: "Security & Governance",
            desc: "Enterprise-grade security policies for AI. We ensure your data never leaves your control without authorization.",
            bg: "from-secondary/20"
        },
        {
            icon: <Globe size={32} />,
            title: "Web Intelligence",
            desc: "Scrapers and monitors that track your market, competitors, or internal metrics 24/7.",
            bg: "from-blue-500/20"
        },
        {
            icon: <Database size={32} />,
            title: "Data Pipelines",
            desc: "Automated ETL processes that clean, sort, and deliver high-quality data to your decision makers.",
            bg: "from-purple-500/20"
        },
        {
            icon: <Lock size={32} />,
            title: "Sovereign AI",
            desc: "On-premise deployment of open-source models (Llama 3, Mistral) for maximum privacy.",
            bg: "from-green-500/20"
        }
    ];

    return (
        <div className="pt-32 pb-24 px-6 container mx-auto max-w-7xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Intelligence as a <span className="text-gradient">Service</span></h1>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">Modular solutions designed for the modern stack.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((s, i) => (
                    <div key={i} className={`glass-card p-8 rounded-2xl hover:bg-gradient-to-br ${s.bg} to-transparent transition-all duration-300 group`}>
                        <div className="mb-6 p-4 rounded-xl bg-surface w-fit border border-border group-hover:scale-110 transition-transform">{s.icon}</div>
                        <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                        <p className="text-text-muted">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
