/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./app.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        monospace: "Roboto Mono, sans-serif",
        inter: "Inter, sans-serif",
        raleway: "Raleway, sans-serif"
      },
      screens: {
        xs: '320px'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
