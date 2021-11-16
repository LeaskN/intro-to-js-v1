console.log(document)

document.getElementById('test').innerHTML = 'Hello World'

let allH1s = document.querySelectorAll('h1')

console.log(allH1s)

function hit(event){
    console.log(event.target)
}

function change (){
    console.log('changed in console')
}

function addAllListeners (param){
    for (let i = 0; i < param.length; i++){
        console.log(param[i].innerHTML)
        if(param[i].innerHTML === 'World'){
            param[i].addEventListener('click', hit)
        } else {
            param[i].addEventListener('click', change)
        }
    }
}

addAllListeners(allH1s)















/* -------------------------------------------------------------------------- */

// Exercise

// Create a button in index.html
// style it a little bit: add width, height and color
// add an event listener on click - on click, console.log('hit')