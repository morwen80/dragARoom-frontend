class FurnitureSerializer < ActiveModel::Serializer
  attributes :id, :name, :size, :image

  has_many :room_furnitures
  has_many :rooms
end
