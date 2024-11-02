/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4c1d95",
        secondary: "#6b21a8",
        textPrimary: "#5b21b6",
        textSecondary: "#6b21a8",
        accent: "#5b21b6",
      },
    },
  },
  plugins: [],
};
