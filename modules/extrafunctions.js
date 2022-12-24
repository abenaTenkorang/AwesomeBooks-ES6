import {
  title, author, addBooks, booklist,
} from './add_remove.js';

import { booksArr, CheckLocalStorage } from './onload.js';

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

const addBtn = document.querySelector('#add-Button');
const Title = document.querySelector('.title');

addBtn.addEventListener('click', (e) => {
  if (Title.value === '' || author.value === '') {
    e.preventDefault();
  } else {
    CheckLocalStorage();
    const book = new Book(
      title.value,
      author.value,
      booksArr.length,
    );
    booksArr.push(book);
    addBooks(booksArr);
    localStorage.setItem('booksArr', JSON.stringify(booksArr));
    document.querySelector('.emptymsg').style.display = 'none';
    booklist.style.border = '1px solid black';
    window.location.reload();
  }
});
