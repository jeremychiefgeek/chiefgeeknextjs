/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans':['Helvetica']
    },
    colors: {
      orange: {
        500: '#FF3E29'
      },
      blue: {
        900: '#00193B'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};