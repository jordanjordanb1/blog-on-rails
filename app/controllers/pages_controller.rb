# frozen_string_literal: true

class PagesController < ApplicationController
  def index
    @posts = Post.all.order('created_at DESC')
    @title = 'Home'
  end
end
