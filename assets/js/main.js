const imgCol = document.querySelectorAll('[data-div-info]');
const titles = document.querySelectorAll('[data-title-info]');
let leftOverlay = document.createElement('div');
let rightOverlay = document.createElement('div');
let divInfo = '';
let titleInfo = '';
let linkInfo = '';
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
  leoCode: 'https://github.com/kurtreyn/ecommerce',
  leoPage: 'https://leodesigns.netlify.app',
  reactNostalgiaCode: `https://github.com/kurtreyn/knowNostalgia-react`,
  reactNostalgiaPage: `https://knownostalgia-react.netlify.app/`,
  soChillCode: `https://github.com/kurtreyn/sochill-media`,
  soChillPage: `https://sochillmedia.netlify.app`,
  feExJan22Code: `https://github.com/kurtreyn/fetch-rewards-kurt`,
  feExJan22Page: `https://frontendtakehomekurtreynolds.netlify.app`,
  ecomReactCode: `https://github.com/kurtreyn/react-ecommerce-app`,
  ecomReactPage: `https://kurt-ecommercestore-react.netlify.app`,
  iGramCode: `https://github.com/kurtreyn/igram`,
  iGramPage: `https://expo.dev/@kurtreyn/igram`,
  burnCodeFront: `https://github.com/kurtreyn/burn-after-reading-frontend`,
  burnCodeBack: `https://github.com/kurtreyn/burn-after-reading-server`,
  burnPage: `https://burn-after-reading.netlify.app`,
};

function createOverlay(codeLink, pageLink) {
  // let linkInfo = this.getAttribute('data-div-info');
  // console.log(this);

  leftOverlay.innerHTML = ` <div class="left-overlay"> <a href="${codeLink}" target="_blank">View Code</a> </div> `;
  rightOverlay.innerHTML = ` <div class="right-overlay"> <a href="${pageLink}" target="_blank">View Page</a> </div> `;
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
      } else if (divInfo === 'leo') {
        code = linkList.leoCode;
        page = linkList.leoPage;
      } else if (divInfo === 'react-nostalgia') {
        code = linkList.reactNostalgiaCode;
        page = linkList.reactNostalgiaPage;
      } else if (divInfo === 'soChill') {
        code = linkList.soChillCode;
        page = linkList.soChillPage;
      } else if (divInfo === 'fe-exercise-jan22') {
        code = linkList.feExJan22Code;
        page = linkList.feExJan22Page;
      } else if (divInfo === 'ecom-react') {
        code = linkList.ecomReactCode;
        page = linkList.ecomReactPage;
      } else if (divInfo === 'iGram') {
        code = linkList.iGramCode;
        page = linkList.iGramPage;
      } else if (divInfo === 'burnFront') {
        code = linkList.burnCodeFront;
        page = linkList.burnPage;
      } else if (divInfo === 'burnBack') {
        code = linkList.burnCodeBack;
        page = linkList.burnPage;
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
  leoImg: './assets/images/leo-designs-960x540.png',
  leoTitle: 'Leo Designs',
  leoText:
    'A fictional e-commerce site. The site is built with vanilla JavaScript, SCSS, and Bootstrap 5. The site uses a custom built API which I made on Contentful.',
  reactNostalgiaImg: `./assets/images/react-knownostalgia-960x540.png`,
  reactNostalgiaTitle: `Know(Nostalgia): React Version`,
  reactNostalgiaText: `This app was made using React as part of a continuing Coding Bootcamp project. The app features the same functionality as the Bootstrap version.`,
  soChillImg: `./assets/images/sochill-media960x540.png`,
  soChillTitle: `soChill Media`,
  soChillText: `Built with React, soChill Media uses React Bootstrap for the layout. User authentication is done through Firebase using sign in with Google. Users are able to sign in with their Google account and make posts.`,
  feExJan22Img: `./assets/images/fe-exercise-jan-2022-960x540.png`,
  feExJan22Title: `Front End Exercise`,
  feExJan22Text: `Made using React and React Bootstrap. This utilizes an API to fetch data to populate the form's occupation and state fields. As well, users are able to post data back to the server. The app also uses form control to prevent the submit if predetermined criteria was not met. Error messages are displayed on screen as well as a message for successfully submitting the form. Reusable components were made for the form inputs.`,
  ecomReactImg: `./assets/images/ecom-react960x540.png`,
  ecomReactTitle: `E-Commerce with Checkout`,
  ecomReactText: `Created with React and using CommerceJS and Stripe for payment authorization. Products are fetched with the CommerceJS API. The backend payment support is handled with Stripe.`,
  iGramImg: `./assets/images/iGram.png`,
  iGramTitle: `iGram`,
  iGramText: `Developed using React Native, Expo and Firebase. This app is an Instagram clone which has fully functioning image posting, taking and uploading photos, registration, authentication, and ability to change the user's profile picture.`,
  burnFrontImg: `./assets/images/burn-after-reading.png`,
  burnFrontTitle: `Burn After Reading: Front End`,
  burnFrontText: `Created using React and React Bootstrap. This is a front-end part of the app. The app allows users to create a new message and post it to the server. When the message is clicked, a unique URL opens up, and once the user clicks to return to the home page, the message automatically deletes from the server.`,
  burnBackImg: `./assets/images/burn-server.png`,
  burnBackTitle: `Burn After Reading: Back End`,
  burnBackText: `Created using Node.js and Express. This is a back-end part of the app. The app allows users to create a new message which the server saves to an online MongoDB database which allows GET, POST, and DELETE requests.`,
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
    case 'leo':
      modalImg.src = sourceList.leoImg;
      modalTitle.innerText = sourceList.leoTitle;
      modalText.innerText = sourceList.leoText;
      modalCodeBtn.href = linkList.leoCode;
      modalPageBtn.href = linkList.leoPage;
      break;
    case 'react-nostalgia':
      modalImg.src = sourceList.reactNostalgiaImg;
      modalTitle.innerText = sourceList.reactNostalgiaTitle;
      modalText.innerText = sourceList.reactNostalgiaText;
      modalCodeBtn.href = linkList.reactNostalgiaCode;
      modalPageBtn.href = linkList.reactNostalgiaPage;
      break;
    case 'soChill':
      modalImg.src = sourceList.soChillImg;
      modalTitle.innerText = sourceList.soChillTitle;
      modalText.innerText = sourceList.soChillText;
      modalCodeBtn.href = linkList.soChillCode;
      modalPageBtn.href = linkList.soChillPage;
      break;
    case 'fe-exercise-jan22':
      modalImg.src = sourceList.feExJan22Img;
      modalTitle.innerText = sourceList.feExJan22Title;
      modalText.innerText = sourceList.feExJan22Text;
      modalCodeBtn.href = linkList.feExJan22Code;
      modalPageBtn.href = linkList.feExJan22Page;
      break;
    case 'ecom-react':
      modalImg.src = sourceList.ecomReactImg;
      modalTitle.innerText = sourceList.ecomReactTitle;
      modalText.innerText = sourceList.ecomReactText;
      modalCodeBtn.href = linkList.ecomReactCode;
      modalPageBtn.href = linkList.ecomReactPage;
      break;
    case 'iGram':
      modalImg.src = sourceList.iGramImg;
      modalTitle.innerText = sourceList.iGramTitle;
      modalText.innerText = sourceList.iGramText;
      modalCodeBtn.href = linkList.iGramCode;
      modalPageBtn.href = linkList.iGramPage;
      break;
    case 'burnFront':
      modalImg.src = sourceList.burnFrontImg;
      modalTitle.innerText = sourceList.burnFrontTitle;
      modalText.innerText = sourceList.burnFrontText;
      modalCodeBtn.href = linkList.burnFrontCode;
      modalPageBtn.href = linkList.burnFrontPage;
      break;
    case 'burnBack':
      modalImg.src = sourceList.burnBackImg;
      modalTitle.innerText = sourceList.burnBackTitle;
      modalText.innerText = sourceList.burnBackText;
      modalCodeBtn.href = linkList.burnBackCode;
      modalPageBtn.href = linkList.burnBackPage;
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

modalCodeBtn.addEventListener('click', closeModal);
modalPageBtn.addEventListener('click', closeModal);

for (const img of imgCol) {
  img.addEventListener('click', showModal);
}

closeModalBtn.addEventListener('click', closeModal);

window.onclick = function (e) {
  if (e.target === modalWindow) {
    closeModal();
  }
};
