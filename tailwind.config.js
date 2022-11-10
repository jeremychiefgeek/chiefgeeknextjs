/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'blue-dark': '#00193B',
      'orange-dark':'#FF3E29'
    },
    fontFamily: {
      sans: ['Helvetica Neue']
    },
    extend: {},
  },
  plugins: [],
}
