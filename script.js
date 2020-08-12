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
    if (isSolved(board)) {
        return board;
    } else {
        const variants = nextBoards(board);
        const validBoards = filterValid(variants);
        return search(validBoards);
    }
}

function isSolved(board) {
    const flatBoard = board.flat();
    return flatBoard.every((v) => v !== null);
}

function nextBoards(board) {
    var result = [];
    const emptySquare = nextEmptySquare(board);
    if (emptySquare) {
        const [y, x] = emptySquare;
        for (var i = 1; i < 10; i++) {
            var newBoard = [...board];
            var row = [...newBoard[y]];
            row[x] = i;
            newBoard[y] = row;
            result.push(newBoard);
        }
    }
    return result;
}
function nextEmptySquare(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === null) {
                return [row, col];
            }
        }
    }
    return false;
}

function filterValid(boards) {
    return boards.filter((board) => isValid(board));
}

function isValid() {
    return false;
}

function search(boards) {
    return [];
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
