class Player < ApplicationRecord
  has_many :statistics, dependent: :destroy
  
  validates :name, presence: true
  validates :position, presence: true
  validates :team, presence: true
  
  scope :search_by_name, ->(query) { where("name LIKE ?", "%#{query}%") if query.present? }
end
