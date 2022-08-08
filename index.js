/** @format */

import Books from './modules/booksClass.js';
import {addListeners} from './modules/addEventListeners.js';
import { DateTime } from "./node_modules/luxon/src/luxon.js";
import { dateTime } from "./modules/htmlNodes.js";

export const book = new Books();

addListeners ();

dateTime.textContent = DateTime.now().toJSDate();