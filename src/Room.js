class Room{

    static addDragToElement(){
        const dropArea = document.querySelector('.dropArea');
        console.log(dropArea.lastElementChild)
        return new PlainDraggable(dropArea.lastElementChild)
    }
}