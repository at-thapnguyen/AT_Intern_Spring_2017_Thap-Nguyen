Rails.application.routes.draw do
#   get 'users/index'

#   get 'users/show'
# 	get 'users/edit'  
# 	# resources :users, only: [:index, :show, :create, :update, :destroy]
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
# resources :users, only: [:destroy]
# resources :users,only: [:new]
resources :users

end
