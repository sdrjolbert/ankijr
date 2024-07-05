/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        inmetro: {
          DEFAULT: "#002E5F",
        },
        secondary: {
          light: "#87A2B5",
          footer: "#56B3FA",
          DEFAULT: "#2255AC",
          dark: "#0C2858",
        },
        divider: {
          DEFAULT: "#808080",
        },
      },
    },
    fontFamily: {
      anki: [
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Noto Sans",
        "Liberation Sans",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [],
};
