# config/routes.rb
Rails.application.routes.draw do
  resources :items
  resources :sessions
  resources :users
  resources :bands
  resources :orderables
  resources :carts
  get "/me", to: "users#show"
  post "login", to: "sessions#create"
  get 'cart', to: 'cart#show'
  post 'cart/add'
  post 'cart/remove'
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"



  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end