# frozen_string_literal: true

class Auth::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  layout 'no_react'

  def new
    @title = 'Register'

    super
  end

  def create
    @title = 'Register'

    super
  end
end
