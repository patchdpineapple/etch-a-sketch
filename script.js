const container = document.querySelector('#grid-container');
const clear = document.querySelector('#clear');
const btnClear = document.createElement('div');
btnClear.textContent = 'erase grid';
btnClear.classList.add('clearstyle');
btnClear.addEventListener('click', clearGrid);


clear.appendChild(btnClear);



let item = [];

window.onload = function () {
    setGrid(16);
}


function setGrid(num) {

    if (num > 100) return;

    item = new Array();
    let numGrid = num * num;
    container.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr)`)


    for (let x = 0; x < numGrid; x++) {
        item[x] = document.createElement('div');
        // item[x].textContent = '' + (x + 1);
        item[x].classList.add('items');
        item[x].addEventListener('mouseover', () => { item[x].classList.add('hovering'); });
        container.appendChild(item[x]);

    }

}

function clearGrid() {
    let gridno = 0;

    do {
        gridno = Number(prompt('Drawing erased. Enter grid size(upto 100)', ''));
    } while (gridno > 100)

    for (let x = 0; x < item.length; x++) {
        container.removeChild(item[x]);
    }

    setGrid(gridno);

}

