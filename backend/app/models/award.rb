class Award < ApplicationRecord
  has_many :player_awards, dependent: :destroy
  has_many :players, through: :player_awards
  
  validates :name, presence: true
  validates :color, presence: true
end
