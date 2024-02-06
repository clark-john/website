/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
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
}
