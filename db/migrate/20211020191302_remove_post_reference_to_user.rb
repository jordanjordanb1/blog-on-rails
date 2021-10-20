class RemovePostReferenceToUser < ActiveRecord::Migration[6.1]
  def change
    remove_reference :users, :post, foreign_key: true, index: true
  end
end
