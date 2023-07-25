/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      inputs: '#f3f2f3',
      buttons: '#22b9ca',
      white: '#fff',
     
    }
  },
  plugins: []
}
