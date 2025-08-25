class Api::PlayersController < ApplicationController
  before_action :set_player, only: [:show]

  def index
    @players = Player.includes(:awards, :statistics).all
    render json: @players.map { |player| player_summary(player) }
  end

  def show
    render json: player_detail(@player)
  end

  def search
    query = params[:q]
    @players = Player.search_by_name(query).includes(:awards, :statistics)
    render json: @players.map { |player| player_summary(player) }
  end

  private

  def set_player
    @player = Player.includes(:awards, :statistics).find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Player not found' }, status: :not_found
  end

  def player_summary(player)
    {
      id: player.id,
      name: player.name,
      position: player.position,
      team: player.team,
      photo_url: player.photo_url,
      awards: player.awards.map { |award| { name: award.name, color: award.color } }
    }
  end

  def player_detail(player)
    {
      id: player.id,
      name: player.name,
      position: player.position,
      team: player.team,
      photo_url: player.photo_url,
      awards: player.player_awards.includes(:award).map do |player_award|
        {
          name: player_award.award.name,
          color: player_award.award.color,
          season: player_award.season
        }
      end,
      statistics: player.statistics.map do |stat|
        {
          season: stat.season,
          points: stat.points,
          rebounds: stat.rebounds,
          assists: stat.assists
        }
      end
    }
  end
end
