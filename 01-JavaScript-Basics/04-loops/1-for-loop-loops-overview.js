/*
    Loops in programming
        - Loops allow you to do something repeatedly.
        - There are different kinds of loops, but they are all pretty much doing the same thing - repeating actions
          a certain amount of times.
*/

// This is the syntax for a "for loop"
    /* for ([initialExpression]; [conditionExpression]; [incrementExpression])
        //statement
    */

for(let i = 0; i < 10; i++){
    // The first thing we do with a for loop is we run our initial expression - we only do this once.
    // As long as the condition expression evaluates to true run the code within the for loop -> {}
    // console.log("Repeat me!");
    // console.log(i);
}

// 1. [initialExpression] -> Initilize our variable: let i = 0;
// 2. [conditionExpression] -> check to see if this evaluates to true: i < 100
// 3. If [conditionExpression] true, run our code in the for loop then go to step 5.
// 4. If [conditionExpression] false, end our loop immediately, don't run the code in our loop, don't go to step 5.
// 5. Run our [incrementExpression]: i++ -> and then repeat steps 2 through 5.

const classNames = ["Jessica", "Shaundel", "Lucian", "Johnnaibys", "Bayley"];

// Create a function that loops through our array (myArray) and prints out each name (element within our array)
function printNames(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

// printNames(myArray);

const numArray = [5, 3, 2, 1, 10, 20, 30, 22, 33, 12, 11, 9, 6, 3];

// Create a function that loops through an array and counts how many even numbers are in that array.

function countEvenNums(inputArr){
    let count = 0;
    for(let i = 0; i < inputArr.length; i++){
        // Here we are checking to see if our current number is even
        if(inputArr[i] % 2 === 0){
            // The number is even! so...
            // Here we want to count
            count++;
        } 
    }
    return count;
}

const anotherArray = [5, 3, 2, 1];
console.log(countEvenNums(numArray));
console.log(countEvenNums(anotherArray));

// Create a function that loops through an array (that only has integers) and returns a new array with only odd integers

function findOdd(inputArr){
    // Here we are declaring our output - we are going to build this up
    let output = [];
    // Here we are looping over through our array with a for loop
    for(let i = 0; i < inputArr.length; i++){
        // Here we are checking if the element in our array is odd
        if(inputArr[i] % 2 !== 0){
            // Here we need to push our element into our output array
            output.push(inputArr[i]);
        }
    }
    return output;
}

console.log(findOdd(numArray));

function chooseGroups(array){
    const group1 = [];
    const group2 = [];

    for(let i = 0; i < array.length; i++){
        const randomNum = Math.floor(Math.random()*6+1);
        // 3 is in the median of 5
        if(randomNum > 3){
            // I'm using what's called a "ternary operator", which is different syntax for using an if..else statement
            group1.length < 3 ? group1.push(array[i]) : group2.push(array[i]);
        } else {
            group2.length < 3 ? group2.push(array[i]) : group1.push(array[i]);
        }
    }
    return [group1, group2]
}


console.log(chooseGroups(classNames));