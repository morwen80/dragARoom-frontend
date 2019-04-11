class RoomFurnitureSerializer < ActiveModel::Serializer
  attributes :id, :room_id, :furniture_id, :furniture_x, :furniture_y

  belongs_to :room
end
