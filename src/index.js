'use strict';

import './style.css';
import { handleSubmit } from './handlers.js';
import { solverForm } from './elements.js';

solverForm.addEventListener('submit', handleSubmit);
