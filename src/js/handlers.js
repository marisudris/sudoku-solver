import { cells } from './elements.js';
import {
    extractBoard,
    insertBoard,
    validateInputs,
    displayError,
    closeModal,
    markInputs,
    unmarkInputs,
} from './utils.js';
import { solve } from './core.js';

function handleSubmit(evt) {
    evt.preventDefault();
    if (!validateInputs(cells)) {
        displayError('Invalid input');
        return;
    }
    const board = extractBoard(cells);
    const solution = solve(board);
    if (!solution) {
        displayError('Board not solvable');
        return;
    }
    markInputs(cells);
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

function handleReset(evt) {
    unmarkInputs(cells);
}

export { handleSubmit, handleModalClick, handleEscape, handleReset };
