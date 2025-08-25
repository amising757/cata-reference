class Statistic < ApplicationRecord
  belongs_to :player
  
  validates :season, presence: true
  validates :points, :rebounds, :assists, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :player_id, uniqueness: { scope: :season }
end