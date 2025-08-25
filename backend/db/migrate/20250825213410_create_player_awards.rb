class CreatePlayerAwards < ActiveRecord::Migration[8.0]
  def change
    create_table :player_awards do |t|
      t.references :player, null: false, foreign_key: true
      t.references :award, null: false, foreign_key: true
      t.string :season

      t.timestamps
    end
  end
end
