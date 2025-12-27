const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.tsx",
    "content/**/*.mdx",
  ],

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-calsans)"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
      },

      // === SPEED UP ANIMATIONS HERE ===
      animation: {
        // was "fade-in 3s ..."
        "fade-in": "fade-in 0.45s ease-in-out forwards",
        // this is the big "Benjamin Arce" title
        // was "title 3s ..."
        title: "title 0.8s ease-out forwards",
        // was 3s each
        "fade-left": "fade-left 0.45s ease-in-out forwards",
        "fade-right": "fade-right 0.45s ease-in-out forwards",
      },

      keyframes: {
        // keep it simple: fade in quickly and stay visible
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "40%": {
            opacity: "1",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "40%": {
            transform: "translateX(0%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: "1",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "40%": {
            transform: "translateX(0%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: "1",
          },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "30%": {
            "line-height": "0%",
            opacity: "0",
          },
          "80%": {
            "line-height": "100%",
            opacity: "1",
          },
          "100%": {
            "line-height": "100%",
            opacity: "1",
          },
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
  ],
};
