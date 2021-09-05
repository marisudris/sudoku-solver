import { cells, modal, modalContent } from './elements.js';

function extractBoard(cells) {
    const board = [];
    const boardValues = cells.map((cell) => Number(cell.value) || null);
    while (boardValues.length) {
        board.push(boardValues.splice(0, 9));
    }
    return board;
}

function validateInputs(cells) {
    return cells.every(function (cell) {
        // Ignore empty cells
        if (cell.value === '') {
            return true;
        }
        const cellValue = Number(cell.value);
        return (
            Number.isInteger(cellValue) && cellValue >= 1 && cellValue <= 9
        );
    });
}

function insertBoard(board) {
    const cellValues = board.flat().map((value) => value || '');
    cells.forEach((cell) => {
        cell.value = cellValues.shift();
    });
}

function displayError(message) {
    openModal(message);
}

function openModal(content = '') {
    modal.classList.add('modal--open');
    modalContent.textContent = content;
}

function closeModal() {
    modalContent.textContent = null;
    modal.classList.remove('modal--open');
}

export {
    extractBoard,
    insertBoard,
    validateInputs,
    displayError,
    openModal,
    closeModal,
};
