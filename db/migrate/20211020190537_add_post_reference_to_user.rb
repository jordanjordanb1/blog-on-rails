class AddPostReferenceToUser < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :post, foreign_key: true, index: true
  end
end
