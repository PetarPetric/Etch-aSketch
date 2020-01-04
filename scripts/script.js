let containerJS = document.getElementById('container');

for ( let i = 0; i < 16*16 ; i++ ) {
  const newDivs = document.createElement('div');
  newDivs.classList.add('manyDivs');
  containerJS.appendChild(newDivs);

}


  let element = document.getElementsByClassName('manyDivs');

  for(let i = 0; i < element.length; i++) {
    element[i].addEventListener('mouseover', function(){
      this.style.background = 'black';
    });
  }


