class CartsController < ApplicationController
  # skip_before_action :authorize,
  wrap_parameters format: []


  # def show
  #   @render_cart = false
  # end

  def index
    render json: Cart.all
  end

    def create
      cart = Cart.create!(cart_params)
      render json: cart, status: :created
    end

    def show
        cart = Cart.find(params[:id])
        render json: cart, status: :ok
    end

    def destroy
        cart = Cart.find(params[:id])
        Review.where(cart_id:cart.id).destroy_all
        cart.destroy
        head :no_content
    end

  # def add
  #   @item = Item.find_by(:id:params[:id])
  #   quantity = params[:quantity].to_i
  #   current_orerable = @cart.orderable.find_by(product_id: @item.id)
  #   if current_orerable && quantity > 0
  #     current_orerable.update(quantity:)
  #   elsif quantity <= 0
  #     current_orerable.destroy
  #   else
  #     @cart.orderable.create(item: @item, quantity:)
  #   end

  # end

  # def remove
  #   Orderable.find_by(:id params[:id]).destroy
  # end

  # def update
  #       cart = Cart.find(params[:id])
  #       cart.update!(cart_params)
  #       render json: cart, status: :accepted
  #   end



    private

    def cart_params
            params.permit(:user_id)
    end

end
