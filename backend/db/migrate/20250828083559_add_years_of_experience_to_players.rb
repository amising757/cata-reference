class AddYearsOfExperienceToPlayers < ActiveRecord::Migration[8.0]
  def change
    add_column :players, :years_of_experience, :string
  end
end
