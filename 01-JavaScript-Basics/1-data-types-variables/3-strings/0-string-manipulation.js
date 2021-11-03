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


