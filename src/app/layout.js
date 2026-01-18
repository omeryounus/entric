import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const outfit = Outfit({
    subsets: ["latin"],
    variable: '--font-outfit',
    display: 'swap',
});

export const metadata = {
    title: {
        default: "Entric | Automate the Impossible",
        template: "%s | Entric"
    },
    description: "We engineer autonomous neural infrastructure for the modern enterprise. Deployment of specialized agent swarms, cognitive automation, and sovereign intelligence.",
    openGraph: {
        title: "Entric | Automate the Impossible",
        description: "We engineer autonomous neural infrastructure for the modern enterprise.",
        url: "https://entric.xyz",
        siteName: "Entric",
        images: [
            {
                url: "/images/hero.png",
                width: 1200,
                height: 630,
                alt: "Entric Neural Infrastructure",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Entric | Automate the Impossible",
        description: "We engineer autonomous neural infrastructure for the modern enterprise.",
        images: ["/images/hero.png"],
    },
    metadataBase: new URL("https://entric.xyz"),
    icons: {
        icon: "data:image/png;base64,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"
    },
};

export default function RootLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Entric",
        "url": "https://entric.xyz",
        "logo": "https://entric.xyz/logo.png",
        "description": "Autonomous AI agents and intelligent infrastructure for the modern enterprise.",
        "sameAs": [
            "https://twitter.com/entric_xyz",
            "https://linkedin.com/company/entric"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "hello@entric.xyz"
        }
    };

    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${outfit.className} bg-background text-text-primary antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
