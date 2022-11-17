// Mobile section
const toggleButton = document.getElementsByClassName('show-menu')[0];
const closeButton = document.getElementsByClassName('x-icon')[0];
const welcomeTitle = document.getElementsByClassName('welcome')[0];
const navbarlinks = document.getElementsByClassName('navbar-links')[0];
const navElements = document.getElementsByClassName('navbar-links');

let flag = false;

function toggleBtn() {
  if (flag) {
    navbarlinks.classList.toggle('active');
    welcomeTitle.style.display = 'block';
    closeButton.style.display = 'none';
    toggleButton.style.display = 'block';
    flag = false;
  } else {
    navbarlinks.classList.toggle('active');
    welcomeTitle.style.display = 'none';
    closeButton.style.display = 'block';
    toggleButton.style.display = 'none';
    flag = true;
  }
}

toggleButton.addEventListener('click', toggleBtn);
closeButton.addEventListener('click', toggleBtn);

Array.from(navElements).forEach((element) => {
  element.addEventListener('click', toggleBtn);
});

// Recent works

const projectData = {
  sourceImg: 'imagPlaceholder.png',
  frameworks: ['Ruby', 'CSS', 'JavaScript'],
  description: 'Keeping track of hundreds of components',
  details:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
  seeSource: '#',
  seeLive: '#',
};

const seeProject = document.getElementsByClassName('see-prj');
const popup = document.getElementsByClassName('project-popup')[0];
popup.innerHTML = `
      <header>
        <button class="close">&times;</button>
        <div class="img-placeholder"></div>
        <h1 class="font-fam"> ${projectData.description}</h1>
        <div class="prj-lang dflex font-fam">
          <button class="lang">${projectData.frameworks[0]}</button>
          <button class="lang">${projectData.frameworks[1]}</button>
          <button class="lang">${projectData.frameworks[2]}</button>
        </div>
      </header>
      <section class="dets">
        <h2 class="font-fam">
        ${projectData.details}
        </h2>
      </section>
      <footer class="pop-buttons dflex">
        <a href="${projectData.seeSource}"class="green-back font-fam btn-container">
          <button class="btn">See Live</button>
          <img src="images/see live icon.svg" alt="see source" />
        </a>
        <a href="${projectData.seeSource}"" class="green-back font-fam">
          <button class="btn">See source</button>
          <img src="images/Vector.png" alt="see live" />
        </a>
      </footer>
  `;

const overlay = document.querySelector('.overlay');

function displayPopup() {
  popup.style.display = 'flex';
  overlay.classList.toggle('active');
}

Array.from(seeProject).forEach((element) => {
  element.addEventListener('click', displayPopup);
});

const closeIcon = document.querySelector('.close');

function closePoup() {
  popup.style.display = 'none';
  overlay.classList.toggle('active');
}

closeIcon.addEventListener('click', closePoup);
