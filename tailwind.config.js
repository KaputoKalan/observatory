const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Build your palette here
        transparent: 'transparent',
        current: 'currentColor',
        orange: colors.orange,
        emerald: colors.emerald,
        green: colors.green,
        teal: colors.teal,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
