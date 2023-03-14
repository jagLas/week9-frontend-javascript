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

window.onload = makeBoard;