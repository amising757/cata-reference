class CreateStatistics < ActiveRecord::Migration[8.0]
  def change
    create_table :statistics do |t|
      t.references :player, null: false, foreign_key: true
      t.string :season
      t.decimal :points
      t.decimal :rebounds
      t.decimal :assists

      t.timestamps
    end
  end
end
