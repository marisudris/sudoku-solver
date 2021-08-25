import { cells } from './elements.js';
import { extractBoard, insertBoard, displayError, closeModal } from './utils.js';
import { solve } from './core.js';

function handleSubmit(evt) {
    evt.preventDefault();
    if (!validateInputs(cells)) {
        displayError('Inputs are not valid');
        return;
    }
    const board = extractBoard(cells);
    const solution = solve(board);
    if (!solution) {
        displayError('Board not solvable');
        return;
    }
    insertBoard(solution);
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
