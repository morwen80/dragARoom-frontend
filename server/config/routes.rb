Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :furnitures, only: [:index]
      resources :rooms, only: [:index]
      resources :room_furnitures, only: [:index, :create]
      # resources :furnitures, only: [:index, :create, :update, :destroy]
    end
  end
  # namespace :api do
  #   namespace :v1 do
  #     resources :furnitures, only: [:index, :create, :update, :destroy]
  #   end
  # end
end
