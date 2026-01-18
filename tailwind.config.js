/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050507",
                surface: "rgba(255, 255, 255, 0.05)",
                border: "rgba(255, 255, 255, 0.1)",
                primary: "#646cff",
                secondary: "#a855f7",
                accent: "#22d3ee",
                "text-primary": "#ffffff",
                "text-muted": "#cbd5e1",
                "text-dim": "#64748b",
            },
            fontFamily: {
                sans: ['var(--font-outfit)', 'sans-serif'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "glass": "linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
                "primary-gradient": "linear-gradient(90deg, #646cff, #a855f7)",
            },
        },
    },
    plugins: [],
};
