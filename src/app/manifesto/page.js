export const metadata = {
    title: "Manifesto",
    description: "We are architects of the synthetic workforce. We reject generic chatbots in favor of sovereign, autonomous intelligence.",
};

export default function Manifesto() {
    return (
        <div className="pt-32 pb-24 px-6 container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Architects of the <span className="text-gradient">Synthetic</span></h1>

            <div className="space-y-8 text-xl text-text-muted leading-relaxed">
                <p>
                    The modern enterprise is decaying under the weight of operational friction. Human intellect is squandered on deterministic tasks that machines can execute with zero latency.
                </p>
                <p>
                    Entric exists to dismantle this friction. We are not consultants; we are architects of autonomy. We build the neural infrastructure that will power the next century of commerce.
                </p>

                <div className="glass-card p-8 rounded-2xl my-12 border-l-4 border-primary bg-surface/50">
                    <h2 className="text-2xl font-bold text-white mb-4">The Prime Directive</h2>
                    <p className="text-white">To liberate human cognition from the shackles of repetition through sovereign, autonomous intelligence.</p>
                </div>

                <p>
                    We reject "AI wrappers" and generic chatbots. We believe in <strong>Sovereign Intelligence</strong>—systems that live on your metal, obey your protocols, and evolve with your data.
                </p>
            </div>
        </div>
    );
}
