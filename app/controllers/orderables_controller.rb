class OrderablesController < ApplicationController

  def index
    render json: Orderable.all
  end
    def create
        order = Orderable.create!(orderables_params)
        render json: order , status: :ok
    end

    private

    def orderables_params
        params.permit(:cart_id, :item_id, :quantity)
    end
end
