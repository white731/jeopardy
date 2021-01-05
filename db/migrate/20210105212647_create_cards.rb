class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :question
      t.string :answer1
      t.string :answer2
      t.string :answer3
      t.string :answer4
      t.string :correct_answer
      t.integer :points
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
