class BandsController < ApplicationController
skip_before_action :authorize, only: :create
    wrap_parameters format: []


    def index
        render json: Band.all
    end

    def show
        band = Band.find(params[:id])
        render json: band, status: :ok
    end


end

