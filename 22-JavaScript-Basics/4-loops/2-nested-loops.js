/*
    Nested loops are... just that, a loop within a loop
*/

// Example of a nested loop
    // What if we wanted to iterate over a Multi-dimensional array, with 2 levels, and add all the numbers together?

const arrayOfArrays = [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]];

function addAllNumbers(twoLevelArray){
    let output = 0;
    for(let i = 0; i < twoLevelArray.length; i++){
        const currentArr = twoLevelArray[i];
        for(let j = 0; j < currentArr.length; j++){
            output = output + currentArr[j];
        }
    }
    return output;
}

// const holdOutput = addAllNumbers(arrayOfArrays);
// console.log(holdOutput, "<--- our output");

// Create a function that logs every word (from our array) that has the letter 'a' in it. Return "Done!" at the end.
const onlyStrings = ['full', 'stack', 'node', 'react', 'redux', 'html', 'css', 'sql'];

function logWordsWithA(arr){
    for(let i = 0; i < arr.length; i++){
        // Thinking about the first iteration: When arr[0] is a string... 'full'
        const currentElement = arr[i];
        for(let j = 0; j < currentElement.length; j++){
        // Thinking about the first iteration: iterate over that string... 'full'[0] (arr[j])-> 'f'
            if(currentElement[j] === 'a'){
                // We want to log every word.
                console.log(currentElement);
                /* The break keyword jumps us out of our loop so we dont log a word twice that
                    might have more than one letter 'a' in it */
                break;
            }
        }
    }
    return "Done!";
}

// const holdVal = logWordsWithA(onlyStrings);
// console.log(holdVal, "<-- return value of logWordsWithA");

// MORE DIFFICULT Create a function that logs every word that has the letter 'a' in the word in the array and the nested arrays. Return "Done!" at the end.

const nestedArr = [['node', 'react'], 'full', 'stack', [], ['redux', 'animal'], ['html', 'css'], 'sql'];

function logWordsWithAv2(arr){
    for(let i = 0; i < arr.length; i++){
        const currentElement = arr[i];
        for(let j = 0; j < currentElement.length; j++){
            if(Array.isArray(currentElement)){
                const stringOfNestedArr = currentElement[j];
                for(let k = 0; k < stringOfNestedArr.length; k++){
                    if(stringOfNestedArr[k] === 'a'){
                        console.log(stringOfNestedArr);
                        break;
                    }
                }
            } else if(currentElement[j] === 'a'){
                console.log(currentElement);
                break;
            }
        }
    }
    return "Done!";
}

// const holdVal2 = logWordsWithAv2(nestedArr);
// console.log(holdVal2, "<-- return value of logWordsWithAv2");

// How would I answer the above problem with a while loop?
// MORE DIFFICULT Create a function that logs every word that has the letter 'a' in the word in the array and the nested arrays. Return "Done!" at the end.
const wildlyNestedArr = ['chacking',['node', 'react',['what', ['what2', 'chicken', 'little', ['another', 'god', 'damn', 'array', ["did", "you", "say", "you", "wanted", "another?"]]]]], 'full', 'stack', [], ['redux', 'animal'], ['html', 'css'], 'sql'];

// Check string is a helper function I created
const checkString = (str) => {
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a'){
            console.log(str, `<-- 'a' at idx ${i}`);
            break;
        }
    }
}

// Solved using a while loop!!
const logWordsWithAv3 = (arr) => {
    const queue = [...arr];
    while(queue.length){
        const currentWord = queue.shift();
        if(typeof currentWord === "string") checkString(currentWord);
        else if(Array.isArray(currentWord)) queue.push(...currentWord);
    }
    return "Done!!"
}

// logWordsWithAv3(wildlyNestedArr);

// Recursive solution
function logA(arr){
   for(let i = 0; i < arr.length; i++){
       if(Array.isArray(arr[i])) logA(arr[i]);
       else if (typeof arr[i] === "string") checkString(arr[i]);
   }
   return "Done!"
}

logA(wildlyNestedArr);