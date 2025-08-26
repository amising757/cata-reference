class DropAwardTables < ActiveRecord::Migration[8.0]
  def change
    remove_foreign_key :player_awards, :players
    remove_foreign_key :player_awards, :awards
    drop_table :player_awards
    drop_table :awards
  end
end
