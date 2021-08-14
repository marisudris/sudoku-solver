'use strict';

import './style.css';

const solverForm = document.querySelector('.solver-form');
const cells = [...document.querySelectorAll('.cell')];
const solveButton = document.querySelector('.button');

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

function isValid(board) {
    if (!rowsAreValid(board)) {
        return false;
    }

    if (!columnsAreValid(board)) {
        return false;
    }

    if (!boxesAreValid(board)) {
        return false;
    }
    return true;
}

function rowsAreValid(board) {
    return board.every((row) => !hasDuplicates(row));
}
function hasDuplicates(arr) {
    const noNullsArr = arr.filter((v) => v !== null);
    return new Set(noNullsArr).size !== noNullsArr.length;
}

function columnsAreValid(board) {
    for (let row = 0; row < 9; row++) {
        const column = [];
        for (let col = 0; col < 9; col++) {
            column.push(board[col][row]);
        }
        if (hasDuplicates(column)) {
            return false;
        }
    }
    return true;
}

function boxesAreValid(board) {
    let indexes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    ];
    for (let i of indexes) {
        for (let j of indexes) {
            const box = [];
            for (let index1 of i) {
                for (let index2 of j) {
                    box.push(board[index1][index2]);
                }
            }
            if (hasDuplicates(box)) return false;
        }
    }
    return true;
}

function search(boards) {
    if (boards.length === 0) {
        return false;
    }
    const next = boards.shift();
    const branch = solve(next);
    if (branch !== false) {
        return branch;
    } else {
        return search(boards);
    }
}

function displayError() {
    console.log('Board unsolvable');
}

solverForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const board = extractBoard(cells);
    const solvedBoard = solve(board);
    if (solvedBoard) {
        insertBoard(solvedBoard);
        return;
    }
    displayError();
});
