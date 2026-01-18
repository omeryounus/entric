import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata = {
    title: "Insights | Entric",
    description: "Deep dives into agentic AI, synthetic workforce architecture, and enterprise automation strategy.",
};

const posts = [
    {
        slug: "what-is-agentic-ai",
        title: "What is Agentic AI? Beyond Simple Chatbots",
        excerpt: "Why the future of enterprise automation belongs to autonomous agents that plan, reason, and execute complex workflows without human intervention.",
        date: "Jan 12, 2026",
        author: "Entric Research",
        category: "Strategy"
    },
    {
        slug: "rag-vs-finetuning",
        title: "RAG vs Fine-Tuning: Which is Right for Your Data?",
        excerpt: "A technical comparison for CTOs. When to inject knowledge via retrieval and when to bake it into the model weights.",
        date: "Jan 08, 2026",
        author: "Engineering Team",
        category: "Technical"
    },
    {
        slug: "synthetic-workforce-governance",
        title: "Governing the Synthetic Workforce",
        excerpt: "As AI agents gain autonomy, how do we ensure compliance? Exploring frameworks for reliable, audit-proof agent deployment.",
        date: "Dec 15, 2025",
        author: "Entric Research",
        category: "Governance"
    }
];

export default function Blog() {
    return (
        <div className="pt-32 pb-24 px-6 container mx-auto max-w-7xl">
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Entric <span className="text-gradient">Insights</span></h1>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">Architecture notes from the edge of autonomous enterprise.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                        <div className="glass-card p-8 rounded-2xl h-full flex flex-col hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-primary/30">
                            <div className="mb-6 flex items-center justify-between text-sm text-text-dim">
                                <span className="px-3 py-1 rounded-full bg-surface border border-border text-primary">{post.category}</span>
                                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                            </div>

                            <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
                            <p className="text-text-muted mb-8 flex-grow leading-relaxed">{post.excerpt}</p>

                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                <span className="text-sm text-text-dim flex items-center gap-2"><User size={14} /> {post.author}</span>
                                <span className="text-accent flex items-center gap-2 text-sm font-medium group-hover:translate-x-1 transition-transform">
                                    Read Analysis <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
