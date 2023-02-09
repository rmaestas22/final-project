class User < ApplicationRecord
  has_many :products

  # belongs_to :item

  has_secure_password
end
