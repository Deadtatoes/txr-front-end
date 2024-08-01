/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


export default withMT({
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      Quicksand: [ 'Quicksand' ]
    },
    extend: {
      boxShadow: {
        'custom': '2px 4px 10px 1px rgba(201, 201, 201, 0.47)',
      }
    },
  },
  plugins: [],
})

