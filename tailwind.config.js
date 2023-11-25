/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.component.{html,ts,css}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
      },
    },
  },
  plugins: [],
}

