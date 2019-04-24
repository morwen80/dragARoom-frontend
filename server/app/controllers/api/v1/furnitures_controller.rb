class Api::V1::FurnituresController < ApplicationController

  def index
    @furnitures = Furniture.all
    render json: @furnitures
  end

  def create
    @furniture = Furniture.new(furniture_params)
    @furniture.save!
    render json: @furniture
  end

  def show
    @furniture = Furniture.find(params[:id])
    render json: @furniture
  end

  private

  def furniture_params
    params.require(:furniture).permit(:name, :size, :image)
  end

end
