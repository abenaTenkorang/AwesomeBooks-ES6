// eslint-disable-next-line import/no-mutable-exports
export let booksArr = [];

export const CheckLocalStorage = () => {
  booksArr = JSON.parse(localStorage.getItem('booksArr')) || [];
};