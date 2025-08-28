class Comment < ApplicationRecord
  belongs_to :player
  
  validates :author_name, presence: true, length: { maximum: 100 }
  validates :content, presence: true, length: { maximum: 1000 }
  
  scope :recent, -> { order(created_at: :desc) }
end
