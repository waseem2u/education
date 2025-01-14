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
        "success-card": "url('/success/success2.png')",
      },
      boxShadow: {},
      colors: {
        indigo: "#753cbd",
        "natural-grey": " #928F95",
        sky: "#edf5ff",
        "rose-white": "#FEF5FD",
        "Greenish-Teal": "#22CC9B",
        "Dark-Grey": "#35343B",
        Charcoal: "#323232",
        "black-cow": "#464646",
        "pattens-blue": "#e3f2f7",
        "white-contrast": "#faf9fa",
        voilet: "#F1ECF8",
        Gravel: "#49444E",
        "vista-white": "#F8FAFC",
        "purple-heart": "#753CBD",
        Nobel: "#B1AFB3",
        "bright-grey": "#343E4B",
        "languid-lavender": "#D4C3EB",
        "light-grey": "#D9DEE2",
        "light-violet": "#D6BBFB",
        "nile-blue": "#2A254D",
        "off-green": "#E9FAF5",
        "caribbean-green": "#22CC9B",
        "dark-pastel-purple": "#9163CA",
        "ship-grey": "#3D3842",
        "white-rock": "#E7E6E7",
        "blue-grey": "#697585",
        "silver-chalice": "#B1AFB3",
        "soft-peach":"#F1ECF8",

        // background: #BF6DEE1A;
      },
      fontFamily: {
        "space-grotesk": [" Manrope", "Space Grotesk", "sans-serif"],
        "space-gori": ["Betm Rounded", "sans-serif"],
      },
      fontSize: {
        "3.3xl": "32px",
        "2.8xl": "28px",
        "5.6xl": "56px",
      },
      lineHeight: {
        "leading.16xl": "67px",
      },
    },
  },
  plugins: [],
};
