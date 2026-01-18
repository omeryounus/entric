import { Cpu, Zap, Shield, Globe, Database, Lock } from "lucide-react";

export const metadata = {
    title: "Neural Architecture",
    description: "Modular intelligence designed for the enterprise stack. Cognitive automation, knowledge retrieval, and swarm orchestration.",
};

export default function Architecture() {
    const services = [
        {
            icon: <Cpu size={32} />,
            title: "Cognitive Automation",
            desc: "Probabilistic agents that adapt to schema shifts and unstructured data, ensuring 99.9% uptime for mission-critical pipelines.",
            bg: "from-primary/20"
        },
        {
            icon: <Zap size={32} />,
            title: "Knowledge Retrieval",
            desc: "Synthesize fragmented institutional knowledge (PDFs, SQL, Slack) into instant executive-level insights via neural retrieval.",
            bg: "from-accent/20"
        },
        {
            icon: <Shield size={32} />,
            title: "Swarm Orchestration",
            desc: "Deploy specialized agent swarms that collaborate, critique, and execute complex workflows faster than humanly possible.",
            bg: "from-secondary/20"
        },
        {
            icon: <Globe size={32} />,
            title: "Web Intelligence",
            desc: "Autonomous scrapers and monitors that track your market, competitors, or internal metrics 24/7.",
            bg: "from-blue-500/20"
        },
        {
            icon: <Database size={32} />,
            title: "Data Logistics",
            desc: "Automated ETL processes that clean, sort, and deliver high-quality training data to your decision engines.",
            bg: "from-purple-500/20"
        },
        {
            icon: <Lock size={32} />,
            title: "Sovereign Deployment",
            desc: "On-premise deployment of open-source models (Llama 3, Mistral) for maximum privacy and zero data leakage.",
            bg: "from-green-500/20"
        }
    ];

    return (
        <div className="pt-32 pb-24 px-6 container mx-auto max-w-7xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Neural <span className="text-gradient">Architecture</span></h1>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">Modular intelligence designed for the enterprise stack.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((s, i) => (
                    <div key={i} className={`glass-card p-8 rounded-2xl hover:bg-gradient-to-br ${s.bg} to-transparent transition-all duration-300 group`}>
                        <div className="mb-6 p-4 rounded-xl bg-surface w-fit border border-border group-hover:scale-110 transition-transform">{s.icon}</div>
                        <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                        <p className="text-text-muted leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
