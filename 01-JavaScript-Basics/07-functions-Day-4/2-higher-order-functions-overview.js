/* 
    Higher Order Functions
        Another overview of the power of functions:
            ABSTRACTION -
                When communicating with one another, we might easily take for granted the amount assumptions
                we make. For instance, if you live in a household with a dishwasher, and your significant
                other / your parent asks you to "clean the dishes", you comprehend right away that that means putting
                the dirty dishes in the dishwasher and running it. Then there is the process of letting them dry and
                putting them away etc. One level of assumption you're making is the understanding of running the 
                dishes in a dishwasher. 
        
                When programming, you have to be A LOT more explicit and begin by defining 
                the innerworkings of that dishwasher to begin with, for example. The concept of "abstracting" away details
                in order to communicate concepts, is a part of writing code. 

                Like mentioned earlier - we can achieve abstraction with functions, and reuse those functions throughout 
                our program.
            
    Ok, but can you define a higher order function?
        A higher order function, are functions that can accept other functions as arguments and / or return functions
        as outputs.

    VOCABULARY:
        Callback Function
        Arrow syntax
        Abstraction
        Composability
        Iterator methods

*/


// Using an arrow function for our example (I'm creating a higher order function) that takes a function as a parameter:
const calculateThis = (num1, num2, func) => {
    const calculation = func(num1, num2);
    return calculation;
}

// This is how you would write the above function the classic way
/* 
    function calculateThis(){

    }
*/

// Once I've defined my higher order function I can use it with other functions I've created...

function multiplyTwoNumbers(num1, num2){
    return num1 * num2;
}

const divideTwoNumbers = (num1, num2) => {
    return num1 / num2;
}

// Now, I'm going to use my higher order function...

console.log(calculateThis(5, 10, multiplyTwoNumbers));


// You can also create a higher order function that returns a function...

const returnFunction = (func) => {
    return func;
}

// Here I'm storing divideOneAnother into the variable holdfunc VIA returnFunction()
const holdfunc = returnFunction(divideTwoNumbers);

console.log(holdfunc(10, 2), "<-- holding...");


// MAYBE A BETTER EXAMPLE OF HOW YOU COULD USE A HIGHER ORDER FUNCTION??
    /* 
        Note: we are using what's called the "spread operator" below... 
         If you have an enumerable
    */

    /* 
        So the idea behind this function is that I don't like having to write console.log() for every thing I want to log to
        the terminal, also, printing to the terminal makes more sense to me
    */

const print = (func, ...parameters) => {
    console.log(func(...parameters))
}

print(multiplyTwoNumbers, 20, 30);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    An example of ABSTRACTION / ABSTRACTING REPETITIVE CODE / COMPOSABILITY
*/

const anArray = [5, 3, 4, 2, 10, 11];

    // We'll use these function to illustrate composability...
const multiplyBy5 = (num) => {
    return num * 5;
}
    /* 
        If the idea is to create a function that takes in ANOTHER FUNCTION and applies it to each element in an array
        and then returns a new function...
    */

    // This is an example of a higher order function because it can take in a function as an argument
const mapOver = (arr, func) => {
    const newArray = [];
    for(let i = 0; i < arr.length; i++){
        let currentValue = arr[i]
        newArray.push(func(currentValue, i, arr));
    }
    return newArray;
}

// multipyBy5 becomes a callback function as soon as I pass it into mapOver
console.log(mapOver(anArray, multiplyBy5), "<--- here we are");

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Iterator methods - for Arrays (they are higher order functions)
*/

    /* 
        Array.map() 
            - (MDN) The map() method creates a new array populated with the results of calling a provided 
                function on every element in the calling array.
    */


const myArray = [5, 3, 4, 2, 10, 11];

const storeArray = myArray.map(cur => cur * 2);

console.log(storeArray, "<--- stored array");

// Another example of map (to illustrate how passing in a function can work with higher order functions)
        
    // Here we are creating an array for our example
const myArray2 = [5, 3, 4, 2, 10, 11];
    // Here we are defining a function using arrow syntax (and omitting parentheses & using implicit return)
const savedFunction = cur => cur * 2;
    /* 
        Here we are passing in a function definition, and the inner workings of the map method (iterator) is reading it
        and passing in each element from the calling array INTO that function definition.
    */
const storeArray2 = myArray2.map(savedFunction);

console.log(storeArray2, "<--- stored array 2");


    /* Array.forEach() */
    /* Array.filter() */
    /* Array.reduce() */
    
    