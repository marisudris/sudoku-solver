'use strict';

import './css/style.css';
import { handleSubmit, handleModalClick, handleEscape } from './js/handlers.js';
import { solverForm, modal } from './js/elements.js';

solverForm.addEventListener('submit', handleSubmit);
modal.addEventListener('click', handleModalClick);
window.addEventListener('keydown', handleEscape)
