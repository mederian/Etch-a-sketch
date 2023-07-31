
let size = 16;

//a div that holds the grid:
const gridholder = document.querySelector('#gridHolder');
const grid = new Array;

for(let i = 0; i < (size*size); i++){
    grid[i] = document.createElement('div');
    grid[i].setAttribute('class', 'gridElement');
    gridholder.append(grid[i]);
}
// Create 16x16=256 divs for the grid (This should be changeable, 
// so number of grid can be changed, but size of the containergrid is the same.)
// So size of the grid elements should be flexible.. 

// The divs should appear in a grid, use flexbox

// Add mouseEnter and mouseLeave listener event for each of the divs. 
// function connected to the eventlistener will change the colour of the grid element

// Border and margins can mess up the grid



