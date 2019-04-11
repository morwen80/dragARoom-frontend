

let rooms;

const currentFloor = document.querySelector('#dropArea')
const floors = document.querySelectorAll('.floorType')
const roomDrop = document.getElementById("roomDropDown");
const dropZone = document.querySelector('.dropzone')

function roomSelectListener(){
  roomDrop.addEventListener("click", e=> {
    console.log(e.target.dataset.id)
    room = e.target.dataset.id
    //getRoomFurnitures()
    getSpecificRoom(room).then(room => displayRoom(room));

  });
}

function displayRoom(room){
  dropZone.innerHTML = `<h4 contenteditable>${room.name}</h4>
                        <div id="dropArea" style= "background-image: ${room.img_background};"></div>
                          <div class="gridBtns">
                        <button id="resetGrid">Reset</button>
                        <button id="submitGrid">Save Changes</button>
                        </div>`
  debugger
}





floors.forEach(floor => {
  floor.addEventListener("click", (e) => {
    let changeFloor = e.target.src
   currentFloor.style.backgroundImage = `url(${changeFloor})`;
    })
});




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

    let newRoom = Room.saveRoom(document.querySelectorAll('#dropArea div'));
    let roomInfo = newRoom.filter(stuff => typeof stuff === 'string')
    let furnitureInfo = newRoom.filter(stuff => typeof stuff === 'object')

    postRoom(roomInfo, furnitureInfo)
  })
}

function postRoom(room, furniture){
  roomObj = {name: room[1],img_background: room[0]}

  return fetch('http://localhost:3000/api/v1/rooms',{
    method:'Post',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(roomObj)
  })
  .then(resp => resp.json())
  .then(room => {
    rooms.concat(room)
    new Room(room.id, room.name, room.img_background)
    postEachFurniture(furniture, room.id)
  })    
}

function postEachFurniture(newRoom, respID){
  for(const furn of newRoom){
      furn.room_id = respID
      postRoomFurniture(furn);  
  }
    currentFloor.innerHTML = '';
    document.querySelector('h4').innerText = 'My Room';
}

function postRoomFurniture(furniture){
  return fetch('http://localhost:3000/api/v1/room_furnitures',{
    method:'Post',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(furniture)
  })
}










function initialize(){
  getFurnitures().then(furniture => {
    renderAllFurniture(furniture)
  })

  getRooms().then(room => {
    rooms = room
    renderAllRooms(rooms)
  })

  roomSelectListener()
  collectRoomButton()
}





function getFurnitures(){
  return fetch('http://localhost:3000/api/v1/furnitures').then(resp => resp.json());
}

function getRooms(){
  return fetch('http://localhost:3000/api/v1/rooms').then(resp => resp.json());
}

function getSpecificRoom(roomID){
  return fetch(`http://localhost:3000/api/v1/rooms/${roomID}`).then(resp => resp.json());
 }








initialize()
