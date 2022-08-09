import {
  submit, container, bookList, addContainer, contactContainer, list, addNew, contact 
} from './htmlNodes.js';
import Books from './booksClass.js';

const book = new Books();

export default function addListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    book.displayBooks();
  });

  submit.addEventListener('click', book.addBook);

  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
      const targetId = +e.target.getAttribute('id');
      book.removeBook(targetId);
    }
  });

  list.addEventListener('click', () => {
    bookList.classList.remove('hidden');
    addContainer.classList.add('hidden');
    contactContainer.classList.add('hidden');
  });

  addNew.addEventListener('click', () => {
    bookList.classList.add('hidden');
    addContainer.classList.remove('hidden');
    contactContainer.classList.add('hidden');
  });

  contact.addEventListener('click', () => {
    bookList.classList.add('hidden');
    addContainer.classList.add('hidden');
    contactContainer.classList.remove('hidden');
  });
}