module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
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
  plugins: []
}