import type { Config } from "tailwindcss";

const config: Config = {
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
          sand: "#1A1917",
        },
      },
      fontSize: {
        medium: "22px",
      },
      screens: {
        "3xl": "2100px",
      },
    },
  },
  plugins: [],
};

export default config;
