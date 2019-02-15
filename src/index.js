
function renderAllFurniture(furniture){
  for(const furn of furniture){
    new Furniture(furn.id, furn.name, furn.size, furn.image)
  }
}

const submitRoom = document.getElementById('submitGrid');

function collectRoomButton(){
  submitRoom.addEventListener("click", e =>{
    e.preventDefault();
    //console.log(document.querySelectorAll('#dropArea div'));
    let newRoom = Room.saveRoom(document.querySelectorAll('#dropArea div'));
    room_name = newRoom.slice(-1).pop()
    //postRoom(room_name);
    postEachFurniture(newRoom)
    //console.log(newRoom, room_name);
  })
}

function postEachFurniture(newRoom){
  for(const furn of newRoom){
      if(typeof furn === 'object'){
          postRoomFurniture(furn);
      }
  }
}









function initialize(){
  getFurnitures().then(furniture => {
    renderAllFurniture(furniture)
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






initialize()
