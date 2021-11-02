// Create a .js file that satisfies assignment below 
// (The numbered instructions). Make sure the file is in your test-repo (on your computer). 
// Push your changes to Github - remember, your test-repo should already exist as a repository 
// in your Github. Attach the link to your github as your homework submission.

// For each exercise you'll want to log the result to the console to check your work


// 1. Declare a new variable and set it equal to the string of your name
let x = "Bailey";
console.log(x, "<--- line 14");
 

// 2. Declare a new variable and set it equal to a number 
    /* Note:  23 is the right data type; it's a number. 
             "23" is the wrong data type; it's a string.
    */
let numberCheck = 23;

    // Note: typeof is a keyword that you use right before a value/variable, to check it's data type
console.log(typeof numberCheck, "<--- 23");

// 3. Set a variable to a boolean value
    // Note: a boolean value is ONLY ever true or false
let myAge = false,
    jessica = true,
    newVariable = false,
    newNewVariable = true

let newBoolean = false;
let aNewerBoolean = true;

console.log(myAge, "<--- line 36");

    /* Note -> truthy & falsy values:
            - essentially every piece of data can evaluate to true or false - ie:
                when thinking about variables, if the variable contains a value then that variable is truthy.
                Some pieces of data evaluate to false - most will evaluate to true.

            - So when considering conditional statements (ie. if / else statements), we can think about what will
                evaluate to true or not (truthy vs falsy). 

            - Some values that will evaluate to false:
                0
                "" or ''
                NaN
                null
    */

// 4. Create a variable called carName, assign the value Volvo to it.
let carName = "Volvo";
console.log(carName, "<-- line 44");

// 5. Create a variable called num, assign the value 50 to it.
let num = 50;
console.log(num, "<-- line 48");
 

// 6. Display the sum of 5 + 10, using two variables: num1 and num2.
let num1 = 5;
let num2 = 10;

console.log(num1 + num2);

// 7. Create a variable called num3, assign the addition of num1 and num2 to it.
let num3 = num1 + num2;

console.log(num3, "<-- line 60");

// 8. Create a set of variables that define an animal (age, height, name, etc...). Must be atleast 6 variables.
let age = 5;
let height = "10 feet";
let name = "Blue Bear";
let favoriteFood = "Burgers";
let favoritePlace = "The woods";
let numOfFishEaten = 10;


// How to push to your repo:

// After you've saved the changes to your .js in your local repository, make sure you're located in that repository via your terminal, and then type the following git commands in order:


// Setting a true or false boolean variable
let newVariable = true;

// git add .

// git commit -m "variables hw"

// git push


// EXTRA CREDIT: 

//   Read through the Introduction in your Eloquent JavaScript book.
//   Read through Part 1: Language
