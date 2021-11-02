'use strict';
// Side note: write 'use strict' at the top of your JavaScript file in order to use JavaScript in strict mode.
// strict mode -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// Number -> another primitive value
let myNumber = 5;

console.log(myNumber);

// Below are examples of mathematical operators (-,+,/,*) combined with the assignment (=) operator

// Add operator ->
myNumber = myNumber + myNumber;

console.log(myNumber);

// Subtract operator -> -
myNumber -= 9;

console.log(myNumber);

// Divide operator -> /
myNumber /= 2;

console.log(myNumber, "<--- line 23");

// Multiplication operator -> *
myNumber *= 10;

console.log(myNumber, "<--- line 28");

//
/* 
    Comparison operators: 
        less than: <
        greater than: >
        less than or equal to: <=
        greater than or equal to: >=
*/

console.log(myNumber <= .5);

/* 
    Modulo % - The remainder operator (%) returns the remainder 
        left over when one operand is divided by a second operand. It always takes the sign of the dividend
    
    Modulo is particularly useful when trying to determine whether a number is even or odd - if we divide by 2
    and have a remainder of 1, we know the number is odd. If we have a remainder of 0, the number it's even.
*/
// This is saying: store the remainder of 10 divided by 3 into the variable holdNum
let holdNum = 10 % 3;
console.log(holdNum, "<--- line 47");

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