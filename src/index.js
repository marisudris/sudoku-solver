'use strict';

import './css/style.css';
import { handleSubmit, handleModalClick, handleEscape } from './handlers.js';
import { solverForm, modal } from './elements.js';

solverForm.addEventListener('submit', handleSubmit);
modal.addEventListener('click', handleModalClick);
window.addEventListener('keydown', handleEscape)
