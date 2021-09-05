'use strict';

import './css/style.css';
import {
    handleSubmit,
    handleReset,
    handleModalClick,
    handleEscape,
} from './js/handlers.js';
import { solverForm, resetButton, modal } from './js/elements.js';

solverForm.addEventListener('submit', handleSubmit);
resetButton.addEventListener('click', handleReset);
modal.addEventListener('click', handleModalClick);
window.addEventListener('keydown', handleEscape);
