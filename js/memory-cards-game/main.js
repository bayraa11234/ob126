

const puzzle = [
    [0, 1, 2, 3],
    [5, 6, 7, 8],
    [0, 1, 2, 3],
    [5, 6, 7, 8]
];

let found = 0;
let flippedItems = 0;
const gameTarget = document.querySelector('#gameTarget');


function getTile(value){
    const tile = document.createElement('li');
    const tileFont = document.createElement('div');
    tileFont.innerHTML = value;
    tileFont.classList.add('front');
    tile.appendChild(tileFont);
    const tileBack = document.createElement('div');
    tileBack.classList.add('back');
    tile.appendChild(tileBack);

    tile.addEventListener('click', function () {
        if (tile) {
          tile.classList.add('active');
        }
    });
    return tile;
}

for(let row = 0; row<puzzle.length; row++){
    const rowItems = puzzle[row];
    for(let col = 0;col <rowItems.length; col++){
        gameTarget.appendChild(getTile(rowItems[col]));
    }
}console.log(puzzle[0]);
