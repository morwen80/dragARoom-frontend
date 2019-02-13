const drag1 = () => {
return new PlainDraggable(document.getElementById('block1'))
}

drag1().snap = {x: {step: 10}, y: {step: 20}};

const drag2 = () => {
return new PlainDraggable(document.getElementById('block2'))
}

drag2().snap = {x: {step: 10}, y: {step: 20}};

const saveDivs = () => {

}


const dropArea = document.querySelector('.dropArea');
const fL = document.querySelector(".col-3");

function furnitureListListener(){
    fL.addEventListener('click', e =>{
        if(e.target && e.target.matches(".placeholder-icon")){
            console.log(e.target)
            addToRoom(e.target)

        }});
}

function addToRoom(furniture){
  let furEl = new PlainDraggable(furniture)
    dropArea.appendChild(furniture);
  return furEl
}
furnitureListListener();
