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
        lightgray: "#6e6e6e",
        sand: "#F4F3F1",
        dark: {
          lightgray: "#828282",
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
