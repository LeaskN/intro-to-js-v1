
// There are instances where it matters whether you are use single or double quotes for strings -> "" or ''
// So lets use double quotes, "", for strings that have more than one character.

/* 
    What is concatenation? -> it's the ability to add strings together ->
    Concatenation is the process of appending one string to the end of another string 
*/

// An exmple of string concatenation


// This is also valid -> using single quotes
let myVariable2 = 'The ' + 'Man '+ 'Himself';

// An exmple of string concatenation
let the = "The";
let man = "Man";
let himself = "Himself";

let theManHimself = the + " " + man + " " + himself;
console.log(theManHimself, "<--- line 21");
////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////

/* 
    Template literals -> you use backticks for these -> helps with formatting strings (with variables, for instance)
    - A formal defintion (MDN): Template literals are string literals allowing embedded expressions. 
        You can use multi-line strings and string interpolation features with them.
*/

let template1 = `${the} ${man} ${himself}`;

// Lets get creative with template literals - embedded expressions.
let template2 = `${5+2} ${3+2} ${10000 + 5}`;

console.log(template2, "<-- line 36");

    /*
        You can check the length (how many characters a string has) of your string -> 
        this is going to return a number (the data type will also actually be a number)
    */

let testingStrLength = "How many characters does this string have?";
console.log("What about this string?".length, "<--- line 44");
console.log(testingStrLength.length, "<--- line 45");
////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////

    /* 
        Escaping characters
        ex: JavaScript thinks you are trying to end
            the string before the s -> let escapingCharacters = 'Something's here';
            use the backslash to "escape" that instruction. 
    */
let escapingCharacters = 'Something\'s here';
let justUseDoubleQuote = "Something's here";
console.log(escapingCharacters, "<-- escaping characters");

////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////

/* 
    Indexing - you can think of a string as a list of characters ->
    An aside: In programming, we start lists at 0 instead of 1.
*/

let listOfCharacters = "Here we are!";
console.log(listOfCharacters.length, "<-- length of characters");
    /* 
        Using what's called bracket notation (ie. variable[0]), we are able to access ONE specific
        character at a certain location in our "list of characters"
    */
    /* 
        Lets look at a list
                            This is our string ->    "Here"
        These are our positions for that string ->    0123
    */
console.log(listOfCharacters[0], "<-- using bracket notation, we get the letter 'H'");
    /* 
        So, when you think about the length of a characters in a string (or list), the last character will be in a 
        POSITION, within the list, at the location that is one less than the length of the list.
    */

// This is a dynamic way of getting the last character of any string 
console.log(listOfCharacters[listOfCharacters.length-1], "<--- line 75");
////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////
/*
    Substrings - a group of characters within a defined string
*/
let anotherString = "Lets get just 'us'";

    // This is an example of how we would could extract a substring from our variable, anotherString
console.log(anotherString[15]+anotherString[16]);

    /* 
        This is an aside - another example of using template literals:
        console.log(`${anotherString[15]} <--- the u is here. the s is here ---> ${anotherString[16]}`);
    */
////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////
/* 
    Immutability - we can only ever create new primitive values
        Remember, a variable is just a label that holds a reference to a value. If that value is a primitive, you can't alter it,
        you can however alter the value that your variable references BASED on that primitive value via reassignment.
*/
let testingStr = "Hello";
let testingStr = testingStr.toUpperCase(); //<--- this is creating a new string, not mutating the one on line 117
////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////
// String methods

    /* 
        .indexOf() - The indexOf() method returns the index 
         within the calling string of the first occurrence of the specified value, 
         starting the search at fromIndex. Returns -1 if the value is not found.
    */
console.log(testingStr.indexOf("l"), "<-- 98: gives me back the index of the character 'l' in the string 'hello'");

    /* 
        .slice() - The slice() method extracts a section of a string and returns 
        it as a new string, without modifying the original string.
    */

let subStringOfTestingStr = testingStr.slice(1);
console.log(subStringOfTestingStr, "<--- line 105: our substring");

    /* 
        .toLowerCase()
        .toUpperCase()
        ... these are self explanatory for the most part
    */

console.log(testingStr.toUpperCase());
console.log(testingStr.toLowerCase());

    /*
        .concat() - this method concatenates the string arguments to the calling string and returns a new string.
    */

console.log("My favorite ice cream is" + "            " + "mango");
console.log("My favorite ice cream is ".concat("mango", "another string", "...yet another string"));

    /*
        .split() - The split() method divides a String into an ordered list of substrings, puts these substrings 
            into an array, and returns the array.  The division is done by searching for a pattern; where the pattern 
            is provided as the first parameter in the method's call.  
    */

let splitString = "Where is my ice cream?";
let splitStringToArr = splitString.split(' ');
console.log(splitStringToArr, "<---- my array");
console.log(splitStringToArr[splitStringToArr.length-1], "<---- check it out");

    /*
        .split() <--- A STRING METHOD?!
            - (MDN) The split() method divides a String into an ordered 
            list of substrings, puts these substrings into an array, and returns the array.  
            The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  
    */


