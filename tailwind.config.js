module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Source Sans Pro"', "sans-serif"],
      },
      backgroundImage: {
        "hero-img": "url('/src/img/hero.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
