# frozen_string_literal: true

class PostsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def show
    @post = Post.find(params[:id])
    @title = "Post | #{@post.title}"

    render 'pages/posts/view'
  end

  def record_not_found
    render file: "#{Rails.root}/public/404.html", status: 404
  end
end
