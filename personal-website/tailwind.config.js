/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "box-shadow-gray": "#707070",
        "border-gray": "#282828",
        "button-color": "#a688fa",
        "primary": "#121212",
        "dropdown-bg": "#282828"
      },
      maxWidth: {
        '8xl': '96rem',
        '9xl': '104rem'
      }
    },
  },
  plugins: [],
}