/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: 'jit',

  theme: {
    screens: {
    'sm': '640px',

    'md': '768px',

    'lg': '1024px',

    'xl': '1280px',

    '2xl': '1536px',

  },
    extend: {
      colors: {
        thBlue: "#35EEED",
        thOrange: "#F9A23F",
        thPurple: "#ED02FF",
        liGray: "#374151",
        drGray: "#111827",
        thBgBlue: "#3878b9"
      },
      backgroundImage: {
        'hero': "url('./assets/Gradient.jpeg')"
      },
    },
  },
  plugins: [
    require('@kamona/tailwindcss-perspective'),
  ],
});

