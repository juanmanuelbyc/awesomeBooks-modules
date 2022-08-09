/** @format */

import setUpListeners from './modules/addEventListeners.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';
import { dateTime } from './modules/htmlNodes.js';

// add all required event listeners
setUpListeners();

// display time
dateTime.textContent = DateTime.now().toJSDate();
