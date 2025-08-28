class CreateComments < ActiveRecord::Migration[8.0]
  def change
    create_table :comments do |t|
      t.references :player, null: false, foreign_key: true
      t.string :author_name
      t.text :content

      t.timestamps
    end
  end
end
