/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: "Oswald, serif",
        eurosile: "Eurostile, serif",
      },
      
    },
    
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
