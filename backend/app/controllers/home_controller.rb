class HomeController < ApplicationController
  def index
    # Get all players for directory and featured players for stats
    @players = Player.includes(:statistics).order(:name)
    @featured_players = @players.limit(8)
  end
end
