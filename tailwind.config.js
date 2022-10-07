/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary : '#8b5cf6',
        secondary: '#a78bfa'
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}
