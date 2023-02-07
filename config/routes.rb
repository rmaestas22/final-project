# config/routes.rb
Rails.application.routes.draw do
  resources :users
  resources :bands
  resources :orderables
  resources :products
  resources :carts
  get 'cart', to 'cart#show'
  post 'cart/add'
  post 'cart/remove'
  root 'products#index'


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end