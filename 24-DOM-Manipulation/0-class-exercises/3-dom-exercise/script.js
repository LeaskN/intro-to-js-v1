// Selecting the body element from index.html
const bodyElement = document.querySelector('body')

// setting an attribute of 'style' to the body tag and adding a background color of pink
bodyElement.setAttribute('style', 'background-color:pink')

// Created h1 element
const h1Element = document.createElement('h1')

// Appending the h1 element to the body element as a child
bodyElement.appendChild(h1Element)

// adding text to the h1 element 
h1Element.innerHTML = 'Hello World'

// reassigning the background color of the body element to yellow
bodyElement.style.backgroundColor = "yellow"

// setting a new style attribute to the h1 element
h1Element.setAttribute('style', 'color: purple')

// adding font size to the h1Element
h1Element.style.fontSize = '70px'

/* -------------------------------------------------------------------------- */

// creating a button element
const boxButton = document.createElement('button')

// appening the button element to the body element
bodyElement.appendChild(boxButton);

// adding text to the boxButton
boxButton.innerHTML = 'ADD'

// adding a class attribute to boxButton
boxButton.classList.add('button-styling')

/* -------------------------------------------------------------------------- */

// creating a button element
const deleteButton = document.createElement('button')

// added the button element to the body element
bodyElement.appendChild(deleteButton)

// adding text to the button element
deleteButton.innerHTML = 'DELETE'

// adding a class attribute of style to the button element
deleteButton.classList.add('button-styling')

/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNTION

let i = 0;

function addBox (){
    let box = document.createElement('div')
    box.classList.add('box')
    box.setAttribute('id', i)
    box.innerHTML = i
    box.style.fontSize = '50px'
    bodyElement.appendChild(box)

    i++
}

boxButton.addEventListener('click', addBox)

/* -------------------------------------------------------------------------- */
// DELETE BUTTON FUNCTION 

function deleteBox (){
    let toDelete = document.getElementById(i-1)
    toDelete.parentNode.removeChild(toDelete);

    i--
}

deleteButton.addEventListener('click', deleteBox)