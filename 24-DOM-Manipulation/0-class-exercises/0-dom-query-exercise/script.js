/*
    Attach me to the html.
*/

// Grab the second element that has the text Hello
console.log(document.querySelector("#first"));
console.log(document.querySelector("h1"));

// Grab and console.log the text in the h1 that says 'Good Afternoon'
console.log(document.querySelector("h1:nth-child(4)"), "<---");

// Grab the h1 with the text that says "Catch me if you can" - console.log it.
console.log(document.querySelector(".catch-me"), "<-- catch me");

// Grab the span element and change the text to "Got ya"
document.querySelector("span").innerText = "Got ya"
            // OR 
const spanTag = document.querySelector("span");
spanTag.innerHTML = "Got ya 2";