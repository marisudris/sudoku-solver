import { cells, modal, modalContent } from './elements.js';

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
    openModal('Board not solvable');
}

function openModal(content = '') {
    modal.classList.add('modal--open');
    modalContent.textContent = content;
}

function closeModal() {
    modalContent.textContent = null;
    modal.classList.remove('modal--open');
}

export { extractBoard, insertBoard, displayError, openModal, closeModal };
