
//
// const a = displace(document.querySelector('#block1'));
// const b = displace(document.querySelector('#block2'));
// const c = displace(document.querySelector('#block3'));

const drag1 = () => {
return new PlainDraggable(document.getElementById('block1'))
}

drag1().snap = {x: {step: 10}, y: {step: 20}};

//   // // containment: 'dropArea',
//   // snap: draggable1.snap = {x: 130},
//   // handle: '',
//   // zIndex: 9000,
//left: undefined,
//top: undefined

const drag2 = () => {
return new PlainDraggable(document.getElementById('block2'))
}

drag2().snap = {x: {step: 10}, y: {step: 20}};
//
//
// draggable2 = new PlainDraggable(document.getElementById('block3'));
