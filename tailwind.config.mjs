/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
  extend: {
  colors: {
  brand: {
    DEFAULT: "#10B981", // tu verde acento
    50: "#ecfdf5",
    100: "#d1fae5", 
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b"
  },
  },
  fontFamily: {
  sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
  mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
  },
  borderRadius: { "2xl": "1rem" },
  },
  },
  plugins: [],
  };