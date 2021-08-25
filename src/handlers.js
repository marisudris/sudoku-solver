import { cells } from './elements.js';
import { extractBoard, insertBoard, displayError, closeModal } from './utils.js';
import { solve } from './core.js';

function handleSubmit(evt) {
    evt.preventDefault();
    const board = extractBoard(cells);
    const solvedBoard = solve(board);
    if (solvedBoard) {
        insertBoard(solvedBoard);
        return;
    }
    displayError();
}

function handleModalClick(evt) {
    const clickedOutside = !evt.target.closest('.modal__content');
    if (clickedOutside) {
        closeModal();
    }
}

function handleEscape(evt) {
    if (evt.key === 'Escape') {
        closeModal();
    }
}

export { handleSubmit, handleModalClick, handleEscape };
