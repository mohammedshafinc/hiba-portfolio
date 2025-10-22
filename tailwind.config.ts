import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Merriweather', 'Georgia', 'serif'],
        'sans': ['Inter', 'Lato', 'Helvetica Neue', 'Arial', 'system-ui', 'sans-serif'],
      },
      colors: {
        'hero-bg': '#f6f5f4',
        'text-primary': '#111111',
        'text-secondary': '#666666',
        'accent': '#2b7cff',
        'accent-warm': '#a55b4f',
      },
      maxWidth: {
        'container': '1100px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
export default config;

