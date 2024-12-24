import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hankenGrotesk: ["Hanken Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#008ECC",
        secondary: "#F3F9FB",
        accent: "#666666",
        light: "#F5F5F5",
        line: "#D9D9D9",
      },
    },
  },
  plugins: [],
} satisfies Config;
