import { Stethoscope, Scale, Truck, Briefcase } from "lucide-react";

const cases = [
    {
        icon: <Stethoscope size={32} />,
        industry: "Healthcare",
        title: "Patient Intake triage",
        stat: "90% Reduction in Admin Time",
        desc: "Autonomous agents parse faxed referrals, extract patient data, and schedule appointments in the EHR without human intervention."
    },
    {
        icon: <Scale size={32} />,
        industry: "Legal",
        title: "Contract Discovery",
        stat: "500+ Hours Saved / Month",
        desc: "Neural retrieval systems instantly scan thousands of case files to find specific precedents and clauses, summarizing them for counsel."
    },
    {
        icon: <Truck size={32} />,
        industry: "Logistics",
        title: "Dynamic Routing",
        stat: "15% Fuel Cost Savings",
        desc: "Real-time agents monitor weather, traffic, and fuel prices to re-route fleets instantaneously, updating drivers via SMS."
    },
    {
        icon: <Briefcase size={32} />,
        industry: "Finance",
        title: "KYC/AML Compliance",
        stat: "Zero False Negatives",
        desc: "Multi-agent swarms cross-reference applicant data against global sanctions lists and news sources to flag risks with high precision."
    }
];

export default function UseCases() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background/90 z-10" />
                <img src="/images/cloud.png" alt="Cloud Architecture" className="w-full h-full object-cover opacity-40" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Deployed <span className="text-gradient">Intelligence</span></h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {cases.map((c, i) => (
                        <div key={i} className="glass-card p-8 rounded-2xl border-l-4 border-transparent hover:border-primary transition-all group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-surface rounded-lg text-primary">{c.icon}</div>
                                <span className="text-xs font-bold tracking-wider uppercase text-text-dim border border-border px-3 py-1 rounded-full">{c.industry}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
                            <p className="text-accent font-mono text-sm mb-4">{c.stat}</p>
                            <p className="text-text-muted leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
