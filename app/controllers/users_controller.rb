class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
      users = User.all
      render json: users, status: :ok
    end


    def create
        user = User.create!(user_params)
    end

    def show
        render json: current_user
    end

    private

    def user_params
        params.permit(:name, :password)
    end
end
