module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        morado: "#651977",
        clarito: "#9c3cb3"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
