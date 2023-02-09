class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
      user = User.find_by(name: params[:name])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user
      else
        render json: { errors: ["Invalid name or password"] }, status: :unauthorized
      end
    end

    def destroy
      if current_user
        session.delete :user_id
        head :no_content
      else
        render json: { errors: ["Invalid name or password"] }, status: :unauthorized
      end
    end

end
