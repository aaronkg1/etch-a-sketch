const container = document.querySelector('#container');
const clearButton = document.querySelector('#clear');
const eraseButton = document.querySelector('#erase');
const redButton = document.querySelector('#red');
const blackButton = document.querySelector('#black');
const greenButton = document.querySelector('#green');
const purpleButton = document.querySelector('#purple');
const orangeButton = document.querySelector('#orange');
const blueButton = document.querySelector('#blue');
const colorButtons = document.querySelectorAll('.color-button');
const backgroundButtons = document.querySelectorAll('.background-button')
const cssSelector = document.querySelector('link');
const rainbow = document.querySelector('#rainbow');;
const gridSize = document.querySelector('#gridsize');
const generateButton = document.querySelector('#generate');
const circleButton = document.querySelector('#circle');
const squareButton = document.querySelector('#square');
const randomiseButton = document.querySelector('#randomise');
const surpriseButton = document.querySelector('#surprise');
let color;
let clickCounter = 1;



makeGrid(64);
initializeEventListeners();

//Grouped all event listeners into one function so they can be called again when changing grid size.
function initializeEventListeners() { 

clearButton.addEventListener('click', () => {
    boxes.forEach(box => box.style.background = 'none');
}); 
//Clears background styling of all cells.

const boxes = document.querySelectorAll('.box');

colorButtons.forEach(button => button.addEventListener('click', (event) => {
    if (event.target.id == 'rainbow') {
        boxes.forEach(box => box.addEventListener('mouseover', randomRgb));
    }

    else
        boxes.forEach(box => box.removeEventListener('mouseover', (randomRgb)));
    color = event.target.id;


}));

boxes.forEach(box => box.addEventListener('mouseover', addClass,));

backgroundButtons.forEach(button => button.addEventListener('click', (event) => {
    if (event.target.id == 'rainbowbackground') {
        boxes.forEach(box => box.style.background = randomRgb());
    }
    else

        boxes.forEach(box => box.style.background = event.target.innerHTML.toLowerCase());
}));


boxes.forEach(box => box.addEventListener('click', (event) => {
    if (screen.width > 480) {

    clickCounter += 1;
    if (clickCounter % 2 == 0) {
        boxes.forEach(box => box.removeEventListener('mouseover', addClass));
    }  else boxes.forEach(box => box.addEventListener('mouseover', addClass));
} else return;
}));

circleButton.addEventListener('click', () => {
    boxes.forEach(box => box.style.borderRadius = '50%'); 
});

squareButton.addEventListener('click', () => {
    boxes.forEach(box => box.style.borderRadius = '0'); 
});

randomiseButton.addEventListener('click', () => {
    boxes.forEach(box => box.style.borderRadius = 
        `${Math.floor(Math.random() * 100 + 1)}%`); 
    
});

surpriseButton.addEventListener('click', () => {
    container.style.background = `linear-gradient(
        ${Math.floor(Math.random()*360+1)}deg,
            rgba(${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, 1) 0%,
            rgba(${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, 1) 10%,
            rgba(${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, 1) 20%,
            rgba(${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, 1) 30%,
            rgba(${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, 1) 40%,
            rgba(${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, 1) 50%,
            rgba(${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, 1) 60%,
            rgba(${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, 1) 70%,
            rgba(${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, 1) 80%,
            rgba(${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, 1) 90%,
            rgba(${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, 1) 100%
    )`
    boxes.forEach(box => box.style.borderRadius = '50%');
    
});

};

function addClass() {
    this.style.background = color;
};

function randomRgb() {
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
    return color = `rgb(${red}, ${green}, ${blue})`;
}

function makeGrid(x) {
    container.innerHTML ='';
    for (let i = 0; i < x; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let j = 0; j < x; j++) {
            const box = document.createElement('div');
            box.className = 'box';
            row.appendChild(box);

        }
        container.appendChild(row);
    }
}

gridSize.onchange = (event) => {
    makeGrid(event.target.value);
    document.querySelector('#gridsizevalue').textContent = `${event.target.value}x${event.target.value}`

initializeEventListeners();

};
