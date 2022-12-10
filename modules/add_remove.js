export const booklist = document.querySelector('.books-list');
export const title = document.querySelector('#Title');
export const author = document.querySelector('#Author');

export const addBooks = (booksArr) => {
  booklist.innerHTML = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < booksArr.length; i++) {
    booklist.innerHTML += `
      <div class="title-author"> 
        <p class="Title">"${booksArr[i].title}" by  ${booksArr[i].author}</p>
        <button class="button remove-books" id = "${i}">Remove</button>
      </div>
     `;
    title.value = '';
    author.value = '';
    title.focus();
  }
};

export const deleteBook = (el) => {
  if (el.classList.contains('remove-books')) {
    el.parentElement.remove();
  }
};
