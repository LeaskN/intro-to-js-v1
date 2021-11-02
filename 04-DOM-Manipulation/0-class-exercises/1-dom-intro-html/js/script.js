console.log("Hello World");
// A static way of finding an element - can easily break
const ourH1 = document.body.children[0].children[0].innerText;
console.log(ourH1, "<--- our header!!");

// A more dynamic way of finding an element (and storing it)
const dynamicH1 = document.querySelector('h1');

// Lets grab the second div on our page
const secondDiv = document.querySelector('#num2');

console.log(secondDiv, "<--- our second div");

// Lets change the text of our h1
dynamicH1.innerText = "Click here to hide The Image";

// Lets change the styling of our h1
dynamicH1.style.backgroundColor = "blue";

const holdImage = document.querySelector("img");

document.addEventListener("click", (e) => {
    if(e.target === dynamicH1){
        holdImage.style.display = "none";       
    }
})