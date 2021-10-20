# frozen_string_literal: true

class Auth::SessionsController < Devise::SessionsController
  respond_to :json
  layout 'no_react'

  def new
    @title = 'Login'

    super
  end
end
