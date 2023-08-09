
let size = 5;
const textSizeInput = document.querySelector('#sizeInput');
//a div that holds the grid:
const gridholder = document.querySelector('#gridHolder');
const grid = new Array;

// Create 16x16=256 divs for the grid (This should be changeable, 
// so number of grid can be changed, but size of the containergrid is the same.)
createGrid();
function createGrid(){
    console.log("Creating grid with size: " + size);

    //CSS Change value of css to size..
    //    grid-template-columns: repeat(size, 2fr);
    //    grid-template-rows: repeat(size, 2fr);
    
    for(let i = 0; i < (size*size); i++){
        grid[i] = document.createElement('div');
        grid[i].setAttribute('class', 'gridElement');
        gridholder.append(grid[i]);
    }   
    
    grid.forEach((element) => {
        //element.addEventListener('click', clickTester);
        element.addEventListener('mouseover', changeColor);
        
        //Blocked this out, 
        //element.addEventListener('transitionend', RemoveTransition);
    })
}
function deleteGrid(){
    console.log("Deleting grid");
    while (gridholder.hasChildNodes()) {
        gridHolder.removeChild(gridHolder.lastChild);
    }
}

function clickTester() {
    console.log("Click is working");
}
function changeColor(){
    this.classList.add('gridElementChanged');
}
function RemoveTransition(){
    this.classList.remove('gridElementChanged');
}
function sizeRedo(){
    if(size != textSizeInput){
        //if textSizeInput is a number
        //if textSizeInput is less than 101
        //change size to textSizeInput
        size = 25;
        deleteGrid();
        createGrid();
    }    
}



textSizeInput.addEventListener('change', sizeRedo);

// Add mouseEnter and mouseLeave listener event for each of the divs. 
// function connected to the eventlistener will change the colour of the grid element

// Border and margins can mess up the grid



