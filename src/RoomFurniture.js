class RoomFurniture{

    constructor (id, img, x, y) {
        this.img = img
        this.id = id
        this.left = x
        this.top = y
        this.createRoomFurnitureEl()
        this.RenderRoomFurniture()
    }

    createRoomFurnitureEl () {
        this.el = document.createElement('div')
        this.el.className = 'furniture'
        this.el.dataset.id = this.id;
        let imgEl = document.createElement("img")
        imgEl.setAttribute("src", `${this.img}`);
        this.el.appendChild(imgEl);
        

    }
    RenderRoomFurniture(){
        const dropArea = document.querySelector('#dropArea');
        dropArea.appendChild(this.el)
        
        Room.addDragToElement();
        Room.addFurnitureCoords(this.left, this.top);
    }
}