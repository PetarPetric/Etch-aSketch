let containerJS = document.getElementById('container');

for ( let i = 0; i < 16*16 ; i++ ) {
  const newDivs = document.createElement('div');
  newDivs.classList.add('manyDivs');
  containerJS.appendChild(newDivs);
}

