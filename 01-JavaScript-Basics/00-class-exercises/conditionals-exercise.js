'use strict';
/* 
    Fortune Teller Machine Project
        (Comp Sci / Programming concept: Control Flow) -> 
            Control Flow: The order in which individual statements, instructions or function calls are executed or evaluated.
    
    Goal: Create a program that spits out a random fortune everytime you run it. The program should accept a username and include it 
        in the fortune (to personalize the message) ie: "Hello Tefe Del Rosario-Bell, your future is looking kinda bleak my friend."

        How do I do this?
        - Create a random number.
        - Create a control flow (if..else statements) to determine what is logged to the console, based on that random number.
        - Definitely feel free to get creative.
*/

let userName = "Tefe Del Rosario-Bell";
// I can use a template literal to add my name to the output message - or string concatenation.
let randomNumber = Math.floor(Math.random()*4 + 1);
// console.log(randomNumber === 1, "<--- checking");

if(randomNumber === 1){
    console.log(`${userName}, your future is looking kinda bleak my friend.`);
} else if(randomNumber === 2){
    console.log(`${userName}, your past doesn't determine your future. You'll be fine in life.`);
} else if(randomNumber === 3){
    console.log(`In two hours, you better watch your back, ${userName}`);
} else if(randomNumber === 4){
    console.log(`Undetermined future`);
}