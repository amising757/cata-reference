class CreateAwards < ActiveRecord::Migration[8.0]
  def change
    create_table :awards do |t|
      t.string :name
      t.string :color

      t.timestamps
    end
  end
end
