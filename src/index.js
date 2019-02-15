

let rooms;



function renderAllFurniture(furniture){
  for(const furn of furniture){
    new Furniture(furn.id, furn.name, furn.size, furn.image)
  }
}

function renderAllRooms(room){
  for(const roo of room){
    new Room(roo.id, roo.name, roo.img_background)
  }
}

const submitRoom = document.getElementById('submitGrid');

function collectRoomButton(){
  submitRoom.addEventListener("click", e =>{
    e.preventDefault();
    //console.log(document.querySelectorAll('#dropArea div'));
    let newRoom = Room.saveRoom(document.querySelectorAll('#dropArea div'));
    let roomInfo = newRoom.filter(stuff => typeof stuff === 'string')
    let furnitureInfo = newRoom.filter(stuff => typeof stuff === 'object')
    
    postRoom(roomInfo)
    .then(resp => postEachFurniture(furnitureInfo))


    })
  }


function postEachFurniture(newRoom){
  for(const furn of newRoom){
      postRoomFurniture(furn);  
  }
}









function initialize(){
  getFurnitures().then(furniture => {
    renderAllFurniture(furniture)
  })

  getRooms().then(room => {
    rooms = room
    renderAllRooms(rooms)
  })

  collectRoomButton()
}



function getFurnitures(){
  return fetch('http://localhost:3000/api/v1/furnitures').then(resp => resp.json());
}

function postRoomFurniture(furniture){
  //debugger
  return fetch('http://localhost:3000/api/v1/room_furnitures',{
    method:'Post',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(furniture)
  })
}

function getRooms(){
  return fetch('http://localhost:3000/api/v1/rooms').then(resp => resp.json());
}

function postRoom(room){
  roomObj = {name: room[0]}
  //debugger
  return fetch('http://localhost:3000/api/v1/rooms',{
    method:'Post',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(roomObj)
  })
}





initialize()
