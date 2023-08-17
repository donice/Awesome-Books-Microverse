// App.js
import Library from './Library.js';

const listBooks = new Library();

function removeBookFromDOM(id) {
  if (id !== -1) {
    listBooks.removeBook(id);
  }
}

function deleteButtons1() {
  // ... (same as before)
}

const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = document.querySelector('#title').value;
  const bookAuthor = document.querySelector('#author').value;
  listBooks.addBook(bookTitle, bookAuthor);
  deleteButtons1();
});

// ... (UI interactions, display time function, section navigation, and menu event listeners)
