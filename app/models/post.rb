# frozen_string_literal: true

class Post < ApplicationRecord
  validates :title, presence: true, length: {
    minimum: 5,
    maxiumum: 30,
    too_short: 'Post title must be a minimum of 5 characters long',
    too_long: 'Post title must be a maximum of 30 characters long'
  }, uniqueness: {
    message: 'Post title already exists'
  }
  validates :body, presence: true, length: {
    minimum: 50,
    maxiumum: 2000,
    too_short: 'Post body must be a minimum of 50 characters long',
    too_long: 'Post body must be a maximum of 2000 characters long'
  }
end
