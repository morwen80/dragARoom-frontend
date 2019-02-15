# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

Furniture.destroy_all
Room.destroy_all

Furniture.create(name: "chair", size: "small", image: "images/chair.gif")
Furniture.create(name: "benchpress", size: "small", image: "images/benchpress.gif")
Furniture.create(name: "couch", size: "small", image: "images/couch.gif")
Furniture.create(name: "desk-with-lamp", size: "big", image: "images/desk-with-lamp.gif")
Furniture.create(name: "desk-with-pc", size: "big", image: "images/desk-with-pc.gif")
Furniture.create(name: "door", size: "small", image: "images/door.gif")
Furniture.create(name: "double-bed", size: "big", image: "images/doublebed.gif")
Furniture.create(name: "grand-piano", size: "big", image: "images/grand-piano.gif")
Furniture.create(name: "little-table", size: "small", image: "images/littletable.gif")
Furniture.create(name: "nightstand", size: "small", image: "images/nightstand.gif")
Furniture.create(name: "nightstand2", size: "small", image: "images/nightstand2.gif")
Furniture.create(name: "plant", size: "small", image: "images/plant.gif")
Furniture.create(name: "pooltable", size: "big", image: "images/pooltable.gif")
Furniture.create(name: "rug", size: "big", image: "images/rug.gif")
Furniture.create(name: "single-bed", size: "small", image: "images/single-bed.gif")
Furniture.create(name: "sofa", size: "small", image: "images/sofa.gif")
Furniture.create(name: "trunk", size: "small", image: "images/trunk.gif")
Furniture.create(name: "window-big", size: "big", image: "images/window-big.gif")
Furniture.create(name: "window", size: "small", image: "images/window.gif")

Room.create(name: "living room", img_background: "images/parquet.jpg")
Room.create(name: "bedroom", img_background: "images/parquet.jpg")
Room.create(name: "warehouse", img_background: "images/parquet.jpg")

# t.string :name
# t.string :img_background
  #
  # t.string :name
  # t.string :size
  # t.string :image
