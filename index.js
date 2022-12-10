import './modules/button_functions.js';
import DateTimeFormat from './modules/dateTime.js';
import { addBooks } from './modules/add_remove.js';
import { CheckLocalStorage, booksArr } from './modules/onload.js';
import './modules/extrafunctions.js';

const displayTime = () => setInterval(() => {
  document.querySelector('#date').innerHTML = DateTimeFormat();
}, 1000);

// display time
window.addEventListener('load', displayTime);

window.onload = () => {
  CheckLocalStorage();
  addBooks(booksArr);
};
