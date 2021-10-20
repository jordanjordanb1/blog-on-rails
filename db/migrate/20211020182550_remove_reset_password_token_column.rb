class RemoveResetPasswordTokenColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :reset_password_token
  end
end
