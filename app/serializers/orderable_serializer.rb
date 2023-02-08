class OrderableSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :item
  has_one :cart
end
