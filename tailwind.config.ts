import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#000000",
        },
        foreground: {
          DEFAULT: "#ededed",
          muted: "#888888",
        },
        secondary: {
          DEFAULT: "#0a0a0a",
        },
        border: {
          DEFAULT: "#2c2d2c",
        },
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};

export default config;
