// main JavaScript
const menu = document.querySelector('.mobile-menu');
const menuItem = document.querySelectorAll('.menu-item');
const menuIcon = document.querySelector('.show-menu');
const closeIcon = document.querySelector('.x-icon');
const hamburger = document.querySelector('.ham-menu');

function toggleMenu() {
  if (menu.classList.contains('mobile-menu')) {
    menu.classList.remove('mobile-menu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('mobile-menu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}
hamburger.addEventListener('click', toggleMenu);

menuItem.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

// write a function
