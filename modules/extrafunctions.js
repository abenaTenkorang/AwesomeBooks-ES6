import {
  title, author, addBooks, booklist, deleteBook,
} from './add_remove.js';

import { booksArr } from './onload.js';

// eslint-disable-next-line no-unused-vars
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

document.querySelector('.Books-Container').addEventListener('click', (e) => {
  booksArr.splice(e.target.id, 1);
  localStorage.setItem('bookArr', JSON.stringify(booksArr));
  deleteBook(e.target);
});

const addBtn = document.querySelector('#add-Button');
const Title = document.querySelector('.title');

addBtn.addEventListener('click', (e) => {
  if (Title.value === '' || author.value === '') {
    e.preventDefault();
  } else {
    const theBook = {
      title: title.value,
      author: author.value,
    };
    booksArr.push(theBook);
    addBooks(booksArr);
    localStorage.setItem('booksArr', JSON.stringify(booksArr));
    document.querySelector('.emptymsg').style.display = 'none';
    booklist.style.border = '1px solid black';
  }
});