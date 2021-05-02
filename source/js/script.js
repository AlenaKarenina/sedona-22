const menu = document.querySelector ('.main-nav');
const buttonMenu = document.querySelector ('.main-nav__toggle');

menu.classList.remove('main-nav--nojs');

buttonMenu.addEventListener('click', function(evt){
  evt.preventDefault();
  buttonMenu.classList.toggle('main-nav__toggle--opened');
  menu.classList.toggle('main-nav--opened');
});
