class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :created_at

  has_one :user
  has_many :items

end
