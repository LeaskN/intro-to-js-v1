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

for(let i = 0; i < 3; i++){
    const holdDiv = document.createElement('div');
    holdDiv.innerText = "Click meh"
    document.body.appendChild(holdDiv);
}

const allDivs = document.querySelectorAll('div');

/* This refers to the element that you are calling 
   the addEventListener function on */
function changeColor(){
    this.style.backgroundColor = "yellow";
}

for(let i = 0; i < allDivs.length; i++){
    allDivs[i].addEventListener("click", changeColor);
}