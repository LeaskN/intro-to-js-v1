/*
     What is a variable? A label that references a value. 
     A value represents some kind of data - there are several data types in JavaScript
*/

// Lets create variables!

/*
    Declaring a variable - you need to explicity tell JavaScript that you are creating a variable in order to use it.
    The terminology: variable declaration.
    When you declare a variable you set aside memory to store that value under a label you define.
    This is tied to your computeres RAM or random-access-memory. 
    Although we are aspiring software engineers knowing what is pysically happening in your computer can be helpful to your understanding

    A computer in short: Computer vs Cooking

        The processor = The Chef.  
        The ram = your counter space.  
        The hard drive = your cabinets where you store things.  
        
        If the chef is slow, doesn't matter how much space and storage, it's going to go slow. 
        If the chef is fast, but he doesn't have the space to work (ram) it will slow him down.  
        If he is fast and has ample counter space, but his cabinets are either lacking or cluttered, it will again slow him down.  
        
        Perfect harmony is a quick chef, with a large counter, and large cabinets correctly organized.  That is a perfect computer.

        This example is great because RAM is very comprable to a counter top. If it isn't there we need to spend time getting access to it. If it is our access is almost immediate.


*/

/*
    There are two main keywords in JavaScript that we can use to declare a variable: let & const.
        - If we use the keyword "let", we are allowed to reassign that variable to something else later on in our
            program.
        - If we use the keyword "const" (short for constant), we can't reassign our variable - we use cont when we don't
            want our variable to change (there are exceptions).

     ex (below): myVariable is our label - using the assignment operator (=) we can assign a value to our label
     We can call a variable anything we want. It's best practice to call it something that describes your value.
*/

let myVariable = "Our string value";

// Since I created this variable using "let", I can reassign the variable (give it a new value)
myVariable = "Actually it's this value";


    // Note: this is pascel-case -> don't use this!
    let MyVariableIsPascal = "";

    // Note: This is written in camel-case
let myVariableIsThisVeryLongName = 0;

let my_other_variable = "this is weird";

// We can use this line of code -> console.log() to print to our terminal
console.log(myVariable);

// Here I'll use const
const mySecondVariable = "Testing";

// If I uncomment the comment below and try to run this file I'll get an error because I am trying to reassign a const variable
// mySecondVariable = "Not Testing"


// WHAT IS SYNTAX?!
// WHAT IS A THREAD OF EXECUTION??
// WHAT IS SCOPE?!
// WHAT IS LET VS CONST in JavaScript!?
// WHAT IS STRICTLY TYPED VS DYNAMICALLY TYPED?? JavaScript is a dynamically typed programming language.