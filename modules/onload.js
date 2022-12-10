// eslint-disable-next-line import/no-mutable-exports
export let booksArr = [];

export const CheckLocalStorage = () => {
  if (localStorage.getItem('booksArr')) {
    booksArr = JSON.parse(localStorage.getItem('booksArr'));
  }
};