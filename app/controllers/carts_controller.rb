class CartsController < ApplicationController
  def show
    @render_cart = false
  end

  def add
    @product = Product.find_by(:id:params[:id])
    quantity = params[:quantity].to_i
    current_orerable = @cart.orderable.find_by(product_id: @product.id)
    if current_orerable && quantity > 0
      current_orerable.update(quantity:)
    elsif quantity <= 0
      current_orerable.destroy
    else
      @cart.orderable.create(product: @product, quantity:)
    end

  end

  def remove
    Orderable.find_by(:id params[:id]).destroy
  end

end
