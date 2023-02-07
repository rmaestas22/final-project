class ProductsController < ApplicationController
  def index
        render json: Product.all
    end

    def show
        product = Product.find(params[:id])
        render json: product, status: :ok
    end
end
