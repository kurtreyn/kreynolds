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
    } else {
      // imgCol[i].removeChild(leftOverlay);
      // imgCol[i].removeChild(rightOverlay);
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
const modalImg = document.querySelector('.modal-img');
const modalText = document.querySelector('.modal-text');

function showModal() {
  let selection = this.getAttribute('data-div-info');
  console.log(selection);

  // switch (selection) {
  //   case 'nostalgia':
  //     modalImg = './assets/images/know-nostalgia-960x540.jpg';
  //     modalText = 'text';
  //     break;
  // }

  modalWindow.style.display = 'block';
  modalWindow.classList.add('show');
}

function closeModal() {
  modalWindow.style.display = 'none';
  modalWindow.classList.remove('show');
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
