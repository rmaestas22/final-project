class UsersController < ApplicationController
    skip_before_action :authorize, only: :create


    def create
        user = User.create!(user_params)
        render json: user , status: :ok
    end

    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:name, :password)
    end
end
