class Api::V1::RoomsController < ApplicationController

  def index
    @rooms = Room.all
    render json: @rooms
  end

  def show
    @room = Room.find(params[:id])
    render json: @room
  end


  def create
    @room = Room.new(room_params)
    @room.save!
    render json: @room
  end

  private

  def room_params
    params.require(:room).permit(:name, :img_background)
  end
end
