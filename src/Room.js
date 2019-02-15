class Room{

     static getDefaultOptions() {
        return {snap: {step: 10}};
    }

    static addDragToElement(){
        const dropArea = document.querySelector('#dropArea');
        console.log(dropArea.lastElementChild.dataset.id)
        return new PlainDraggable(dropArea.lastElementChild, this.getDefaultOptions());
    }

    static saveRoom(roomArea){
      let room_name = document.querySelector('h4').innerText
      let room = roomArea
      let roomArray = []

      for(const furniture of room){
        let furnObj={
              //room_id: 4,
              furniture_id: furniture.dataset.id,
              furniture_x: parseInt(furniture.getBoundingClientRect().x),
              furniture_y: parseInt(furniture.getBoundingClientRect().y)
            }
          roomArray.push(furnObj);
        }
        return roomArray
      }
}


// coordTest =document.querySelectorAll('#dropArea div')[2].style.transform.split('')
//
// coordTest.filter(letter => Number(letter) || letter === "0" || letter === ".")
//
// coords.join("").split(" ")
//
// x = coords[0]
// y = coords[1]
