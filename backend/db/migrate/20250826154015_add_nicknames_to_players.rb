class AddNicknamesToPlayers < ActiveRecord::Migration[8.0]
  def change
    add_column :players, :nicknames, :text
  end
end
