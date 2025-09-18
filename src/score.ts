import { randomizeGrid } from './grid.js';

export let score = 0;

export function checkBoard(board: boolean[][]) {
    let isAllOff = board.flat().reduce((areAllOff, value) => {
        return areAllOff && !value;
    }, true);

    if(isAllOff) {
        updateScore();
        randomizeGrid();
    }
}

const scoreElement = document.querySelector('.score');
function updateScore() {
    if(!scoreElement) return;
    score++;
    scoreElement.innerHTML = `Score: ${score.toString()}`;
}

export {};