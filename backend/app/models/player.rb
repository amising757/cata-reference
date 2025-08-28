class Player < ApplicationRecord
  has_many :statistics, dependent: :destroy
  has_many :comments, dependent: :destroy
  
  validates :name, presence: true
  validates :position, presence: true
  validates :team, presence: true
  validates :jersey_number, uniqueness: true, allow_nil: true
  validates :jersey_number, numericality: { greater_than: 0, less_than: 1000 }, allow_nil: true
  
  scope :search_by_name, ->(query) { where("name LIKE ?", "%#{query}%") if query.present? }
end
