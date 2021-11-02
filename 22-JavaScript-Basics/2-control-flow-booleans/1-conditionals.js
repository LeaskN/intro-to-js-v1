// We always want to think in terms of boolean values when using conditionals
// What is a conditional statement?

/* 
    The almighty, IF statement - we can seperate code that will run in our curly brackets (braces), based
        on an expression that we are evaluating within our parenthesis (should evaluate to a boolean).

    So, if the expression being evaluated in the parenthesis is true or "truthy", we run what's in 
        our IF statement block {}.

    "You NEED permission to enter (run the code within) your if statement block"
*/

const isTrue = true;

if(!isTrue){
    console.log("We made it here!");
}

if(isTrue){
    console.log("...");
}

const truthyValue = "Hi";

if(truthyValue){
    console.log("Here we go!");
}
/////////////////////////////////////
/* If...else statements - the same as above, except you get to specify what happens if your IF statement condition evalutes to false. */
// Else...If statements - you can chain a sequence of conditions together.
if(isTrue){
    console.log("We are on line 33");
} else if(!isTrue){
    console.log("Actually, we are on line 35");
} else {
    console.log("Woops");
}

const newVariable = "Save this";
console.log(newVariable, "<-- 41");

/*
    Switch statement - like an If... else statement
        (MDN) The switch statement evaluates an expression, matching the expression's 
        value to a case clause, and executes statements associated with that case, 
        as well as statements in cases that follow the matching case.
*/

const testVariable = 10;

switch(40){
    case 20:
        console.log(`yes! ${20}`);
        break;
    case 30:
        console.log(`yes! ${30}`);
        break;
    case 10:
        console.log(`yes! ${10}`);
        break;
    default:
        console.log("Failed the test");
}
