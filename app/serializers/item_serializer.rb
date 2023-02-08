class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :size, :price
end
