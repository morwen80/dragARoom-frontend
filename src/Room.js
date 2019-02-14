class Room{

     static getDefaultOptions() {
        return {snap: {step: 10}};
    }

    static addDragToElement(){
        const dropArea = document.querySelector('#dropArea');
        console.log(dropArea.lastElementChild.dataset.id)
        return new PlainDraggable(dropArea.lastElementChild, this.getDefaultOptions());
    }

}
