Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get '/categories/all_cards', to: "categories#all_cards"
    resources :things
    resources :categories do
      resources :cards
    end
  end
  get '*other', to: 'static#index'
end
