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

makeGrid(50, 60);

clearButton.addEventListener('click', () => {
    boxes.forEach(box => box.classList.remove('blue', 'orange', 'purple', 'green', 'red', 'black'))
});

const boxes = document.querySelectorAll('.box');



colorButtons.forEach(button => button.addEventListener('click', (e) => {
    const color = e.target.id;
    
  boxes.forEach(box => box.addEventListener('mouseover', addClass));

    

    function addClass() {
    
    this.classList.toggle(color);
};

}));





// function() {
    
//     this.classList.add('black');
// }