class CreatePlayers < ActiveRecord::Migration[8.0]
  def change
    create_table :players do |t|
      t.string :name
      t.string :position
      t.string :team
      t.string :photo_url

      t.timestamps
    end
  end
end
