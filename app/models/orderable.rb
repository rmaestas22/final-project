class Orderable < ApplicationRecord
  belongs_to :item
  belongs_to :cart

  def total
    product.price * quantity
  end
end
