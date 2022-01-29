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
let color;


makeGrid(64);
initializeEventListeners();

function initializeEventListeners() {

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
})
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
