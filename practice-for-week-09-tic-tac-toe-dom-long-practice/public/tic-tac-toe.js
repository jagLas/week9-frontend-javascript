import {TTT} from './ttt.js';

let game = new TTT();
console.log(game, game.grid)

// Your code here
function clickListener () {
    const board = document.querySelector('#board');
    board.addEventListener('click', placeMove)
}

function newGameListener() {
    const newGameButton = document.querySelector('#new-game');
    newGameButton.addEventListener('click', newGame)
}

function placeMove(e) {
    let square = e.target;

    //prevents a TypeError if clicking on space that already is filled
    if(square.tagName === 'IMG') {
        console.log('Unable to place move: space occupied');
        return;
    }

    //turns id into coordinates for 2d matrix
    let id = square.id.split('-')[1];
    let row = Math.floor(id / 3);
    let col = id % 3;

    //updates the ui to show move
    // the following code was originally made and worked, but failed cypress test due to specificity. If asset is ever removed from app academy, uncomment lower line and comment the line below that
    square.innerHTML = `<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${game.playerTurn.toLowerCase()}.svg" alt="${game.playerTurn.toLowerCase()}">`
    // square.innerHTML = `<img src="./player-${game.playerTurn.toLowerCase()}.svg" alt="${game.playerTurn.toLowerCase()}">`
    
    // console.log('placing move at', row, col)

    //updates the backend game state and checks for a winner
    game.placeMove(row, col);
    let winner = TTT.checkWin(game.grid);
    if (winner) onWin(winner);

    // console.log(game.grid)
}

function onWin(winner) {

    // console.log(winner)
    const winSpan = document.querySelector('#winner')
    winSpan.innerText = winner;
    const board = document.querySelector('#board');
    board.removeEventListener('click', placeMove)
    newGameListener();
}

function newGame(e) {
    //reset game logic
    game = new TTT();

    //resets ui
    for (let i = 0; i < 9; i++) {
        const square = document.querySelector(`#square-${i}`);
        square.innerHTML = '';
    }
    document.querySelector('#winner').innerHTML = '';

    //turn on click event listener
    clickListener();
    document.querySelector('#new-game').removeEventListener('click', newGame);
}

window.onload = () => {
    clickListener();
};