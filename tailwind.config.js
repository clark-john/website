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
        // inter: "Inter, sans-serif",
        // raleway: "Raleway, sans-serif",
        sarabun: "Sarabun, sans-serif",
        poppins: "Poppins, sans-serif",
        comfortaa: "Comfortaa, sans-serif"
      },
      screens: {
        xs: '320px'
      },
      colors: {
        yellow: "#FFD60A"
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
