/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat Alternates", "sans-serif"],
      },
      fontSize: {
        'xl': '36pt',
        '7xl': '127pt',
      },
      colors: {
        darkBlue: "#06122D",
        primaryBlue: "#3D7BFA",
        accentBlue: "#0FD0FC",
      },
    },
  },
  plugins: [],
}

