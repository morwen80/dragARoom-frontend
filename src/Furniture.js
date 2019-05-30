class Furniture {

    constructor (id, name, size, img) {
        this.name = name
        this.size = size
        this.img = img
        this.id = id
        Furniture.all.push(this)
        this.createFurnitureEl()
        this.bindMethods ()
        this.addToFurnitureList()
        this.addEventListener()
    }

    createFurnitureEl () {
        this.el = document.createElement('div')
        this.el.name = this.name
        this.el.className = 'furniture'
        this.el.dataset.id = this.id;
        let imgEl = document.createElement("img")
        imgEl.setAttribute("src", `${this.img}`);
        this.el.appendChild(imgEl);

    }

    addToFurnitureList () {
        const fL = document.querySelector('#furnitureList');
        fL.appendChild(this.el)
    }

    addEventListener() {
        this.el.addEventListener("click", this.addToRoom);
    }

    addToRoom(){
        const dropArea = document.querySelector('#dropArea');
        dropArea.appendChild(this.el)
        this.el.removeEventListener('click', this.addToRoom)
        Room.addDragToElement();
    }

    bindMethods () {
        this.addToRoom = this.addToRoom.bind(this)
    }


}

Furniture.all = []
