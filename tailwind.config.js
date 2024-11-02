/** @type {import('tailwindcss').Config} */
/**@import url('https://fonts.googleapis.com/css2?family=Kumar+One+Outline&family=Rubik:wght@300..900&display=swap');*/

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
        sans: ['"Rubik"', "sans-serif"],
        fancy: ['"Caveat"', "Kumar One Outline"],
      },
      animation: {
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
      colors: {
        primary: "#9333ea",
        secondary: "#1f2937",
        background: "#f8fafc",
        darkBackground: "#1E1E1E",
        lightText: "#333333",
        darkText: "#f3f4f6",
      },
      screens: {
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1366px",
      },
    },
  },
};
