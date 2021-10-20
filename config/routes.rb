# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users,  path: 'auth',
                      controllers: {
                        registrations: 'auth/registrations',
                        sessions: 'auth/sessions'
                      },
                      path_names: {
                        sign_in: :login,
                        sign_up: :register,
                        sign_out: :logout
                      }

  ## API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :posts, only: %i[index show create update destroy]
    end
  end

  root 'pages/index#index'

  ## Pages
  scope :pages do
    resources :posts, only: %i[show]
  end

  get :register, to: redirect('/auth/register')
  get :login, to: redirect('/auth/login')
  get :logout, to: redirect('/auth/logout')
end
