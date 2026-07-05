import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#05050c",
      },
      backgroundImage: {
        "aurora":
          "radial-gradient(60% 60% at 20% 20%, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0) 60%), radial-gradient(50% 50% at 80% 10%, rgba(168,85,247,0.30) 0%, rgba(168,85,247,0) 60%), radial-gradient(60% 60% at 50% 100%, rgba(34,211,238,0.25) 0%, rgba(34,211,238,0) 60%)",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
