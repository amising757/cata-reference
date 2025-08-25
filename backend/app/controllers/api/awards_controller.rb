class Api::AwardsController < ApplicationController
  def index
    @awards = Award.all
    render json: @awards.map { |award| { id: award.id, name: award.name, color: award.color } }
  end
end
