class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_background

  has_many :room_furnitures
  has_many :furnitures
