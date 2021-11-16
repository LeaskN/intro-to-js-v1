/* 
    What is a function
        A bundled set of instructions that you create and can call throughout your program.

    Why is it useful?
        Helps us build seperation of concern - ie. bundling a set of instructions that we might want to run more than once
        and so maybe we want to attach that behavior to a label.

    Think of a dishwasher
        You can manually wash the dishes - you run soap and water over a dish and scrub it. Or you can create a machine that
        does it for you in one go, AND allows you to even wash more than one dish at a time. We also know that whenever we need
        to wash our dishes, we can pass the dirty dishes into our "washingMachine" function.

    There is different syntax / ways of defining a function
        1. Function declaration: function greetWorld(){ console.log("Hello") }  <-- binds the function to a name
            This way of declaring a function is useful in that it takes advantage of a JavaScript default behavior where it
            stores the function in memory before any code executes (it's called "hoisting") - allowing you to call the 
            function before it's defined in the regular top-to-bottom sequence of your code.
        2. Function expressions: const myFunction = function(param){ return param }
            Unlike function declarations, function expressions are not hoisted. You are storing a reference to the function
            in the variable.
        3. Arrow functions: const myArrowFunction = param => param * 10;
            Or: const myArrowFunction2 = (param) => { return param * 10; }
            This is ES6 syntax. They remove the need to type out the keyword function. You can also omit certain things like the
            return statement and the {} if everything fits on one line (omit the return if you are also returning on that same line)
    
    Parameters vs Arguments
        - We define a function and allow it to take an input(s) where we then can use that input to perform a task. Those inputs
        we specify in our function definition are called "parameters" - they are placeholders for information that we can pass
        to the function when we want to run (call it, invoke it)... it. You can think of these as variables waiting to be given
        a value.
        - The values that are passed into the function that will take the place of the parameters when we run the function, are 
        called arguments.
    
    The Return Statement
        When we run a function, the code executes from top to bottom, line by line, and if we don't have a return statement,
        the function itself won't produce a value. The return statement allows the function to take in an input, and produce 
        an output that we can capture into a variable, for instance.
*/

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// DO NOT WORRY ABOUT THIS RIGHT NOW - BUT THIS IS JOHNNAIBYS QUESTION IN ACTION
function calculateMultipleAreas(array){
    const allValues = [];
    for(let i = 0; i < array.length; i++){
        allValues.push(calculateArea(array[i][0], array[i][1]));
    }
    return allValues;
}

// THIS FUNCTION WAS MADE TO ANSWER JESSICAS QUESTION
function displayAreas(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i], "<--- AREA VALUE");
    }
}

const holdAllValues = calculateMultipleAreas([[5,2], [2, 3], [10, 21]]);

displayAreas(holdAllValues);
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

/// START HERE

/*  
    When you're passing in values, that will will replace those paramaters, you call what you're passing "arguments"
     This is also demonstrating how you would create a function definition and return a value from that function.
*/

function calculateArea(width, height){
    return width * height;
}

const holdArea = calculateArea(50, 23);

console.log(holdArea, "<--- hold area");

/* 
    Default parameters - an es6 feature - allow parameters to have a default value (ie. in case no argument is passed)
*/

function calculateArea2(width = 10, height = 20){
    return width * height;
}

const holdingAreaWithDefaultValues = calculateArea2();

/* 
    Example: When you're defining a function, you can create what are called "parameters" ie words in the below function
    ALRIGHT - I'M USING LOOPS NOW BECAUSE OF THE QUESTIONS - YOU IGNORE THIS EXAMPLE BECAUSE IT USES A FOR LOOP
*/
function printToTerminal(words){
    for(let i = 1; i <= 10; i++){
        console.log(words, i);
    }
}

// printToTerminal("create spam");

/*
    If a function doesn't return a value - console.log() does not return a value - the default return will be undefined
*/

const holdValue = console.log("testing");

console.log(holdValue, "<--- hold value");

/* 
    What is scope 
        Scope defines where variables can be referenced / accessed. Variables in the global scope can be accessed anywhere.
        On the other hand, when you create a block scope ie. with an if statement {} or a function {}, the variables created 
        within that level of scope (known as the local scope to either the function / statement), can only be accessed there.
        You can think of a two way mirror - if you're on the side that allows you to see through, you're in a local scope. Those
        on the side of the mirror are the global scope - they can't see through that glass.

        You can also think of this like the stars in the sky - everyone can see that - it's global. On the other hand, something
        like your neighborhood deli is local - only you can see that.

        Multiple degrees of locality ie. an If statement inside a function.

        Practice good scoping - you want to "tightly scope your variables" to reduce scope pollution. This will help improve your
        code - it'll be better in these ways:
            - The code will be more legible, since the blocks will organize your code into sections / modules.
            - Makes your code more understandable since it clarifies which variables are associated with certain parts of your program
              as opposed to keeping track of them line for line.
            - You will save memory in your code b/c after the block finishes running the variables will disappear.

    Closure - pg 48
*/

// An example of scope - RUSSIAN DOLL STYLE

function testingScope(reach, reach2){
    let upperScope = null;
    if(reach === "dig deep"){
        upperScope = "Dug deep";
        if(reach2 === "dig deeper"){
            upperScope = "Dug even deeper!"
        }
    }
    return upperScope;
}

const saveScopeExample = testingScope("dig deep");
const saveScopeExample2 = testingScope("dig deep", "dig deeper");

console.log(saveScopeExample, "<--- scope example");
console.log(saveScopeExample2, "<-- scope example 2");
