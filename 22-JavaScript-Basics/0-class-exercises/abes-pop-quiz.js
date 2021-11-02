"use strict";
//If you are proviveded a snippet do not uncomment and run.
//You are allowed to use W3schools, MDN and your notes

//MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
//W3Schools - https://www.w3schools.com/js/default.asp


//1.)There are 3 javascript keywords to initialize a variable. create A new variable below called value and set it to an empty string
let value  = ""
//const value = ""
//var value = ""

//2.)JavaScript has many data types. String is an example of one. Name 2 more

//number bool object Array undefined NaN 0 ""

//if(value)console.log("truthy")
//3.)Evaluate the following statements: [What would this line of code return in my console]
//Don't run these exact line of code! [anything close is allowed]
    //4A.) console.log("4" + 4)  44
    //4B.) console.log("4" * 4) 16
    //4C.) console.log("4" == 4)
    //4D.) console.log("Tefe".indexOf("E"))
    //4E.) console.log("Javascript Is Fun".split(" "))

//4.)Write a function that takes an array as input and console logs each element in the array

const peopleInClass = ["Jessica", "Tefe", "Abe" , "Bayley" ];

function printPeople(array){
    for(let i=0; i < array.length; i++){
        console.log(array[i]);
    }
}

printPeople(peopleInClass);



//5.) Which of the following statements is not true about for loop statement:

    //A.) You can declare a variable in a for loop
    //B.) You can't make an infinite loop in a for loop
    //C.) You can exit out of a for loop with the break keyword
    //D.) For loops can increment upwards dowards or even not at all  //ask for clarifcation if this is confusing you

//6.) Write a function that takes an array of numbers as input and returns the average of all the numbers

const numbers = [1,2,3,4,5,6,7,8,9];

function average(array){
    let sum = 0;
    for(let i=0;i<array.length;i++){
        sum += array[i]
    }
    return sum / array.length;
}

function averageHOF(array){
    return array.reduce(function temp(sum, currentValue){
        return sum + currentValue
    },0);
}

function averageHOF2(array){
    const reducer = (sum, currentValue) => sum + currentValue;
    return array.reduce(reducer, 0);
}




console.log(average(numbers));

/*
let total = [ 0, 1, 2, 3 ].reduce(
    ( accumulator, currentValue ) => accumulator + currentValue,
    0
  )
*/ 

//const arrayEx = [5, 8, 12, 20, 10]
//const arrAverage = array => array.reduce((a,b) => a + b, 0) / array.length

//console.log(arrAverage(arrayEx))

//7.) You are given a dataset where you have nested arrays of information and you need to sort through all that information to sum up all the numbers.
/*
ie.


*/
    //7A.) There are two potential 1 word answers for the name the approach you need to take to solve this problem. Name either one [ First one starts with I, Second one starsts with R ]
    //7B.) In 1-2 sentances explain high level [like if you were explaining to a 5 year old] what your approach to solving this would be.

    //Recursive:
    //create a function accepts array as paramater
    //create a sum variable
    //loop through arrray
    //if element is a number add to sum
    //if the element is an array we......... recall the function with the current element
    //return sum

    //Iteratively

const matrix = [2,[1,2],[4,55],[41,455],[525,525,[13,567,96,33]],[45,4145,682]];

function solveMatrix(array){
    let queue = [...array];
    let sum = 0;
    while(queue.length){
        let currentElement = queue.shift();
        if(typeof currentElement == "number")sum += currentElement;
        else if(Array.isArray(currentElement))queue = queue.concat(currentElement)
    }
    return sum;
}

console.log(solveMatrix(matrix));