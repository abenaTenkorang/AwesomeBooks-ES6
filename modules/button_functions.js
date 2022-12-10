const ListMenu = document.querySelector('.list');
const AddMenu = document.querySelector('.add');
const ContactMenu = document.querySelector('.contactmenu');

ListMenu.addEventListener('click', () => {
  document.querySelector('.awesome-books').style.display = 'block';
  document.querySelector('.new-book').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
});
AddMenu.addEventListener('click', () => {
  document.querySelector('.awesome-books').style.display = 'none';
  document.querySelector('.new-book').style.display = 'block';
  document.querySelector('.contact').style.display = 'none';
});

ContactMenu.addEventListener('click', () => {
  document.querySelector('.awesome-books').style.display = 'none';
  document.querySelector('.new-book').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';
});