export default class Library {
  constructor() {
    this.books = [];
  }

  saveToLocalStorage = () => {
    localStorage.setItem('Library', JSON.stringify(this.books));
  };

  getDataFromLocalStorage = () => {
    try {
      const data = JSON.parse(localStorage.getItem('Library'));
      if (data !== null) {
        this.books = data;
      }
    } catch (error) {
      this.saveToLocalStorage();
    }
  };

  addBook = (book) => {
    this.books.push(book);
    this.saveToLocalStorage();
  };

  removeBook = (bookId) => {
    this.books.splice(bookId, 1);
    this.saveToLocalStorage();
  };
}
