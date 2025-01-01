/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {},
      backgroundImage: {
        "button-gradiant":
          "linear-gradient(90deg, rgba(227, 136, 211, 0.25) 0%, rgba(144, 130, 213, 0.25) 52%, rgba(255, 255, 255, 0.25) 100%)",

        "header-bg": "url('/header/star.svg')",
        card2: "url('/engaje/shape.svg')",
        card3: "url('/engaje/card3.svg')",
      },
      boxShadow: {},
      colors: {
        indigo: "#753cbd",
        "natural-grey": " #928F95",
        sky: "#edf5ff",
        "Rose-White": "##FEF5FD",

        // background: #BF6DEE1A;
      },
      fontFamily: {
        "space-grotesk": [" Manrope", "Space Grotesk", "sans-serif"],
        "space-gori": ["Betm Rounded", "sans-serif"],
      },
      fontSize: {
        "3.3xl": "32px",
        "2.8xl": "28px",
      },
    },
  },
  plugins: [],
};
