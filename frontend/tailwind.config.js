/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#ff6600',
        'orange-dark': '#cc5200',
        'brown-primary': '#8B4513',
        'mvp-gold': '#FFD700',
        'allstar-blue': '#4169E1',
        'champion-green': '#228B22',
      }
    },
  },
  plugins: [],
}