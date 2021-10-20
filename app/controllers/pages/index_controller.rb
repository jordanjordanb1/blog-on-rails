# frozen_string_literal: true

class Pages::IndexController < ApplicationController
  def index
    @posts = Post.all.order('created_at DESC').as_json(include: :user)
    @title = 'Home'

    render 'pages/index'
  end
end
