class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
    	
    	t.column :first_name, :string
    	t.column :last_name, :string 
    	t.column :description, :text
      t.timestamps
    end
  end
  def self.down
    drop_table :users
  end
end
