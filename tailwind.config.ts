import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "50%": {
            "border-color": "transparent",
          },
        },
        drawLine: {
          "0%": {
            transform: "scaleX(0)",
          },
          "50%": {
            transform: "scaleX(1.05)",
          },
          "100%": {
            transform: "scaleX(1.05)",
          },
        },
        progress: {
          from: { width: "30%" },
          to: { width: "100%" },
        },
        appear: {
          from: { opacity: "0", transform: "translateX(-100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        appearRight: {
          from: { opacity: "0", transform: "translateX(100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      screens: {
        mob: "360px",
      },

      animation: {
        blink: "blink .5s infinite alternate step-end",
        drawLine: "drawLine 2s forwards linear alternate",
        progress: "progress 1s linear forwards",
        appear: "appear 1s linear forwards",
        appearRight: "appearRight 1s linear forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        main: "url('/main.jpg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
