class User < ApplicationRecord
  has_many :items
  has_many :carts


  has_secure_password
end
