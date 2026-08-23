import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF7EF",
          100: "#F6EFE0",
          200: "#EFE3CC",
          300: "#E4D3B4",
        },
        cocoa: {
          50: "#F7F2EC",
          100: "#E9DFD2",
          200: "#D6C4B0",
          300: "#A98D74",
          400: "#8A6F59",
          500: "#6B5340",
          600: "#4E3B2B",
          700: "#3B2C20",
          800: "#33261B",
          900: "#2B1F16",
          950: "#1E1510",
        },
        moss: {
          50: "#F0F4EC",
          100: "#E2EAD9",
          200: "#C9D9BC",
          300: "#A5BF92",
          400: "#7FA06B",
          500: "#62844F",
          600: "#5C7A57",
          700: "#465E38",
          800: "#3A4D2F",
          900: "#30402A",
        },
        berry: {
          50: "#F9ECEA",
          100: "#F1D8D4",
          200: "#E3B4AE",
          300: "#C97F77",
          400: "#B35A51",
          500: "#9C3B3B",
          600: "#8A3131",
          700: "#6F2727",
          800: "#57201F",
          900: "#431A19",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-nunito)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(43,31,22,0.05), 0 8px 24px -12px rgba(43,31,22,0.18)",
        lift: "0 2px 4px rgba(43,31,22,0.06), 0 18px 44px -16px rgba(43,31,22,0.28)",
      },
      maxWidth: {
        container: "72rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
