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
      keyframes: {
        "infinite-scroll": {
          "0%": {
            transform: "translateX(0)"
          },
          "100%": {
            transform: "translateX(calc(-33.333% - 1rem))"
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
