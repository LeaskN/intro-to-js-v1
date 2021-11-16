// // Concatenation
// console.log("3" + "2");
// console.log(3 + 2);
// // Concatenation with type coersion
// console.log(3 + '2');

// Intentional converstion from number to string 
// let num = 4;
// console.log(num);
// let strNum = (num).toString();
// console.log(strNum);

// Intentional conversion from string to number
// let str = '10';
// console.log(str);
// let numStr = parseInt(str);
// console.log(numStr);

// String to num with unary plus
// let string = '42';
// let num = +string;

// console.log(num);

// console.log('This is Nic\'s pen')

// let userInput = 'Harry Potter';
// let preFlight = userInput.split(' ').join('-');
// console.log(preFlight)

// let recievedData = 'Harry-Potter';
// let cleanData = recievedData.split('-').join(' ')
// console.log(cleanData)


// let strI = "I"
// let strAm = "am"
// let strHappy = "happy"

// console.log(strI + ' ' + strAm + ' ' + strHappy);

// const adjective = "cautious";
// const verb = "bake";
// const noun = "Australia";

// "${}You're harry potter!"
// '${}James said, "Bond, James Bond"'
// `${}`


// const tempLiteralSent = `I am ${adjective} when I ${verb} for ${noun}.`;

// console.log(tempLiteralSent);

// const name1 = 'Harry Potter';
// const name2 = 'Jack Sparrow';
// const name3 = 'Peter Jackson';
// const name4 = 'Samwise Gamgee ';

// let init1 = name1[0] + name1[6];
// let init2 = name2[0] + name2[5];
// let init3 = name3[0] + name3[6];
// let init4 = name4[0] + name4[8];

// console.log(init1, init2, init3, init4);

let str1 = 'This is a test.';
let str2 = 'Is this a another test?';

// let lastChar = str2[str2.length-1];
// let lastChar = str2.substr(-1);
// let lastChar = str2.slice(-1);
// console.log(lastChar);

//Bonus: Dynamically get the initials from the above names

// const inputName = 'Harry Potter';
// const inputName = 'Jack Sparrow';
// const inputName = 'Peter Jackson';
let inputName = 'Samwise Gamgee';
// inputName = inputName.trim();

let firstInit = inputName[0];
let secondInitalIndex = inputName.indexOf(' ')+1;
// find the space
let secondInit = inputName[secondInitalIndex];
let initials = firstInit + secondInit;

console.log(initials);


