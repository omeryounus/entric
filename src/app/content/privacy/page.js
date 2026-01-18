import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | Iman Flow",
    description: "Privacy Policy for the Iman Flow mobile application.",
};

export default function PrivacyPolicy() {
    return (
        <div className="pt-32 pb-24 px-6 container mx-auto max-w-4xl">
            <Link href="/" className="inline-flex items-center gap-2 text-text-muted hover:text-primary mb-12 transition-colors">
                <ArrowLeft size={20} /> Back to Home
            </Link>

            <article className="prose prose-invert prose-lg max-w-none bg-surface/30 p-8 md:p-12 rounded-2xl border border-white/5 backdrop-blur-sm">
                <h1>Privacy Policy for Iman Flow</h1>
                <p className="text-text-muted">Last updated: January 17, 2026</p>

                <p>
                    Iman Flow ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how our mobile application (the "App") collects, uses, and safeguards your information.
                </p>

                <h2>1. Information We Collect</h2>

                <h3>A. Location Data</h3>
                <p>We access your precise location data (GPS) only to calculate accurate prayer times and determine the Qibla direction for your specific area.</p>
                <ul>
                    <li><strong>Purpose:</strong> To provide the core functionality of the App (Prayer Times & Qibla Compass).</li>
                    <li><strong>Storage:</strong> This data is processed locally on your device or transiently by our servers to fetch calculation parameters. It is not stored permanently on our servers or tracked over time.</li>
                </ul>

                <h3>B. Personal Information</h3>
                <p>If you choose to create a user profile, we may collect:</p>
                <ul>
                    <li><strong>Email Address:</strong> For authentication and account recovery via Firebase Authentication.</li>
                    <li><strong>Name / Display Name:</strong> To personalize your experience in the community features.</li>
                    <li><strong>Profile Picture:</strong> If you choose to upload one.</li>
                </ul>

                <h3>C. Usage Data & Analytics</h3>
                <p>We may collect non-personal usage data to improve app performance and stability, including:</p>
                <ul>
                    <li>Device type and operating system.</li>
                    <li>Crash logs and performance metrics (via Firebase Crashlytics).</li>
                    <li>App interaction data (screens visited, features used).</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul>
                    <li><strong>To Provide Services:</strong> Calculating prayer times, showing Qibla direction, and enabling Quran reading.</li>
                    <li><strong>To Improve the App:</strong> Identifying bugs, crashes, and performance issues.</li>
                    <li><strong>To Manage Accounts:</strong> creating and managing your user profile and authentication.</li>
                    <li><strong>To Process Payments:</strong> Facilitating subscriptions and premium feature access via RevenueCat.</li>
                </ul>

                <h2>3. Third-Party Services</h2>
                <p>We use trusted third-party services that may collect information used to identify you. Please refer to their privacy policies:</p>
                <ul>
                    <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
                    <li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase (Analytics, Auth, Crashlytics, Firestore)</a></li>
                    <li><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat (Subscriptions)</a></li>
                </ul>

                <h2>4. Data Retention and Deletion</h2>
                <ul>
                    <li><strong>Retention:</strong> We retain your personal information only as long as necessary to provide you with the App's services and user account features.</li>
                    <li><strong>Deletion:</strong> You may delete your account and associated data directly within the App settings or by contacting us at <a href="mailto:contact@entric.xyz">contact@entric.xyz</a>. Upon deletion request, we will remove your personal data from our active databases.</li>
                </ul>

                <h2>5. Children's Privacy</h2>
                <p>
                    Our App is intended for general audiences, including families. We do not knowingly collect personal identifiable information from children under 13 without parental consent. If we discover that a child under 13 has provided us with personal information, we will immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
                </p>

                <h2>6. Changes to This Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>

                <h2>7. Contact Us</h2>
                <p>
                    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at: <a href="mailto:contact@entric.xyz">contact@entric.xyz</a>
                </p>
                <p>
                    <a href="https://entric.xyz" target="_blank" rel="noopener noreferrer">https://entric.xyz</a>
                </p>
            </article>
        </div>
    );
}
