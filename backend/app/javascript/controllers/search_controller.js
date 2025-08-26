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
      <a href="/players/${player.id}" style="display: block; padding: 12px 16px; color: #333; text-decoration: none; border-bottom: 1px solid #eee;">
        <div style="font-weight: bold; color: #333;">${player.name}</div>
        <div style="font-size: 14px; color: #666; margin-top: 2px;">
          ${player.position} • ${player.team}
        </div>
      </a>
    `).join('')

    this.resultsTarget.innerHTML = resultsHtml
    this.showResults()
  }

  showResults() {
    this.resultsTarget.style.display = 'block'
  }

  hideResults() {
    this.resultsTarget.style.display = 'none'
  }

  // Hide results when clicking outside
  disconnect() {
    clearTimeout(this.debounceTimer)
  }
}