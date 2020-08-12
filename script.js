'use strict';

const solverForm = document.querySelector('.solver-form');
const cells = [...document.querySelectorAll('.cell')];
const solveButton = document.querySelector('.button');

function extractBoard(cells) {
    const board = [];
    const boardValues = cells.map((cell) => cell.value || null);
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

function solve(board) {
    return true;
}

function displayError() {
    console.log('Board unsolvable');
}

solverForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const board = extractBoard(cells);
    const isSolvable = solve(board);
    if (isSolvable) {
        insertBoard(board);
        return;
    }
    displayError();
});
