# frozen_string_literal: true

class Post < ApplicationRecord
  belongs_to :user

  validates :title, presence: true, length: {
    minimum: 5,
    maxiumum: 30
  }, uniqueness: true
  validates :body, presence: true, length: {
    minimum: 50,
    maxiumum: 2000
  }
end
