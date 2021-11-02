/*
     Different ways to write a function
*/

// A function declaration
function myFunction(param){
    return param
}

// Arrow function
const myFunction2 = (param) => {
    return param;
}

/*  
    With arrow functions you can omit certains parts of the syntax - ie -> if you have ONE parameter you can 
    omit the parentheses.

    You can also use whats called "implicit return" and omit the return keyword and actually return a value in one line
    WHILE ALSO omitting the curly braces.
 */

const myFunction3 = param => param / 2 * 2;
// VS
const myFunction4 = param => { return param / 2 * 2 };


// An anonymous arrow function
(param) => {
    return param;
}

// An immediately invoked function (it's defined and ran at the same time)
((param2) => {
    return param2;
})()

// An anonymous function declaration (you need to store it in a variable)
const myFunction3 = function (param){
    return param;
}



console.log(myFunction3(2), "<---");

