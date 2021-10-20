# frozen_string_literal: true

class Pages::SignupController < ApplicationController
  def index
    # Check if the user is already signed in, if so redirect
    redirect_to root_path if user_signed_in?

    @title = 'Signup'

    render 'pages/signup/view'
  end
end
