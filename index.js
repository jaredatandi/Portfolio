// main JavaScript
const toggleButton = document.getElementsByClassName('show-menu')[0];
const closeButton = document.getElementsByClassName('x-icon')[0];
const welcomeTitle = document.getElementsByClassName('welcome')[0];
const navbarlinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarlinks.classList.toggle('active');
  welcomeTitle.style.display = 'none';
  closeButton.style.display = 'block';
  toggleButton.style.display = 'none';
});

closeButton.addEventListener('click', () => {
  navbarlinks.classList.toggle('active');
  welcomeTitle.style.display = 'block';
  closeButton.style.display = 'none';
  toggleButton.style.display = 'block';
});
