
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


