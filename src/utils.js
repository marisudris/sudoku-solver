import { cells } from './elements.js';

function extractBoard(cells) {
    const board = [];
    const boardValues = cells.map((cell) => Number(cell.value) || null);
    while (boardValues.length) {
        board.push(boardValues.splice(0, 9));
    }
    return board;
}

function insertBoard(board) {
    const cellValues = board.flat().map((value) => value || '');
    cells.forEach((cell) => {
        cell.value = cellValues.shift();
    });
}

function displayError() {
    console.log('Board unsolvable');
}

export { extractBoard, insertBoard, displayError };
