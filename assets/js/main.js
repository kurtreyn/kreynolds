'use strict';

const imgCol = document.querySelectorAll('[data-div-info]');
const titles = document.querySelectorAll('[data-title-info]');
let leftOverlay = document.createElement('div');
let rightOverlay = document.createElement('div');
let divInfo = '';
let titleInfo = '';
let linkInfo = '';
// let hFourInfo = '';
let code = '';
let page = '';

const linkList = {
  nostalgiaCode: 'https://github.com/kurtreyn/knowNostalgia',
  nostalgiaPage: 'https://knownostalgia.netlify.app/index.html',
  calcCode: 'https://github.com/kurtreyn/calculatorapp',
  calcPage: 'https://kurtreyn.github.io/calculatorapp/',
  ideaCode: 'https://github.com/kurtreyn/photographysite',
  ideaPage: 'https://kurtreyn.github.io/photographysite/index.html',
  storyCode: 'https://github.com/kurtreyn/storyteller',
  storyPage: 'https://storytellerstudios.netlify.app',
};

function createOverlay(codeLink, pageLink) {
  // let linkInfo = this.getAttribute('data-div-info');
  // console.log(this);

  leftOverlay.innerHTML = `
    <div class="left-overlay">
        <a href="${codeLink}" target="_blank">View Code</a>
    </div>
    `;
  rightOverlay.innerHTML = `
    <div class="right-overlay">
        <a href="${pageLink}" target="_blank">View Page</a>
    </div>
    `;
}

function addOverlay() {
  divInfo = this.getAttribute('data-div-info');
  // console.log(this);

  for (let i = 0; i < imgCol.length; i++) {
    // console.log(imgCol[i]);
    titleInfo = titles[i].getAttribute('data-title-info');

    if (divInfo === titleInfo) {
      // console.log(`divInfo is: ${divInfo}`);
      // console.log(`titleInfo is: ${titleInfo}`);
      if (divInfo === 'nostalgia') {
        code = linkList.nostalgiaCode;
        page = linkList.nostalgiaPage;
      } else if (divInfo === 'idea') {
        code = linkList.ideaCode;
        page = linkList.ideaPage;
      } else if (divInfo === 'calc') {
        code = linkList.calcCode;
        page = linkList.calcPage;
      } else if (divInfo === 'story') {
        code = linkList.storyCode;
        page = linkList.storyPage;
      }
      createOverlay(code, page);
      imgCol[i].appendChild(leftOverlay);
      imgCol[i].appendChild(rightOverlay);
    }
  }
}

function removeOverlay() {
  divInfo = this.getAttribute('data-div-info');

  for (let x = 0; x < titles.length; x++) {
    titleInfo = titles[x].getAttribute('data-title-info');
    if (divInfo === titleInfo) {
      imgCol[x].removeChild(leftOverlay);
      imgCol[x].removeChild(rightOverlay);
    }
  }
}

for (const ic of imgCol) {
  ic.addEventListener('mouseenter', addOverlay);
  ic.addEventListener('mouseleave', removeOverlay);
}

// MODAL WINDOW CONTROLS
const modalWindow = document.querySelector('#modal-window');
const closeModalBtn = document.querySelector('.modal-close-button');
const modalTitle = document.querySelector('#modal-window-title');
const modalImg = document.querySelector('.modal-img-src');
const modalText = document.querySelector('.modal-text');
const modalCodeBtn = document.querySelector('.modal-code-btn');
const modalPageBtn = document.querySelector('.modal-page-btn');
const container = document.querySelector('.container');

const sourceList = {
  nostalgiaImg: './assets/images/know-nostalgia-960x540.jpg',
  nostalgiaTitle: 'Know(Nostalgia)',
  nostalgiaText: `Created as a coding bootcamp project. The site was built using Bootstrap, SCSS, and vanilla JavaScript. One highlight of the site is that it utilizes an API to access a movie database to allow users to search for movies. I have limited the search results to only display movies that were released between 1990 - 2009, as those are the decades the site is dedicated to.`,
  ideaImg: './assets/images/iDea-thumnail-960x540.jpg',
  ideaTitle: 'i.Dea Photography',
  ideaText: `A site made for a ficticious photography studio. This is the first site I made using Bootstrap. One of the highlights of this site is a custom made lightbox on the gallery page, which is controlled with jQuery.`,
  calcImg: './assets/images/calcApp-960x540.jpg',
  calcTitle: 'Calculator App',
  calcText: `This app was built with vanilla JavaScript, HTML & CSS.`,
  storyImg: './assets/images/storyteller-thumbnail-960x540.jpg',
  storyTitle: 'Storyteller Studios',
  storyText: `This is the first site I made when I started to learn coding. Made with HTML and CSS. The site is for my small film production group, Storyteller Studios.`,
};

function showModal() {
  let selection = this.getAttribute('data-div-info');
  // console.log(selection);
  container.classList.add('blur');

  switch (selection) {
    case 'nostalgia':
      modalImg.src = sourceList.nostalgiaImg;
      modalTitle.innerText = sourceList.nostalgiaTitle;
      modalText.innerText = sourceList.nostalgiaText;
      modalCodeBtn.href = linkList.nostalgiaCode;
      modalPageBtn.href = linkList.nostalgiaPage;
      break;
    case 'idea':
      modalImg.src = sourceList.ideaImg;
      modalTitle.innerText = sourceList.ideaTitle;
      modalText.innerText = sourceList.ideaText;
      modalCodeBtn.href = linkList.ideaCode;
      modalPageBtn.href = linkList.ideaPage;
      break;
    case 'calc':
      modalImg.src = sourceList.calcImg;
      modalTitle.innerText = sourceList.calcTitle;
      modalText.innerText = sourceList.calcText;
      modalCodeBtn.href = linkList.calcCode;
      modalPageBtn.href = linkList.calcPage;
      break;
    case 'story':
      modalImg.src = sourceList.storyImg;
      modalTitle.innerText = sourceList.storyTitle;
      modalText.innerText = sourceList.storyText;
      modalCodeBtn.href = linkList.storyCode;
      modalPageBtn.href = linkList.storyPage;
      break;
  }

  modalWindow.style.display = 'block';
  modalWindow.classList.add('show');
}

function closeModal() {
  modalWindow.style.display = 'none';
  modalWindow.classList.remove('show');
  container.classList.remove('blur');
}

for (const img of imgCol) {
  img.addEventListener('click', showModal);
}

closeModalBtn.addEventListener('click', closeModal);

window.onclick = function (e) {
  if (e.target === modalWindow) {
    closeModal();
  }
};
