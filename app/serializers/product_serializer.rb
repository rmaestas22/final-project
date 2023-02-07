class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :size, :pirce

  belongs_to :user
end
