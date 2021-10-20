# frozen_string_literal: true

class Api::V1::PostsController < ApplicationController
  respond_to :json

  before_action :set_post, only: %i[show update destroy]
  before_action :authenticate_user!, only: %i[create update destroy]
  before_action :check_post_owner, only: %i[update destroy]

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

    @post = current_user.posts.create(title: title, body: body)

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

  # Makes sure post is owned by current user
  def check_post_owner
    json_response({ error: 'Not authorized' }, :unauthorized) unless @post.user_id == current_user.id
  end
end
