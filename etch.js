
let size = 40;
const textSizeInput = document.querySelector('#sizeInput');
const gridholder = document.querySelector('#gridHolder');
const grid = new Array;
textSizeInput.addEventListener('change', sizeRedo);

createGrid();

function createGrid(){
    console.log("Creating grid with size: " + size);  
    for(let i = 0; i < (size*size); i++){
        grid[i] = document.createElement('div');
        gridHolder.setAttribute('style', `grid-template-columns: repeat(${size}, 2fr); grid-template-rows: repeat(${size}, 2fr);`);

        grid[i].setAttribute('class', 'gridElement');
        gridholder.append(grid[i]);
    }   
    
    grid.forEach((element) => {
        element.addEventListener('mouseover', changeColor);
        
        //Blocked this out as I misunderstood the assignment 
        //element.addEventListener('transitionend', RemoveTransition);
    })
}
function deleteGrid(){
    console.log("Deleting grid");
    while (gridholder.hasChildNodes()) {
        gridHolder.removeChild(gridHolder.lastChild);
    }
}

function changeColor(){
    this.classList.add('gridElementChanged');
}

function sizeRedo(){
    if(size != textSizeInput){
        console.log(textSizeInput.value);
        if(!isNaN(textSizeInput.value)){
            console.log("Setting size");
            size = textSizeInput.value;            
            deleteGrid();
            createGrid();
        } 
    }    
}

// Not in use
function RemoveTransition(){
    this.classList.remove('gridElementChanged');
}
