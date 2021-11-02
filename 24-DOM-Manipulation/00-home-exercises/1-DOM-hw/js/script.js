// Add event listeners / handlers here...
// 1. Extra credit: make the border bigger on the selected circle
// 1. Extra credit: add a reset button - turns background white

// Grab references to buttons (li's)
const redBtn = document.querySelector("#redButton");
const blueBtn = document.querySelector("#skyblueButton");
const tealBtn = document.querySelector("#tealButton");
const yellowBtn = document.querySelector("#yellowButton");

// 1. EXTRA CREDIT
    // Make an array holding a reference to each button
// const allBtns = document.querySelectorAll("#color-switcher li");
    /* 
        An alternative way... I am doing this because I've already done the work
        of querying the document
    */
const allBtns = [redBtn, blueBtn, tealBtn, yellowBtn];

function resetBorders(){
    for(let i = 0; i < allBtns.length; i++){
        allBtns[i].style.borderWidth = "2px";
    }
}
/***************************************************************** */


// 2. EXTRA CREDIT

// Creating the button
const resetBtn = document.createElement('button');
resetBtn.style.width = "100px";
resetBtn.style.height = "25px";
resetBtn.innerText = "Reset";

// Grabbing a reference to the scheme-container elment
document.querySelector("#scheme-container").appendChild(resetBtn);

/* add event listener - when the reset button is clicked change
 the background color to white */

resetBtn.addEventListener("click", resetScheme);

function resetScheme(){
    resetBorders();
    // By default, a reference to the body element is already added to document as a property.         
    document.body.className = "reset-scheme";  
}
/***************************************************************** */


// For the second parameter of addEventListener I am passing a...
// CALLBACK FUNCTION!!!
redBtn.addEventListener("click", redScheme);
blueBtn.addEventListener("click", skyBlueScheme);
tealBtn.addEventListener("click", tealScheme);
yellowBtn.addEventListener("click", yellowScheme);

function redScheme() {
    resetBorders();
    this.style.borderWidth = "4px";
    document.querySelector("body").className = "red-scheme";
}

function skyBlueScheme(){
    resetBorders();
    this.style.borderWidth = "4px";
    document.querySelector("body").className = "skyblue-scheme";
}

function tealScheme(){
    resetBorders();
    this.style.borderWidth = "4px";
    document.querySelector("body").className = "teal-scheme";
}

function yellowScheme(){
    resetBorders();
    this.style.borderWidth = "4px";
    document.querySelector("body").className = "yellow-scheme";
}
