/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#4338ca',
        secondary:  '#475569',
        third: '#a3b1ee',
        dark: '#1e293b',
      },
      screens: {
        '2xl': '1536px'
      }
    },
  },
  plugins: [],
}
