import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here
function makeBoard () {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'game-board')
    console.log('making board')
    board.grid.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const square = document.createElement('div');
            square.setAttribute('data-row', rowI);
            square.setAttribute('data-col', colI);
            square.setAttribute('class', 'square')
            wrapper.appendChild(square)
        })
    })
    document.body.appendChild(wrapper);
}



function test() {
    const gameBoard = document.querySelector('#game-board')
    gameBoard.addEventListener('click', (e) => {
        // console.log(e.target);
        const row = e.target.dataset.row;
        const col = e.target.dataset.col;

        let res;
        if (row && col) {
            res = board.makeHit(row, col)
        }
        console.log('shot at', [row, col], 'res:', res)
        if (res) {
            e.target.innerText = res;
            e.target.classList.add('hit');
        } else {
            e.target.classList.add('class', 'miss');
        }
    })
}

window.onload = () => {
    makeBoard();
    test();
}