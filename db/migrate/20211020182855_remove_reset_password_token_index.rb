class RemoveResetPasswordTokenIndex < ActiveRecord::Migration[6.1]
  def change
    remove_index :users, :reset_password_token
  end
end
