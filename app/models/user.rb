# frozen_string_literal: true

class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :posts, dependent: :destroy

  validates :name,  presence: true,
                    length: {
                      minimum: 3,
                      maximum: 50
                    }, format: {
                      with: /\A^[a-zA-Z\s]*$\z/
                    }
  validates :email, presence: true,
                    length: {
                      minimum: 3,
                      maximum: 255
                    },
                    format: {
                      with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
                    },
                    uniqueness: true
end
