class Pages::SigninController < ApplicationController
  def index
    # Check if the user is already signed in, if so redirect
    redirect_to root_path if user_signed_in?

    @title = 'Signin'

    render 'pages/signin/view'
  end
end
