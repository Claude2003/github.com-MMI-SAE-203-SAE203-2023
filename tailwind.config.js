/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
    rouge: "#ff2d5f",
    "gris foncé": "#414968",
    "gris clair": "#575165",
    blanc: "#ffffff",
    lightblue: "#ebedff"
   },
   fontSize: {
    sm: "0.75rem",
    base: "0.875rem",
    lg: "1.125rem",
    "xl": "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    "4xl": "2.25rem",
    "5xl": "2.5rem"
   },
   fontFamily: {
    "catamaran": "Catamaran",
    "source-sans-pro": "Source Sans Pro",
    "indie-flower": "Indie Flower"
   },
    extend: {}
  },
  plugins: []
}
