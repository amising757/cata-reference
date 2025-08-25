class PlayerAward < ApplicationRecord
  belongs_to :player
  belongs_to :award
  
  validates :season, presence: true
  validates :player_id, uniqueness: { scope: [:award_id, :season] }
end
