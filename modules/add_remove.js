import { CheckLocalStorage } from './onload.js';

export const booklist = document.querySelector('.books-list');
export const title = document.querySelector('#Title');
export const author = document.querySelector('#Author');

export const addBooks = (booksArr) => {
  for (let i = 0; i < booksArr.length; i += 1) {
    const titleAndAuthor = document.createElement('div');
    titleAndAuthor.classList.add('title-author');
    booklist.append(titleAndAuthor);
    const bookDetails = document.createElement('p');
    bookDetails.classList.add('Title');
    bookDetails.innerText = `"${booksArr[i].title}" by  ${booksArr[i].author}`;
    titleAndAuthor.append(bookDetails);
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('button', 'remove-books');
    removeBtn.id = `${booksArr[i].id}`;
    removeBtn.innerText = 'Remove';
    titleAndAuthor.append(removeBtn);
    const removeBook = () => {
      const target = removeBtn.id;
      booksArr.splice(target, 1);

      let refreshId = 0;
      if (booksArr.length > 0) {
        booksArr.forEach((e) => {
          e.id = refreshId;
          refreshId += 1;
        });
      }
    };
    removeBtn.addEventListener('click', () => {
      CheckLocalStorage();
      removeBook();
      localStorage.setItem('booksArr', JSON.stringify(booksArr));
      window.location.reload();
    });
    title.value = '';
    author.value = '';
  }
};

export const deleteBook = (el) => {
  if (el.classList.contains('remove-books')) {
    el.parentElement.remove();
  }
};
