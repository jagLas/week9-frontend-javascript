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
    // debugger
    let square = e.target;
    let id = square.id.split('-')[1];
    let row = Math.floor(id / 3);
    let col = id % 3;
    console.log(col)
    // console.log(game.grid[row])
    // console.log(game.grid[row][col])

    if (grid[row][col] === ' '){
        console.log('placing move at', row, col)
        //updates the backend game state and checks for a winner
        let winner = game.placeMove(row, col);
        console.log(winner)
    } else {
        console.log('unable to place move at', row, col);
    }

    console.log(grid)

}

window.onload = () => {
    clickListener()
};