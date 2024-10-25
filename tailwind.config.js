/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/sections/**/*.jsx",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ['"Inter"', "sans-serif"],
      },
      colors: {
        primary: "#1A73E8",
        secondary: "#FBBF24",
        background: "#f8fafc",
        darkBackground: "#1E1E1E",
        lightText: "#333333",
        darkText: "#f3f4f6",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
        modal: "0 10px 15px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        xl: "1rem",
      },
      maxWidth: {
        "8xl": "1920px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Plugin for better typography
    require("@tailwindcss/forms"), // Useful for form styling
    require("@tailwindcss/aspect-ratio"), // Aspect ratio plugin for media
  ],
};
