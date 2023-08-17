import { handleFormSubmit, updateBookList } from './UI.js';
import Library from './Library.js';

const form = document.querySelector('#form');
form.addEventListener('submit', handleFormSubmit);

const listBooks = new Library();
listBooks.getDataFromLocalStorage();
updateBookList();
