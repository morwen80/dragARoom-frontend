# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

Furniture.destroy_all
Room.destroy_all

Furniture.create(name: "chair", size: "big", image: "bigboifurniture")
Furniture.create(name: "table", size: "big", image: "bigboifurniture")
Furniture.create(name: "lamp", size: "big", image: "bigboifurniture")
Furniture.create(name: "plant pot", size: "big", image: "bigboifurniture")
Furniture.create(name: "bed", size: "small", image: "bigboifurniture")
Furniture.create(name: "big bed", size: "small", image: "bigboifurniture")
Furniture.create(name: "bigger bed", size: "small", image: "bigboifurniture")
Furniture.create(name: "biggest bed", size: "small", image: "bigboifurniture")

Room.create(name: "living room", img_background: "floor")
Room.create(name: "bedroom", img_background: "floor")
Room.create(name: "warehouse", img_background: "floor")

# t.string :name
# t.string :img_background
  #
  # t.string :name
  # t.string :size
  # t.string :image
