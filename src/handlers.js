import { cells } from './elements.js';
import { extractBoard, insertBoard, displayError } from './utils.js';
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

export { handleSubmit };
