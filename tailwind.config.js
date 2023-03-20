const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    ...defaultTheme,
    extend: {
      fontFamily: {
        rubik: ["Rubik Marker Hatch"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
