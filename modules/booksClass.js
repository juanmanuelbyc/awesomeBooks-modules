import {title,author,container} from './htmlNodes.js';

export default class Books {
  books;

  constructor() {
    this.getFromLocalStorage();
  }

  setLocalStorage = (newBooks) => localStorage.setItem('books', JSON.stringify(newBooks));

  getFromLocalStorage = () => {
    this.books = JSON.parse(localStorage.getItem('books')) ?? [];
  };

  displayBooks = () => {
    this.getFromLocalStorage();
    container.innerHTML = '';
    this.books.forEach((book, i) => {
      container.innerHTML += `<div class="book">
          <p><q>${book.title}</q> by ${book.author}</p>
          <button class="remove btn" id=${i}>Remove</button>
        </div>`;
    });
  };

  addBook = (e) => {
    e.preventDefault();
    const newBook = {
      title: title.value,
      author: author.value,
    };
    this.books.push(newBook);
    this.clear();
    this.setLocalStorage(this.books);
    this.displayBooks();
  };

  removeBook = (i) => {
    const filteredBooks = this.books.filter((book) => book !== this.books[i]);
    this.setLocalStorage(filteredBooks);
    this.displayBooks();
  };

  clear = () => {
    title.value = '';
    author.value = '';
  };
}
