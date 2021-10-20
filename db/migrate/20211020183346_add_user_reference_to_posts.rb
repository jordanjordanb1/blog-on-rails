class AddUserReferenceToPosts < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :user, foreign_key: true, index: true
  end
end
