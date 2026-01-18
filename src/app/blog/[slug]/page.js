import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost({ params }) {
    return (
        <div className="pt-32 pb-24 px-6 container mx-auto max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-primary mb-12 transition-colors">
                <ArrowLeft size={20} /> Back to Insights
            </Link>

            <article className="prose prose-invert prose-lg max-w-none">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 capitalize">{params.slug.replace(/-/g, ' ')}</h1>

                <div className="flex gap-4 text-text-dim mb-12 border-b border-border pb-8">
                    <span>Jan 12, 2026</span>
                    <span>•</span>
                    <span>Entric Research</span>
                    <span>•</span>
                    <span>10 min read</span>
                </div>

                <div className="glass-card p-8 rounded-xl bg-surface/30 mb-12 border-l-4 border-accent">
                    <p className="text-xl italic text-text-primary m-0">
                        "The transition to agentic workflows is not an upgrade; it is a fundamental architectural shift in how value is created."
                    </p>
                </div>

                <p className="lead text-xl text-text-primary mb-8">
                    This is a placeholder for the article content. In a production environment, this content would be fetched from a CMS (like Contentful, Sanity, or MDX files) based on the slug: <code className="text-accent">{params.slug}</code>.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">The Agentic Shift</h2>
                <p className="mb-6 text-text-muted">
                    Traditional automation (Zapier, RPA) is deterministic. It follows a script: If X, then Y. Agentic AI is probabilistic and autonomous. It is given a goal ("Increase lead velocity") and it figures out the steps, using tools, reasoning, and error correction.
                </p>

                <p className="text-text-muted">
                    Entric specializes in deploying these distinct classes of agents:
                </p>
                <ul className="list-disc pl-6 space-y-4 my-8 text-text-muted">
                    <li><strong>Research Agents:</strong> Scour the web and internal data to synthesize reports.</li>
                    <li><strong>Operational Agents:</strong> Execute transactions, move data, and interact with APIs.</li>
                    <li><strong>Creative Agents:</strong> Generate assets, copy, and code.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-12 mb-6">Why Governance Matters</h2>
                <p className="text-text-muted">
                    With autonomy comes risk. A synthetic workforce requires a new layer of infrastructure: Governance. We implement constitutional AI frameworks ensuring every agent action is logged, verifiable, and aligned with corporate policy.
                </p>
            </article>

            <div className="mt-20 pt-12 border-t border-border text-center">
                <p className="text-2xl font-bold mb-6">Ready to deploy your first agent?</p>
                <Link
                    href="/contact"
                    className="inline-block px-8 py-4 rounded-full bg-primary-gradient text-white font-bold hover:shadow-lg hover:shadow-primary/25 transition-all"
                >
                    Initialize Transformation
                </Link>
            </div>
        </div>
    );
}
