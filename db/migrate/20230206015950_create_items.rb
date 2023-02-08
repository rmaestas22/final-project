class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :image
      t.string :size
      t.decimal :price, precision: 5, scale: 2

      t.timestamps
    end
  end
end
