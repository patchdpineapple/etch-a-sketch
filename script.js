const container = document.querySelector('#container');
let draw1 = document.createElement('div');
let draw2 = document.createElement('div');
let draw3 = document.createElement('div');

draw1.classList.add('drawdiv');
draw2.classList.add('drawdiv');
draw3.classList.add('drawdiv');

draw1.addEventListener('hover', () => {draw1.classList.add('hovering');});


container.appendChild(draw1);
container.appendChild(draw2);
container.appendChild(draw3);

