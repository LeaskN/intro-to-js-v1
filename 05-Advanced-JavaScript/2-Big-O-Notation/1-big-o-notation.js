/*
    What is an algorithm?
	- An algorithm is a just a series of steps. We've been using them all along. A for loop with instructions 
        inside is an algorithm!

    What is efficiency?
        - As a developer you need to be able to measure how taxing a given program is to a computer. The faster 
        and lighter (less memory usage - RAM usage) the program, the less work the computer needs to do.

    What is Big-O Notation?
        - It gives software engineers a way to describe the performance of a piece of code.
        - If we have multiple implementations of a function, Big-O provides us a system for determining which code runs "best".

    Describe what "best" means
        - Faster.
        - Less memory intensive (RAM usage / system memory).
        - Unfortunately, in the context of Big-O and finding the most efficient way of writing something, you sometimes have to 
            sacrifice readability.

    Who cares?
        - As mentioned above, it's useful for discussing trade-offs between different approaches for solving a problem with code.
        - An example scenario where this becomes useful, is when your program slows down or crashes, you now have a way of 
            identifying parts of the code that are inefficient.

    Big-O & time
        - Big-O allows us to talk more generally about the speed of code and in such a way where the speed of a computer doesn't 
            factor in - the speed of a users machine varies; some people have faster or slower machines.
        - Instead of measuring actual time to determine speed (ie: "this code takes 2 seconds to run"), we count the number of 
            operations the computer has to perform.
*/

/*
    Check the graph!
        These are the most commonly written complexities.

        - O(1) -> Constant time: flat and constant no matter how much data you pass into the input
        - O(log n) -> Briefly jumps up but then flattens out.
        - O(n) -> Goes up and right in a straight line.
        - O(n^2) -> The larger the input the more it spkes up.
*/

/*
    Big O notation gives us a way of measuring the worst case scenario of how long a function will take
    given the input size. The rate of change given an increase of input size generally corresponds to one 
    of these complexities. Note: we are only covering "time complexity" not "space complexity", which gives us
    a way to measure how much memory an algorithm takes. You would use the same notation for this measurement.
*/

/* 
    One way you can look to see how long it takes your computer to run a certain piece of code is to use "console.time()".
    Woa, the console object has more methods than .log()?! Oh wait, yeah that makes sense. Remember, console is a JavaScript object, and one thing
    we should all know about objects at this point is that objects tend to have properties and methods. Documentation to the rescue!
        https://developer.mozilla.org/en-US/docs/Web/API/Console

    You can use console.time() at the beginning of your function and at the end in order to 'time' how long it's taking to execute on a given input.
    ie:
    
    Define your function with console.time() before and after the main operations within your function

        function quadraticTimeExample(arr){

            console.time("myTimer");

            const holdPairs = [];
            for(let i = 0; i < arr.length; i++){
                for(let j = 0; j < arr.length; j++){
                    if(i !== j) holdPairs.push([arr[i], arr[j]]);
                }
            }

            console.timeEnd("myTimer");

            return holdPairs;
        }


    Run your function with an input:
    
        quadraticTimeExample([5,4,3,2,1]))

    One example of an expected output in console ->
        
        the return of our function -> [[5,4], [5, 3], [5, 2], [5, 1]] 
        our timer -> myTimer: 0.028076171875 ms

    Notice our timer output -> this is showing me how much time elapsed between when I started my timer and when I ended it.
*/

// EXAMPLES

/*
    O(1) -> constant time example
        No matter how big the input, the computer will essentially do the same amount of work.
        Most mathematical operations are O(1) -> +, -, * etc.
        Assignment, return and accessing a value in an array or object are also O(1).
*/

function constantTimeExample(num){
    if(num <= 10){
        return num;
    } else {
        let num2 = num / .5 - 1;
        return num * num2;
    }
}

function constantTimeExample2(str, obj){
    // Looking to see if a key exits in an obj - returns a boolean value
    return obj[str] ? true : false;
}

/*
    O(n) -> linear time example
        The computer resources required grow proportionally to the size of the input.
        An algorithm running at linear time will process each input at least once. Loops
        are a common example.
*/

function linearTimeExample(arr){
    // Getting sum of array of numbers
    let output = 0;
    for(let i = 0; i < arr.length; i++){
        output += arr[i];
    }
    return output;
}

// Another linear time example
let searchValue = 10;
const isValueThere = Object.values({someKey: 9, anotherKey: 10}).some(cur => cur === searchValue);

/*
    O(n^2) -> quadratic time example
        A functions run time is proportional to the square of the input size.
        For example, a function that has a loop running at O(n) becomes O(n^2) when
        that loops becomes nested within a loop that is also running at O(n).
*/

function quadraticTimeExample(arr){
    // Save every pair sequence possible of elements in an array
    // Sample input -> [5, 3, 1]
    // Expected output -> [[5, 3], [5, 1], [3, 5], [3, 1], [1, 5], [1, 3]]
    const holdPairs = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i !== j) holdPairs.push([arr[i], arr[j]]);
        }
    }
    return holdPairs;
}

/*
    O(log n) -> logarithmic time example
        An algorithm that cuts the input size in half at each step is logarithmic.
*/

function logarithmicTimeExample(num) {
    // Sample input -> 8
    // Sample output -> [1, 2, 4, 8]
    const logStepsToN = [];
    for (let i = 1; i < num; i*=2) {
        logStepsToN.push(i);
    }
    return logStepsToN;
}

function exampleFunction(arr){
    let total = 0;
    /* O(n) */for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }

    /* O(n) */for(let i = 0; i < arr.length; i++){
        if(arr[i] / 2 < i){
            total -= arr[i] / 2;
        }
    }
    /* O(2n) */
    /* So this factors down to O(n) */
    // n === number of elements (aka) size of input
    return total;
}

// Example input - arr = [10, 30, 40, 50, 100], key = 10
// Example output - true
// O(log n)
function exampleFunction2(arr, key){
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = (start + end) / 2;
        if(key === arr[mid]){
            return true;
        }
        if(key < arr[mid]){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
}

// I am getting the example functions below from the following article:
// https://medium.com/analytics-vidhya/big-o-notation-time-complexity-in-javascript-f97f356de2c4

// O(n) - linear time
function exampleFunction3(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(`Element of array is ${arr[i]}`);
    }
    return null;
}

// O(1) - constant time
function exampleFunction4(arr){
    console.log(`First Element of array is ${arr[0]}`);
    return null;
}



/* More Examples */

// const newArry = [5,2,3,5]

/* 
    Linear time - O(n):

    function loopAndPrint(arr){
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
*/

// // loopAndPrint(newArry);

// const nesetedArr = [[1,2],[3,4],[5,6,7]];

/*
    Constant time - O(1):
        This is the fastest operation you can perform.
*/

var background = new Image();
background.src = "https://bit.ly/3nrHReU";
// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
    ctx.drawImage(background,0,0);   
}