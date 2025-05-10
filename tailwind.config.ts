import type { Config } from "tailwindcss";

const config: Config = {
    content: [
       "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
       "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                md: "1.5rem",
                lg: "1.5rem",
            },
        },
        fontFamily: {
            sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        },
    },
    plugins: [],
};
export default config;