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
        "dropdown": "#282828",
        "light":"#a0a0a0",
        "heading":"#cbcbcb",
        "text-primary": "#a688fa",
        "nav-prime": "#3f3f3f"
      },
      maxWidth: {
        '8xl': '96rem',
        '9xl': '104rem'
      },
      transitionDuration: {
        '400': '400ms',
      },
      strokeWidth: {
        '6': '6px',
      }
    },
  },
  plugins: [],
}