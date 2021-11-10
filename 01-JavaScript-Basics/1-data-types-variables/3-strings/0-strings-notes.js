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

let userInput = 'Harry Potter';
let preFlight = userInput.split(' ').join('-');
console.log(preFlight)

let recievedData = 'Harry-Potter';
let cleanData = recievedData.split('-').join(' ')
console.log(cleanData)