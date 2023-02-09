class ItemsController < ApplicationController
skip_before_action :authorize, only: :create
    wrap_parameters format: []


    def index
        render json: Item.all
    end

    def show
        item = Item.find(params[:id])
        render json: item, status: :ok
    end


end
