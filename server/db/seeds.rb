# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

Furniture.destroy_all
Room.destroy_all

Furniture.create([
    {name: "chair", size: "small", image: "images/chair.gif"},
    {name: "benchpress", size: "small", image: "images/benchpress.gif"},
    {name: "couch", size: "small", image: "images/couch.gif"},
    {name: "desk-with-lamp", size: "big", image: "images/desk-with-lamp.gif"},
    {name: "desk-with-pc", size: "big", image: "images/desk-with-pc.gif"},
    {name: "door", size: "small", image: "images/door.gif"},
    {name: "double-bed", size: "big", image: "images/doublebed.gif"},
    {name: "grand-piano", size: "big", image: "images/grand-piano.gif"},
    {name: "little-table", size: "small", image: "images/littletable.gif"},
    {name: "nightstand", size: "small", image: "images/nightstand.gif"},
    {name: "nightstand2", size: "small", image: "images/nightstand2.gif"},
    {name: "plant", size: "small", image: "images/plant.gif"},
    {name: "pooltable", size: "big", image: "images/pooltable.gif"},
    {name: "rug", size: "big", image: "images/rug.gif"},
    {name: "single-bed", size: "small", image: "images/single-bed.gif"},
    {name: "sofa", size: "small", image: "images/sofa.gif"},
    {name: "trunk", size: "small", image: "images/trunk.gif"},
    {name: "window-big", size: "big", image: "images/window-big.gif"},
    {name: "window", size: "small", image: "images/window.gif"},
])

# Room.create(name: "living room", img_background: "images/parquet.jpg")
# Room.create(name: "bedroom", img_background: "images/parquet.jpg")
# Room.create(name: "warehouse", img_background: "images/parquet.jpg")

# t.string :name
# t.string :img_background
  #
  # t.string :name
  # t.string :size
  # t.string :image
