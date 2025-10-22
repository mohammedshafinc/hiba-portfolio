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
        'serif': ['Playfair Display', 'Cormorant Garamond', 'Lora', 'Georgia', 'serif'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        'cream': {
          50: '#fdfcfb',
          100: '#fafaf8',
          200: '#f5f4f1',
          300: '#efeee9',
          400: '#e8e6df',
          500: '#ddd9cf',
        },
        'sand': {
          100: '#f8f6f3',
          200: '#ebe7e0',
          300: '#d4c5b3',
          400: '#b8a992',
          500: '#9d8c74',
          600: '#8b7355',
          700: '#6d5a44',
        },
        'ink': {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#717171',
          500: '#4a4a4a',
          600: '#2c2c2c',
          700: '#1a1a1a',
          800: '#0f0f0f',
        },
        'elegant-gold': '#b8a992',
        'warm-gray': '#8b7355',
      },
      maxWidth: {
        'container': '1200px',
        'prose': '70ch',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '28': '7rem',
        '32': '8rem',
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'relaxed': '0.02em',
        'wide': '0.05em',
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'elegant-lg': '0 12px 40px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
export default config;

