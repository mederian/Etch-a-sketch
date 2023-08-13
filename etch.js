const maxSize = 100;
let size = 40;
const gridLabel = document.querySelector('#gridLabel');
const sliderSizeInput = document.querySelector('#sizeInputSlider');
sliderUpdateData(size);
const gridholder = document.querySelector('#gridHolder');
const grid = new Array;
//textSizeInput.addEventListener('change', sizeRedo);
sliderSizeInput.addEventListener('change', sizeRedo);
sliderSizeInput.addEventListener('input', sliderMouseDown);

createGrid();

function sliderUpdateData(val){
    sliderSizeInput.value = val;
    gridLabel.innerText = val;
}

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
function sliderMouseDown(){
    gridLabel.innerText = this.value;
}

function sizeRedo(){
    let newSize = this.value
    if(size != newSize){
        if(!isNaN(newSize)){
            if(newSize > 0 && newSize <= 100){
                size = newSize;            
                deleteGrid();
                createGrid();
            }
        } 
    }    
}

// Not in use
function RemoveTransition(){
    this.classList.remove('gridElementChanged');
}
