class RoomFurniture{

    constructor (id, img, x, y) {
        this.img = img
        this.id = id
        this.PosX = x
        this.PosY = y
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
        dropArea.firstElementChild.getBoundingClientRect().x = this.PosX
        dropArea.firstElementChild.getBoundingClientRect().y = this.PosY
        debugger
        Room.addDragToElement();
    }
}