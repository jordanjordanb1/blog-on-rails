# frozen_string_literal: true

class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.all.order(created_at: :asc)
    json_response(@posts)
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    if @post
      json_response(@post)
    else
      json_response(@post.errors)
    end
  end

  # POST /posts
  # POST /posts.json
  def create
    title = params[:title]
    body = params[:body]

    @post = Post.create!({ title: title, body: body })

    if @post.save!
      json_response(@post)
    else
      json_response(@post.errors)
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    title = params[:title]
    body = params[:body]

    @post.update!(title: title, body: body)

    if @post.save!
      json_response(@post)
    else
      json_response(@post.errors)
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy

    json_response(@post)
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def post_params
    params.permit(:title, :body)
  end
end
