let containerJS = document.getElementById('container');
let element = document.getElementsByClassName('manyDivs');

function createGrid(cellNumber) {
for ( let i = 0; i < cellNumber*cellNumber ; i++ ) {
  const newDivs = document.createElement('div');
  newDivs.classList.add('manyDivs');
  
  // Eventlistener added here
  newDivs.addEventListener('mouseover', function(){
  newDivs.style.background = 'black';});
  containerJS.appendChild(newDivs);

}

// Dont need this, can put EventListener up
/*
for(let i = 0; i < element.length; i++) {
  element[i].addEventListener('mouseover', function(){
    this.style.background = 'black';    
    });
  } */
}

createGrid(16);

function btnGrid() {
  let grid = window.prompt('Please enter grid size, maximum is 64');
  let resetNew = document.getElementById('container');
  let columnRowCSS = getComputedStyle(document.documentElement).getPropertyValue('--CSSgrid');
  resetNew.innerHTML = "";
  document.documentElement.style.setProperty('--CSSgrid', grid);
  createGrid(grid);
}

document.querySelector('.new-grid').addEventListener('click', btnGrid);

// colorful grid function
function getRandomRgb() {
  let r = Math.floor(Math.random()* 255);
  let g = Math.floor(Math.random()* 255);
  let b = Math.floor(Math.random()* 255);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'; 
}

//
function createRGB(cellNumber) {
  for ( let i = 0; i < cellNumber*cellNumber ; i++ ) {
    const newDivs = document.createElement('div');
    newDivs.classList.add('manyDivs');
    //another event listener here
    newDivs.addEventListener('mouseover', function(){
    newDivs.style.background = getRandomRgb();
    })
    containerJS.appendChild(newDivs);
  }
}

function btnColorful() {
  let grid = window.prompt('Please enter grid size, maximum is 64');
  let resetNew = document.getElementById('container');
  let columnRowCSS = getComputedStyle(document.documentElement).getPropertyValue('--CSSgrid');
  resetNew.innerHTML = "";
  document.documentElement.style.setProperty('--CSSgrid', grid);
  createRGB(grid);
}

document.querySelector('.new-colorful').addEventListener('click',btnColorful);