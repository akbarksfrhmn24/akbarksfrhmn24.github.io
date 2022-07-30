/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#4338ca',
        secondary:  '#475569',
        dark: '#1e293b',
      },
      screens: {
        '2xl': '1536px'
      }
    },
  },
  plugins: [],
}
