class Api::V1::RoomFurnituresController < ApplicationController


    def index
      @room_furnitures = RoomFurniture.all
      render json: @room_furnitures
    end

    def create
      @room_furniture = RoomFurniture.new(room_furnitures_params)
      @room_furniture.save!
      render json: @room_furniture
    end

    private

    def room_furnitures_params
      params.require(:room_furniture).permit(:room_id, :furniture_id, :furniture_x, :furniture_y)
    end
  end

# t.integer :room_id
# t.integer :furniture_id
# t.integer :furniture_x
# t.integer :furniture_y
