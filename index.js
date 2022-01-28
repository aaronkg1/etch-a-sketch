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
const rainbow = document.querySelector('#rainbow');
const rowSize = document.querySelector('#rowsize');
const columnSize = document.querySelector('columnsize');
const generateButton = document.querySelector('#generate');
let color;

let rowSizeValue = document.querySelector('#rowsizevalue').textContent;
let columnSizeValue = document.querySelector('#columnsizevalue').textContent;

function makeGrid(x, y) {
    for (let i = 0; i < x; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let j = 0; j < y; j++) {
            const box = document.createElement('div');
            box.className = 'box';
            row.appendChild(box);

        }
        container.appendChild(row);
    }
}

// generateButton.addEventListener('click', makeGrid(rowSizeValue, columnSizeValue));


makeGrid(50, 50);

clearButton.addEventListener('click', () => {
    boxes.forEach(box => box.style.background = 'white');
});

const boxes = document.querySelectorAll('.box');


colorButtons.forEach(button => button.addEventListener('click', (event) => {
    if (event.target.id == 'rainbow') {
        boxes.forEach(box => box.addEventListener('mouseover', randomRgb));
    }
  
    else
        boxes.forEach(box => box.removeEventListener('mouseover', randomRgb));
        color = event.target.id;


}));

boxes.forEach(box => box.addEventListener('mouseover', addClass,));

backgroundButtons.forEach(button => button.addEventListener('click', (event) => {
    if (event.target.id == 'rainbowbackground') {
        boxes.forEach(box => box.style.background = randomRgb());
    }

    else 
    
    boxes.forEach(box => box.style.background = event.target.innerHTML.toLowerCase());
} )
)

addEventListener('keydown', (event) => {
    if (event.code == 'Space') {
        boxes.forEach(box => box.removeEventListener('mouseover', addClass));
    }

    else if (event.code == 'KeyD') {
        boxes.forEach(box => box.addEventListener('mouseover', addClass));
    }

    else return;
});

function addClass() {
    this.style.background = color;
};

function randomRgb() {
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
    return color = `rgb(${red}, ${green}, ${blue})`;
}


