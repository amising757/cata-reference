Rails.application.routes.draw do
  # Main application routes
  root "home#index"
  
  resources :players, only: [:index, :show] do
    collection do
      get :search
    end
  end
  
  get "awards" => "pages#awards"
  get "about" => "pages#about"
  
  # Keep API routes for potential future use
  namespace :api do
    resources :players, only: [:index, :show] do
      collection do
        get :search
      end
    end
  end
  
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
end
