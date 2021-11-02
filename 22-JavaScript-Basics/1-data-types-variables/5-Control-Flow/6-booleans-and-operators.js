// Boolean - primitive data type -> either true or false

/* 
    You can create a boolean by using comparison operators -> 
        (remember, if you look at the numbers notes you'll see these:
            - Comparison operators: 
                    less than: <
                    greater than: >
                    less than or equal to: <=
                    greater than or equal to: >=
        )

*/

// Comparison operators with numbers
let isTrue = 3 > 2;
console.log(isTrue, "<-- line 17");

let isFalse = 3 < 2;
console.log(isFalse, "<-- line 20");

let isLessThanOrEqual = 3 <= 3;
console.log(isLessThanOrEqual, "<-- line 23");

let isGreaterThanOrEqual = 2 >= 3;
console.log(isGreaterThanOrEqual, "<-- line 26");

/* 
    How to create a Boolean -> The Boolean object is an object wrapper for a boolean value -> 
        ok, so, how might this be useful exactly?!
        I'll tell you - we can check "truthy" or "falsy" expressions / variables / data.
*/
/* 
    Truthy vs Falsy - In JavaScript, a truthy/falsy value is a value that is considered true/false 
        in a Boolean context.
*/
    
    // This is an example of a "truthy" value
console.log(Boolean("some data"), "<-- truthy");

    /* 
        Examples of falsy values:
            - 0
            - "" OR '' OR ``
            - null
            - undefined
            - NaN
            - -0
    */

    // This is an example of a "falsy" value
console.log(Boolean(""), "<-- falsy");

/*
    Comparison Operators -> note -> DON'T CONFUSE WITH ASSIGNMENT OPERATOR: =
        - ==
        - ===
*/

    // Equal to: ==
console.log(3 == 3, "<-- comparison operator");

    // STRICTLY Equal to: ===
        /* 
            BIG NOTE: this checks whether value is the same AND whether data type is the same
            BIG SORRY, BUT: JavaScript has quirks, and this is one of them - type coercion
                (Type coercion is the automatic or implicit conversion of values from one data type to another)
        */
       
console.log(3 === 2, "<-- comparison operator");

    // LOOSELY Equal to: ==
        /*
            BIG NOTE: this type of comparison is "loose" - you're not checking data type.
        */
console.log(3 == "3", "<-- loose comparison example");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
    Logical Operators -> 
        - &&
        - ||
        - !
*/

    // AND operator (a binary operator - you NEED to compare two values to use this): &&
    // This is asking: is the value on the LEFT side true, AND the value on the RIGHT side true?
const testAnd = false && true;
console.log(testAnd, "<-- testing AND");

    // OR operator || (a binary operator - you NEED to compare two values to use this): ||
    // This is asking: is the value on the LEFT side true, OR the value on the RIGHT side true?
const testOr = false || true;
console.log(testOr, "<-- testing OR");

    /* 
        The bang operator (a unary operator - requires only one value): 
            ! - this reverses your boolean -> from false to true or true to false.
        This is SAYING: hey, reverse my boolean!
        Note: this works on truthy and falsy values
    */
const testBang = !true;
console.log(testBang, "<-- testing bang");

/*
    Note on logical operators: The && and || operators use short-circuit logic, which means the value on the right 
        will execute (be evaluated) depending on the first value.
*/
    /* 
        For example: When thinking of short-circuit logic and the OR operator: If what's on the left of the || is true, that gets returned
        and we don't evaluate (look at) or return what's on the right.
    */
const otherName = "Tefe";
const named = otherName || "Did not enter name...";
console.log(named, "<--- named");