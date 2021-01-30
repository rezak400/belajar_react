module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        primary: ['Poppins'],
        secondary: ["Raleway"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
