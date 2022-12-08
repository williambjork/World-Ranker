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
<<<<<<< HEAD
=======
        quicksand: "Quicksand, sans-serif",
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
      },
      
    },
    
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
