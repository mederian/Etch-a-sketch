const maxSize = 100;
let size = 40;
let colormode = "plain";
let color = "#000000"

const gridLabel = document.querySelector('#gridLabel');
const sliderSizeInput = document.querySelector('#sizeInputSlider');
const colorPick = document.querySelector('#favcolor');
sliderUpdateData(size);
const gridholder = document.querySelector('#gridHolder');
const grid = new Array;
sliderSizeInput.addEventListener('change', sizeRedo);
sliderSizeInput.addEventListener('input', sliderMouseDown);

const randomColorButton = document.querySelector('#randomColorButton');
randomColorButton.addEventListener('click', setRandomColorMode);
const singleColorButton = document.querySelector('#singleColorButton');
singleColorButton.addEventListener('click', setSingleColorMode);

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', clearGrid);

const eraseButton = document.querySelector('#eraseButton');
eraseButton.addEventListener('click', setColorToBackground);

/*
singleColorButton">Single Color</button>
                <button id="randomColorButton"
*/
colorPick.addEventListener('change', pickNewColor);
color = colorPick.value;


createGrid();


function setColorToBackground(){
    setSingleColorMode();

    const mainSection = document.querySelector('#gridHolder');
    const styleMain = getComputedStyle(mainSection);
    const mainColor = styleMain.getPropertyValue('background-color');
    console.log(mainColor);
    color = mainColor;

    const toRGBArray = rgbStr => rgbStr.match(/\d+/g).map(Number);
    let newRGBHex = toRGBArray(mainColor);
    const rgb2hex = rgbToHex(newRGBHex[0], newRGBHex[1], newRGBHex[2]);
    colorPick.value = rgb2hex;
}
function rgbToHex(r, g, b) {
    console.log(r + " " + g + " " + b);
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
  }
function clearGrid(){
    deleteGrid();
    createGrid();
}

function pickNewColor(){
    console.log(colorPick.value);
    color = colorPick.value;
}
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
    if(colormode === "plain"){
        this.classList.add('gridElementChanged');
        this.setAttribute('style', `background-color: ${color};`);
    }
    if(colormode === "random"){
        this.classList.add('gridElementChanged');
        this.setAttribute('style', `background-color: ${getRandomColor()};`);
    }
    
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

function setRandomColorMode(){
    colormode = 'random';
}

function getRandomColor(){
    return '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
}

function setSingleColorMode(){
    colormode = 'plain';
}