import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "results"]
  static values = { searchUrl: String }

  connect() {
    this.searchUrlValue = "/players/search"
    this.debounceTimer = null
  }

  search() {
    clearTimeout(this.debounceTimer)
    
    const query = this.inputTarget.value.trim()
    
    if (query === '') {
      this.hideResults()
      return
    }

    this.debounceTimer = setTimeout(() => {
      this.performSearch(query)
    }, 300)
  }

  async performSearch(query) {
    try {
      const response = await fetch(`${this.searchUrlValue}?q=${encodeURIComponent(query)}`, {
        headers: {
          'Accept': 'application/json',
        }
      })
      
      const players = await response.json()
      this.displayResults(players)
    } catch (error) {
      console.error('Search error:', error)
      this.hideResults()
    }
  }

  displayResults(players) {
    if (players.length === 0) {
      this.hideResults()
      return
    }

    const resultsHtml = players.map(player => `
      <a href="/players/${player.id}" class="block px-4 py-3 hover:bg-gray-100 border-b border-gray-100 text-black">
        <div class="font-semibold">${player.name}</div>
        <div class="text-sm text-gray-600">
          ${player.position} • ${player.team}
        </div>
      </a>
    `).join('')

    this.resultsTarget.innerHTML = resultsHtml
    this.showResults()
  }

  showResults() {
    this.resultsTarget.classList.remove('hidden')
  }

  hideResults() {
    this.resultsTarget.classList.add('hidden')
  }

  // Hide results when clicking outside
  disconnect() {
    clearTimeout(this.debounceTimer)
  }
};
