/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightgray: "#aaa",
        sand: "#F4F3F1",
        dark: {
          bg: "#121212",
          text: "#E4E4E4",
          gray: "#8A8A8A",
          sand: "#1A1917",
        },
      },
      fontSize: {
        medium: "22px",
      },
      screens: {
        "3xl": "2100px",
      },
      animation: {
        slide: "slide 45s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
