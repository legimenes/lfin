/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Pages/**/*.cshtml',
    './node_modules/flowbite/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
