export const metadata = {
    title: "About | Entric",
};

export default function About() {
    return (
        <div className="pt-32 pb-24 px-6 container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Architects of the <span className="text-gradient">Autonomous</span></h1>

            <div className="space-y-8 text-xl text-text-muted leading-relaxed">
                <p>
                    The world is drowning in busywork. Human potential is wasted on tasks that machines can do better.
                    Entric was founded to break these chains.
                </p>
                <p>
                    We are a collective of engineers, security researchers, and designers dedicated to the next frontier of software.
                    We don't just build websites or dashboards; we build the operating system for the future.
                </p>

                <div className="glass-card p-8 rounded-2xl my-12 border-l-4 border-primary">
                    <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                    <p className="text-white">To liberate 1 billion hours of human creativity through automation.</p>
                </div>

                <p>
                    Unlike generic consultants who offer advice, we build and deploy. We believe that true digital transformation
                    requires sovereign agents—software that lives on your infrastructure, follows your rules, and executes your will.
                </p>
            </div>
        </div>
    );
}
