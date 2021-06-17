var $ = window.document;
var isOpen = 0;

// Burger
const burger = $.querySelector('.nav__burger');
// Navegación
const nav = $.querySelector('.nav__nav');

// Event Handler
burger.addEventListener('click', () => {
  if (isOpen === 0) {
    burger.classList.add('open');
    nav.classList.add('open');
    isOpen = 1;
  } else {
    burger.classList.remove('open');
    nav.classList.remove('open');
    isOpen = 0;
  }
});
