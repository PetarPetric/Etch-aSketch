let containerJS = document.getElementById('container');
let element = document.getElementsByClassName('manyDivs');

function createGrid(cellNumber) {
for ( let i = 0; i < cellNumber*cellNumber ; i++ ) {
  const newDivs = document.createElement('div');
  newDivs.classList.add('manyDivs');
  
  //even listener added here
  newDivs.addEventListener('mouseover', function(){
  newDivs.style.background = 'black';});
  containerJS.appendChild(newDivs);

}

// dont need this can put EventListener 
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
