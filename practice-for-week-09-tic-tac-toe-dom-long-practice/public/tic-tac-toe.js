import {TTT} from './ttt.js';

const game = new TTT();
const grid = game.grid;
console.log(game, grid)

// Your code here
function clickListener () {
    const board = document.querySelector('#board');
    board.addEventListener('click', placeMove)
}

function placeMove(e) {

    let square = e.target;
    //prevents a TypeError if clicking on space that already is filled
    if(square.tagName === 'IMG') {
        return
    }

    let id = square.id.split('-')[1];
    let row = Math.floor(id / 3);
    let col = id % 3;

    if (grid[row][col] === ' '){
        //the following code was originally made and worked, but failed cypress test due to specificity. If asset is ever removed from app academy, uncomment lower line and comment the line below that
        // square.innerHTML = `<img src="./player-${game.playerTurn.toLowerCase()}.svg" alt="${game.playerTurn.toLowerCase()}">`
        square.innerHTML = `<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${game.playerTurn.toLowerCase()}.svg" alt="${game.playerTurn.toLowerCase()}">`
        console.log('placing move at', row, col)
        //updates the backend game state and checks for a winner
        game.placeMove(row, col);
        let winner = TTT.checkWin(grid);
        console.log(winner)
    } else {
        console.log('unable to place move at', row, col);
    }

    console.log(grid)

}

window.onload = () => {
    clickListener()
};