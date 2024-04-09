import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bunker: {
          DEFAULT: "#61768B",
          50: "#F3F7F8",
          100: "#E0EAED",
          200: "#C5D6DC",
          300: "#9CB8C4",
          400: "#6C92A4",
          500: "#517789",
          600: "#466374",
          700: "#3D5361",
          800: "#384852",
          900: "#323D47",
          950: "#141A1F",
        },
        zircon: {
          DEFAULT: "#636DF1",
          50: "#F1F5FF",
          100: "#E0E9FF",
          200: "#C7D5FE",
          300: "#A5B8FC",
          400: "#8192F8",
          500: "#636DF1",
          600: "#4746E5",
          700: "#3C38CA",
          800: "#3130A3",
          900: "#2E2F81",
          950: "#1C1B4B",
        },
        shark: {
          DEFAULT: "#1C2228",
          50: "#F3F4F6",
          100: "#E2E6EB",
          200: "#C1CAD4",
          300: "#A0AEBC",
          400: "#7F92A5",
          500: "#61768B",
          600: "#4A5A6A",
          700: "#333E49",
          800: "#1C2228",
          900: "#0F1316",
          950: "#090B0D",
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
