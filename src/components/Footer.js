import Link from "next/link";
import { Twitter, Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-border mt-20 bg-background/50 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
                <div className="mb-8">
                    <div className="mb-8">
                        <img src="/images/logo.png" alt="Entric" className="h-10 w-auto opacity-80" />
                    </div>
                </div>

                <div className="flex gap-8 mb-8">
                    <SocialLink href="https://x.com" icon={<Twitter size={20} />} />
                    <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
                    <SocialLink href="https://youtube.com" icon={<Youtube size={20} />} />
                    <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
                </div>

                <div className="flex gap-8 mb-8 text-sm text-text-muted">
                    <Link href="/architecture" className="hover:text-primary transition-colors">Architecture</Link>
                    <Link href="/manifesto" className="hover:text-primary transition-colors">Manifesto</Link>
                    <Link href="/blog" className="hover:text-primary transition-colors">Insights</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Initialize</Link>
                </div>

                <p className="text-text-dim text-sm">
                    &copy; {new Date().getFullYear()} Entric. Intelligence deployed.
                </p>
            </div>
        </footer >
    );
}

function SocialLink({ href, icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-white hover:border-primary hover:bg-primary/10 transition-all"
        >
            {icon}
        </a>
    );
}
