// Number -> another primitive value
// Practice:
// Declare a variable and assign it to a numeric value
// Double that value and re-assign it to the previous variable
// Check it worked by logging to the console

// Create two numbers, assign them to variables and add them together
// Check it worked by logging to the console

// Create three numbers, assign them to variables and subtract them from the largest them together
// Check it worked by logging to the console

// Create two even numbers, assign them to variables and divide one from the other
// Save the new value to a unique variable, we'll use it on the next exercise
// Check it worked by logging to the console

// Create two odd numbers, assign them to variables and multiply one from the other
// Save the new value to a unique variable, we'll use it on the next exercise
// Check it worked by logging to the console

// Compare the previous two numbers
// Using greater than or equal to, or less than or equal to
// Log a true statement to the console

// Create a variable and log it's remainder, if divided by 3, to the console 
// What is modulo especially useful for?

// find the square root of 25
// log it to the console
////////////////////////////////////////////////////////////////////////////////////////////////
// Number Methods 

/*
    Math.sqrt() - allows you to find the square root of your number.
*/

let myNum = 25;
let squareRootOf25 = Math.sqrt(25);
console.log(squareRootOf25, "<--- line 58");

/*
    Math.pow() - The Math.pow() function returns the base to the exponent power.
*/

let powExample = Math.pow(5, 4);
console.log(powExample, "<--- line 65");

/*
    Math.round() - function returns the value of a number rounded to the nearest integer (a number without decimals).
*/

let roundExample = Math.round(10.5);
console.log(roundExample, "<--- line 72");

/*
    Math.ceil() - function always rounds a number up to the next largest integer (a number without decimals).
*/

let ceilExample = Math.ceil(12.1);
console.log(ceilExample, "<-- line 79");

/*
    Math.floor() - function returns the largest integer less than or equal to a given number
*/

let floorExample = Math.floor(5.95);
console.log(floorExample, "<--- line 86");

/*
    Math.abs() - function returns the absolute value of a number
*/

let absExample = Math.abs(-5);
console.log(absExample, "<--- line 93");

/*
    Math.min() - returns the lowest-valued number passed into it, or NaN if any 
        parameter isn't a number and can't be converted into one
*/

let minExample = Math.min(4, 3, 8, 10, 21, 2);
console.log(minExample, "<--- line 101");

/*
    Math.max() - The Math.max() function returns the largest of the zero or more numbers given as input 
        parameters, or NaN if any parameter isn't a number and can't be converted into one.
*/

let maxExample = Math.max(4, 3, 8, 10, 21, 2);
console.log(maxExample, "<--- line 109");

/*
    Math.random() - function returns a floating-point (decimal number), pseudo-random number in the range 0 to less than 1 
        (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you 
        can then scale to your desired range. The implementation selects the initial seed to the random 
        number generation algorithm; it cannot be chosen or reset by the user.
*/

let randomExample = Math.random();
console.log(randomExample, "<--- line 119");

// MORE on Math.random()

let randomExample2 = Math.random()*50;
console.log(randomExample2, "<--- line 124");
console.log(Math.floor(  Math.random()*1000  ), "<--- line 125");