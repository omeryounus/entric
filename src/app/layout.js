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
        icon: "/favicon.ico",
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
