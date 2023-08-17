import Library from './Library.js';

const listBooks = new Library();

const updateBookList = () => {
  const section = document.querySelector('#book-list');
  const books = listBooks.getBooks();
  let booksHTML = '<table>';
  books.forEach((book, index) => {
    booksHTML += `<tr>
      <td>
        <article class="book">
          <p>"${book.title}" by ${book.author}</p>
          <button type="button" id="${index}" class="btn remove-btn" >Remove</button>
        </article>
      </td>
    </tr>`;
  });
  if (books.length === 0) {
    booksHTML += '<tr><td<p class="empty-library">Library is empty...</p></td></tr>';
  }
  booksHTML += '</table>';
  section.innerHTML = booksHTML;
  deleteButtons();
};

const deleteButtons = () => {
  const buttons = document.querySelectorAll('.remove-btn');
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      removeBookFromDOM(index);
    });
  });
};

const removeBookFromDOM = (id) => {
  listBooks.removeBook(id);
  updateBookList();
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const bookTitle = document.querySelector('#title').value;
  const bookAuthor = document.querySelector('#author').value;
  const newBook = new Book(bookTitle, bookAuthor);
  listBooks.addBook(newBook);
  updateBookList();
  event.target.reset();
};

export { handleFormSubmit, updateBookList };
