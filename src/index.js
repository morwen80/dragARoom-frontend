

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



