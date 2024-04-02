/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Bitter", "serif"],
    },
    screens: {
      // @media (max-width: 425px)
      sm: { max: "425px" },
    },
  },
  plugins: [],
};
