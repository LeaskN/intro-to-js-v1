'use strict';
/*  
  What is an array? -> an Array is a list! It's also a data structure and an object, which is a non-primitive data type 
    - Arrays contain elements seperated by commas (,)
    - The elements can be of any data type

    Note: Typically arrays are a list of the same type of data, but in JavaScript an array can contain
    multiple data types
*/

// How to declare an empty array?
const empty = [];

// An example scenario - a list of student names can be held in variables like below...
const jessicaS = "Jessica Salazar";
const shaundel = "Shaundel Crumpton";
const lucian = "Lucian Bryan";
const johnnaibys = "Johnnaibys Nunez";
const bayley = "Bayley Arens";

// ... or we can use an array to hold the list of names
const peopleInClass = [12, "Shaundel Crumpton", "Lucian Bryan", "Johnnaibys Nunez", "Bayley Arens"];

// Arrays also have a length property. We can access it using dot notation:
const numItemsInList = peopleInClass.length;

console.log(typeof peopleInClass, "<--- what is my type?");
console.log(numItemsInList, "<--- num of items in my array");

// Try console.log(peopleInClass). Not what you might expect.


  /* 
    How to access elements in an array? 
     - The same way we can select just one character in a string: using indexing & bracket notation (syntax)
  */
const someElement = peopleInClass[2]; 
console.log(someElement, "<--- here");
  /*
    We can plug in expressions into our brackets
  */


  // Ask - why are we getting undefined? How can we fix this?
const middleStudent = peopleInClass[Math.ceil(peopleInClass.length / 2)];
console.log(middleStudent, "<-- middle student");

  /*
    Using variables holding numbers
  */

const someNumber = 2 + 2;
const someStudent = peopleInClass[someNumber];

  /*
    Changing an element
  */ 
console.log(peopleInClass[0], "<--- changing the element at index 0");
peopleInClass[0] = 20 // <--- changing the element at index 0
console.log(peopleInClass);

  /*
    Ask - how would I change the element at index zero to equal itself times 10 
  */
console.log(peopleInClass[0] * 10, "<--- checking")

console.log(peopleInClass, "<-- before");
peopleInClass[0] *= 10;
console.log(peopleInClass, "<-- after");

// Show how the above is different with primitive values ie: strings

/* 
  Note: Don't be afraid to really space things out into explicit steps:
    const holdVal = peopleInClass[0];
    holdVal = holdVal * 10;
    peopleInClass[0] = holdVal;
*/

////////////////////////////////////////////////////////////////////////////////////////////////
// Array methods
// Some methods mutate the array

const exampleArray = ["Jessica", "Tefe", 25, 1343, 123412, 12123, 100, "Shaundel", 25, "Bayley", null, true, false];
  /*
    Array.isArray();
    - Returns a Boolean value - true or false.
  */

console.log(Array.isArray(exampleArray)); // <-- returns true, because we are passing this method an array
console.log(Array.isArray([null,true,false, "randomString"]));

  /*
    .push()
    - This method adds one (or more) elements to the end of a target array (mutator method - it will mutate the array)
  */

exampleArray.push("Nic");
// console.log(exampleArray);
console.log(exampleArray[exampleArray.length-1], "<-- log the last element");

  /*
    .pop()
    - This methods removes the last element from a target array, and returns it (a mutator method)
  */

const holdElement = exampleArray.pop();
console.log(holdElement);
// console.log(exampleArray);

  /*
    .indexOf()
    - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  */

console.log(exampleArray.indexOf(25));
// How do I return (or access) the value 100 from our example array?

let holdIndexOf100 = exampleArray.indexOf(100);
let hold100 = exampleArray[holdIndexOf100];
console.log(hold100);

  /* 
    .shift() (.unshift() adds to the beginning of the array) ->
    - (Also a mutator method) This removes the first element from your array then returns it.
  */

console.log(exampleArray.shift()) // <-- logs the first element in our example array

  /*
    .sort()
    - (Also a mutator method) Takes in a function as it's argument that defines the sorting... 
      we can also use it without the function and we'll get back an array of strings sorted alphabetically (only works
        if your array has strings exclusively).
  */

const sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
sortThis.sort();
console.log(sortThis);

    /*
      .reverse() ->
      - (A mutator function) This method reverses your array
    */
  
console.log(sortThis.reverse());
  
  /*
    .split() <--- A STRING METHOD?!
      - (MDN) The split() method divides a String into an ordered 
        list of substrings, puts these substrings into an array, and returns the array. The division is done 
        by searching for a pattern; where the pattern is provided as the first parameter in the method's call. 
        Note: the search pattern can be a regular expression. 
  */

const newString = "Hello There. My name is Tefe, and I have a very specific set of skills.";
const stringToArray = newString.split(' ');
console.log(stringToArray, "<- string to array");

  /*
    .join()
      - (MDN) The join() method creates and returns a new string by concatenating all of the elements in 
      an array (or an array-like object), separated by commas or a specified separator string. 
      If the array has only one item, then that item will be returned without using the separator.
  */

const holdMyNewString = stringToArray.join(' !!!! ');
console.log(holdMyNewString, "<-- our new string, joined with !!!");

  /*
    .slice()
      - (MDN) The slice() method returns a shallow copy of a portion of an array into a new array
        selected from start to end (end not included) where start and end represent the index of items in that array. 
        The original array will not be modified.
  */

const sliceMe = ["Hello", "There", "We", "Are", "Legion", "Nah"];
const sliced = sliceMe.slice(2, sliceMe.length-1);
// Checking whether or not we've modified our original array
console.log(sliceMe, "<-- are you ok?");
// Logging our new "sub-array" that we created from out original array
console.log(sliced, "<-- sliced!")

  /*
    .splice()
      - Warning!! Mutator method alert! (MDN) The splice() method changes the contents 
        of an array by removing or replacing existing elements and/or adding new elements.
  */
sliceMe.splice(0, sliceMe.length-1);
console.log(sliceMe, "<--- are you still ok")
  
  /*
    .concat()
      - (MDN) The concat() method is used to merge two or more arrays. This method does 
        not change the existing arrays, but instead returns a new array.
  */

const array1 = ["Testing", "Out", "The", "Merge"];
const array2 = ["...merging", "complete!"];

const mergedArray = array1.concat(array2, [5, 2], [5, 6]);
console.log(mergedArray, "<--- merged");
// Checking to see if array1 was mutated
console.log(array1, "<-- have you been mutated?! ");

////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    Array literal:
        A way of defining / creating an array
*/
const myArray = [];

/* 
    Multi-dimensional Arrays:
      It's just... an array that has arrays within it
*/

const myMultiDimensionalArray = [[5, 2 ,3], [5, 2, 3]];

/* 
  Passing by value vs reference:
        Arrays (& objects in general) are pass by value, but the the value is a reference.
*/

///// PASS (STRICTLY) BY VALUE - WORKS ONLY FOR PRIMITIVE VALUES
let newVariable = "some random string";
    // Here I am trying passing the value of new variable to holdTheSameVal
let holdTheSameVal = newVariable;
    // checking that variable...
console.log(holdTheSameVal, "<--- HERE WE ARE");
    // Here I am reassigning newVariable to a new string - does this affect holdTheSameVal?
newVariable = "Something else";
    // NO, IT DOES NOT. Because a string is a primitive value.
console.log(holdTheSameVal, "<---- ACTUALLY HERE"); // Expected output: "some random string"
/////

///// PASS BY VALUE (BUT THE VALUE IS A REFERENCE) - WORKS FOR NON-PRIMITIVE VALUES
let newVariable2 = ["some random string", 5, "random"];
    // Here I am trying passing the value of new variable2 to holdTheSameVal2
let holdTheSameVal2 = newVariable2;
    // checking that variable...
console.log(holdTheSameVal2, "<--- holdTheSameVal2");
    // Here I am reassigning the first index in newVariable2 to a number - does this affect holdTheSameVal2?
newVariable2[0] = 23;
    // YES, IT DOES. Because an array IS NOT a primitive value - it's an object.
console.log(holdTheSameVal2, "<---- holdTheSameVal2 mutated")

newVariable2 = "Something else";
newVariable2 = [5, 2, 2];

console.log(holdTheSameVal2, "<---- PASS BY REFERENCE"); // Expected output:
/////

/// PASS BY VALUE (BUT THE VALUE IS A REFERENCE) EXAMPLE 2
let newVariable3 = ["something else", 10, "testing", 20];

let newVariable4 = newVariable3;

newVariable4.push("different string");

console.log(newVariable3, "<--- WHAT DO WE GET?!"); // Expected output: ["something else", 10, "testing", 20, "different string"]
console.log(newVariable3);
/////