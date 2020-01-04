let containerJS = document.getElementById('container');
let element = document.getElementsByClassName('manyDivs');


for ( let i = 0; i < 16*16 ; i++ ) {
  const newDivs = document.createElement('div');
  newDivs.classList.add('manyDivs');
  containerJS.appendChild(newDivs);

}

for(let i = 0; i < element.length; i++) {
  element[i].addEventListener('mouseover', function(){
    this.style.background = 'black';    
  });
}


function newGrid() {
  let grid = window.prompt('Please enter grid size, maximum is 64');

}
