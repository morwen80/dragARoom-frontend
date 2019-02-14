const drag1 = () => {
return new PlainDraggable(document.getElementById('block1'))
}
// drag1().snap = {x: {step: 10}, y: {step: 20}};

const drag2 = () => {
return new PlainDraggable(document.getElementById('block2'))
}

const drag3 = () => {
return new PlainDraggable(document.getElementById('block3'))
}

const drag4 = () => {
return new PlainDraggable(document.getElementById('block4'))
}

const drag5 = () => {
return new PlainDraggable(document.getElementById('block5'))
}

const drag6 = () => {
return new PlainDraggable(document.getElementById('block6'))
}

const drag7 = () => {
return new PlainDraggable(document.getElementById('block7'))
}

const drag8 = () => {
return new PlainDraggable(document.getElementById('block8'))
}

const drag9 = () => {
return new PlainDraggable(document.getElementById('block9'))
}

const drag10 = () => {
return new PlainDraggable(document.getElementById('block10'))
}

const drag11 = () => {
return new PlainDraggable(document.getElementById('block11'))
}

const drag12 = () => {
return new PlainDraggable(document.getElementById('block12'))
}

const dropArea = document.querySelector('.dropArea');
// dropArea.containment = {left: 20, top: 20, width: 600, height: 600};
const fL = document.querySelector(".col-3");

function furnitureListListener(){
    fL.addEventListener('click', e =>{
        if(e.target && e.target.matches(".placeholder-icon")){
            console.log(e.target)
            addToRoom(e.target)
            drag1()
            drag2()
            drag3()
            drag4()
            drag5()
            drag6()
            drag7()
            drag8()
            drag9()
            drag10()
            drag11()
            drag12()
        }});
}

function addToRoom(furniture){
  let furEl = new PlainDraggable(furniture)
    dropArea.appendChild(furniture);
  return furEl
}
furnitureListListener();
