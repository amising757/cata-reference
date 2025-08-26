class PlayersController < ApplicationController
  before_action :set_player, only: [:show]

  def index
    @players = Player.includes(:statistics).all
    @teams = Player.distinct.pluck(:team).compact
    @positions = Player.distinct.pluck(:position).compact
    
    # Apply filters if provided
    @players = @players.where(team: params[:team]) if params[:team].present? && params[:team] != 'All'
    @players = @players.where(position: params[:position]) if params[:position].present? && params[:position] != 'All'
  end

  def show
    # Player details are loaded via @player from before_action
  end

  def search
    query = params[:q]
    @players = Player.search_by_name(query).includes(:statistics)
    
    respond_to do |format|
      format.json { render json: @players.map { |player| player_summary(player) } }
      format.html { render :index }
    end
  end

  private

  def set_player
    @player = Player.includes(:statistics).find(params[:id])
  rescue ActiveRecord::RecordNotFound
    redirect_to players_path, alert: 'Player not found'
  end

  def player_summary(player)
    {
      id: player.id,
      name: player.name,
      position: player.position,
      team: player.team,
      photo_url: player.photo_url,
      awards: player.awards
    }
  end
end