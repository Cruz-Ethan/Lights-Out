import { checkBoard } from './score.js';
const board = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
];
const boardSize = board.length;
function pressSquare(squareIndex) {
    squareIndex -= 1;
    const rowIndex = Math.floor(squareIndex / boardSize);
    const colIndex = squareIndex % boardSize;
    flipSquare(rowIndex, colIndex);
    flipSquare(rowIndex - 1, colIndex);
    flipSquare(rowIndex + 1, colIndex);
    flipSquare(rowIndex, colIndex - 1);
    flipSquare(rowIndex, colIndex + 1);
}
function flipSquare(rowIndex, colIndex) {
    if (rowIndex < boardSize && rowIndex >= 0 && board[rowIndex] && colIndex < boardSize && colIndex >= 0) {
        board[rowIndex][colIndex] = !board[rowIndex][colIndex];
    }
}
const grid = document.querySelector('.grid');
function updateGrid(squareIndex) {
    if (!grid)
        return;
    pressSquare(squareIndex);
    grid.innerHTML = board.reduce((HTMLCode, row, rowIndex) => {
        return HTMLCode + row.reduce((HTMLRowCode, isOn, colIndex) => {
            squareIndex = 1 + colIndex + rowIndex * 3;
            HTMLRowCode += `<div class="square-${squareIndex}${isOn ? ' on' : ''}"></div>`;
            return HTMLRowCode;
        }, '');
    }, '');
    for (let squareIndex = 1; squareIndex <= 9; squareIndex++) {
        document.querySelector(`.square-${squareIndex}`)?.addEventListener('click', () => {
            updateGrid(squareIndex);
        });
    }
    checkBoard(board);
}
export function randomizeGrid() {
    board.forEach(row => {
        row[0] = Math.random() > 0.5;
        row[1] = Math.random() > 0.5;
        row[2] = Math.random() > 0.5;
    });
    updateGrid(100);
    checkBoard(board);
}
randomizeGrid();
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'q':
            updateGrid(1);
            break;
        case 'w':
            updateGrid(2);
            break;
        case 'e':
            updateGrid(3);
            break;
        case 'a':
            updateGrid(4);
            break;
        case 's':
            updateGrid(5);
            break;
        case 'd':
            updateGrid(6);
            break;
        case 'z':
            updateGrid(7);
            break;
        case 'x':
            updateGrid(8);
            break;
        case 'c':
            updateGrid(9);
            break;
    }
});
export {};
