class Room{

  constructor (id, name, img_background) {
    this.id = id
    this.name = name
    this.img_background = img_background
    this.renderRoom();
    this.addToRoomList();
  }

  renderRoom(){
    this.roomEl = document.createElement('div')
    this.roomEl.dataset.id = this.id;
    this.roomEl.name = this.name;
    this.roomEl.className = 'dropdown-item'; 
    this.roomEl.innerText = this.name;
  }

  addToRoomList() {
    const rL = document.getElementById('roomDropDown');
    rL.appendChild(this.roomEl)
}

  //<a class="dropdown-item" href="#">Room 1</a>
  static getDefaultOptions() {
    return {snap: {step: 10}};
  }

  static addDragToElement(){
    const dropArea = document.querySelector('#dropArea');
    console.log(dropArea.lastElementChild.dataset.id)
    return new PlainDraggable(dropArea.lastElementChild, this.getDefaultOptions());
  }

  static saveRoom(roomArea){
    let roomName = document.querySelector('h4').innerText
    let room = roomArea
    let roomArray = []
    let room_id = rooms.length++

    for(const furniture of room){
      let furnObj={
      room_id: room_id,
      furniture_id: furniture.dataset.id,
      furniture_x: parseInt(furniture.getBoundingClientRect().x),
      furniture_y: parseInt(furniture.getBoundingClientRect().y)
      }
      roomArray.push(furnObj);
    }
    roomArray.push(roomName);
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
