# frozen_string_literal: true

class Pages::PostsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def show
    post = Post.find(params[:id])
    @title = "Post | #{post.title.truncate(10)}"

    @post = post.as_json(include: :user)

    render 'pages/posts/show', layout: 'application'
  end

  def record_not_found
    render file: "#{Rails.root}/public/404.html", status: 404
  end
end
