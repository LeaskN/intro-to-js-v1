const dog = {
    name: 'Maggie',
    species: 'Dog',
    breed: 'Pitbull',
    vocabulary: "Bark, Bark... GRRRR",
    saySomething: function() {
        console.log(this.vocabulary)
    }
}

dog.saySomething()

for(let i = 0; i < 10; i++){
    const holdDiv = document.createElement('div');
    holdDiv.innerText = "Click meh"
    holdDiv.style.borderWidth = "1px"
    document.body.appendChild(holdDiv);
}

const allDivs = document.querySelectorAll('div');

/* This refers to the element that you are calling 
   the addEventListener function on */
function changeColor(e){
    console.log(e, "<--- event")
    e.target.innerText = "clicked"
    this.style.backgroundColor = "yellow";
}

for(let i = 0; i < allDivs.length; i++){
    allDivs[i].addEventListener("click", changeColor);
}

function increaseSize(){
    for(let i = 0; i < allDivs.length; i++){
        console.log(`${parseInt(allDivs[i].style.borderWidth) + 1}px`)
        allDivs[i].style.borderWidth = `${parseInt(allDivs[i].style.borderWidth) + 1}px`;
    }
}

function decreaseSize(){
    for(let i = 0; i < allDivs.length; i++){
        allDivs[i].style.borderWidth = `${parseInt(allDivs[i].style.borderWidth) - 1}px`;
    }
}

document.body.addEventListener("wheel", (e) => {
    if(e.wheelDelta > 0){
        increaseSize();
    } else if(e.wheelDelta < 0){
        decreaseSize();
    }
})