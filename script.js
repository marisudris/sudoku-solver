'use strict';

const solverForm = document.querySelector('.solver-form');
const cells = [...document.querySelectorAll('.cell')];
const solveButton = document.querySelector('.button');

function extractBoard(cells) {
    return null;
}

solverForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(extractBoard(cells));
});
