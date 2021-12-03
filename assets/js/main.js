'use strict';

const imgCol = document.querySelectorAll('.img-col');
// let leftOverlay = document.createElement('div');
// let rightOverlay = document.createElement('div');
const leftOverlay = document.querySelectorAll('.left-overlay');
const rightOverlay = document.querySelectorAll('.right-overlay');

function mousedOver() {
  console.log('mouse over');
}

// function createOverlay() {
//   leftOverlay.innerHTML = `
//     <div class="left-overlay">
//         <a href="#">View Code</a>
//     </div>
//     `;
//   rightOverlay.innerHTML = `
//     <div class="right-overlay">
//         <a href="#">View Page</a>
//     </div>
//     `;
//   addOverlay();
// }

function showOverlay() {
  leftOverlay.classList.remove('overlay-hide');
  rightOverlay.classList.remove('overlay-hide');
}

// function addOverlay() {
//   imgCol.appendChild(leftOverlay);
// }

for (const ic of imgCol) {
  ic.addEventListener('mouseover', showOverlay);
}

// imgCol.addEventListener('mouseover', mousedOver);
