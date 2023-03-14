import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here
function makeBoard () {

    //creates the win message and hides it
    const gameStatus = document.createElement('div');
    gameStatus.innerText = `You win!`.toUpperCase();
    gameStatus.setAttribute('id', 'win-message');
    gameStatus.setAttribute('class', 'hidden');
    document.body.appendChild(gameStatus);

    //creates a reset button
    const resetDiv = document.createElement('div');
    document.body.appendChild(resetDiv)
    const reset = document.createElement('button');
    reset.innerText = `Reset Game`;
    resetDiv.appendChild(reset)

    //creates the gameboard
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'game-board')
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

//creates the listener for square presses
function squareListen() {
    const gameBoard = document.querySelector('#game-board')
    gameBoard.addEventListener('click', makeShot)
}

//creates the lisener for the reset button
function resetListen() {
    const reset = document.querySelector('button');
    reset.addEventListener('click', resetGame);
}

function makeShot(e) {
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

    const gameStatus = board.isGameOver();
    if (gameStatus){
        const gameBoard = document.querySelector('#game-board')
        gameBoard.removeEventListener('click', makeShot)
        document.querySelector('#win-message').setAttribute('class', '');
        console.log('Game over: eventlistener removed')
    }
}

function resetGame() {
    const h1 = document.querySelector('h1');
    document.body.innerHTML = '';
    document.body.appendChild(h1);
    board = new Board();
    console.log(board.grid)
    makeBoard();
    squareListen();
    resetListen();
}




window.onload = () => {
    makeBoard();
    squareListen();
    resetListen();
}