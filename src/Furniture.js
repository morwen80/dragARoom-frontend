class Furniture {

    constructor (name) {
        this.name = name
        this.id = Furniture.id++
        Furniture.all.push(this)
        this.createFurnitureEl()
        this.bindMethods ()
        this.addToFurnitureList()
        this.addEventListener()
    }

    createFurnitureEl () {
        this.el = document.createElement('div')
        this.el.className = 'furniture'
        this.el.dataset.id = this.id;
        this.el.name = this.name
    }

    addToFurnitureList () {
        const fL = document.querySelector('.furnitureList');
        fL.appendChild(this.el)
    }

    addEventListener() {
        this.el.addEventListener("click", this.addToRoom);
    }
    
    addToRoom(){
        //console.log(this.el);
        const dropArea = document.querySelector('.dropArea');
        dropArea.appendChild(this.el)
        Room.addDragToElement();
    }

    bindMethods () {
        this.addToRoom = this.addToRoom.bind(this)
    }


}

Furniture.id = 1

Furniture.all = []
