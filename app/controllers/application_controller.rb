# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include Response
  include ExceptionHandler

  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :build_props, only: %i[index show]

  private

  def build_props
    @props = {
      user: current_user,
      isLoggedIn: user_signed_in?
    }
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[name password_confirmation])
    devise_parameter_sanitizer.permit(:sign_in, keys: %i[email password])
  end
end
