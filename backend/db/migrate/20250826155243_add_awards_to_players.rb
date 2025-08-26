class AddAwardsToPlayers < ActiveRecord::Migration[8.0]
  def change
    add_column :players, :awards, :text
  end
end
