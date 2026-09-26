import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#0c2866",
          950: "#081944",
        },
        psi: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        // Atlética: Identidade A.A.A.P.U. Guaxas
        // Azul escuro, azul petróleo/ciano, cinza, branco e preto (SEM dourado)
        atletica: {
          dark: "#09121d",
          primary: "#0b1c2e",
          petrol: "#0e7490",
          cyan: "#0284c7",
          accent: "#06b6d4",
          light: "#ecfeff",
          slate: "#334155",
          border: "#164e63",
        },
      },
    },
  },
  plugins: [],
};

export default config;
