import {TTT} from './ttt.js';

let game = new TTT();
console.log(game, game.grid)
restoreGame();
startObserver();

// Your code here
function clickListener () {
    const board = document.querySelector('#board');
    board.addEventListener('click', placeMove)
}

function placeMove(e) {
    let square = e.target;

    //prevents a TypeError if clicking on space that already is filled
    if(square.tagName === 'IMG') {
        console.log('Unable to place move: space occupied');
        return;
    }

    //avoids bug that collapses board when gap is clicked instead of square
    if(e.target.id === 'board') {
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

    //enable new game button
    document.querySelector('#new-game').disabled = false;
    document.querySelector('#give-up').disabled = true;
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

    //turn on click event listener and disable button
    clickListener();
    document.querySelector('#new-game').disabled = true;
    document.querySelector('#give-up').disabled = false;
}

function giveUp() {
    let winner;
    if (game.playerTurn === 'X') {
        winner = 'O';
    } else {
        winner = 'X';
    }

    onWin(winner);
}

function restoreGame () {
    let prevGame = localStorage.getItem('grid');
    if (prevGame) {
        prevGame = prevGame.split(',');
        let prevGrid = [[],[],[]];
        prevGame.forEach((space, i) => {
            const row = Math.floor(i / 3);
            const col = i % 3;
            prevGrid[row][col] = space;
        })

        game.grid = prevGrid;
    }

    let ui = localStorage.getItem('ui');
    if (ui) {
        document.getElementById('board').innerHTML = ui;
    }

    //add code to restore player turn
    let playerTurn = localStorage.getItem('playerTurn')
    if (playerTurn) {
        game.playerTurn = playerTurn;
    }

    //enable/disable new game button
    let newGameDis = localStorage.getItem('newGame');
    if (newGameDis) {
        console.log(newGameDis)
        document.querySelector('#new-game').disabled = newGameDis == 'true';
    }

    if (newGameDis == 'true' || newGameDis === null) {
        // document.querySelector('#board').removeEventListener('click', placeMove)
        clickListener();
    }
    
    //enable/disable give-up button
    let giveUpDis = localStorage.getItem('giveUp');
    if (giveUpDis) {
        console.log(giveUpDis)
        document.querySelector('#give-up').disabled = giveUpDis == 'true';
    }

    let winner = localStorage.getItem('winner');
    if (winner) {
        document.getElementById('winner').innerText = winner;
    }

    console.log(game.grid)
}

function startObserver() {
    const observerTarget = document.body
    const observer = new MutationObserver(() => {
        localStorage.setItem('grid', game.grid);
        localStorage.setItem('ui', document.getElementById('board').innerHTML);
        localStorage.setItem('newGame', document.querySelector('#new-game').disabled);
        localStorage.setItem('giveUp', document.querySelector('#give-up').disabled);
        localStorage.setItem('playerTurn', game.playerTurn)
        localStorage.setItem('winner', document.getElementById('winner').innerText)
    })
    const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true,
    };

    observer.observe(observerTarget, observerOptions)
}

// window.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#new-game').addEventListener('click', newGame);
//     document.querySelector('#give-up').addEventListener('click', giveUp)
// })

window.onload = () => {
    document.querySelector('#new-game').addEventListener('click', newGame);
    document.querySelector('#give-up').addEventListener('click', giveUp)
}