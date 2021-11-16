// const favMovies = ['Golden Eye', 'Matrix', 'Indiana Jones, Lost Ark'];
// const firstMovie = favMovies[0];
// // console.log(firstMovie);
// const lastMovie = favMovies[favMovies.length-1]

// // let exampleStr = 'Test'
// // const firstLet = exampleStr[0]
// // console.log(lastMovie);

// const rugRats = ["Tommy", "Chuckie", "Phil and Lil", "Angelica", "Susie", "Kimi", "Dil", "Spike"];

// console.log(rugRats[rugRats.length-1]);

// const myLuckyNumbers = [5, 3, 2, 11, 29];
// let lastEleDiv3 = myLuckyNumbers[myLuckyNumbers.length-1]/3;
// // myLuckyNumbers[myLuckyNumbers.length-1] = lastEleDiv3;
// // myLuckyNumbers[1] = myLuckyNumbers[1]*3;
// // myLuckyNumbers[myLuckyNumbers.length-1] /= 3
// // myLuckyNumbers[1] *= 3
// console.log(myLuckyNumbers);

// console.log(typeof 'test')
// console.log(typeof true)
// console.log(Array.isArray(myLuckyNumbers))

// console.log(typeof 'Hello World');
// console.log(Array.isArray([]));
let nums = [1,2,3,54,8,1];
// console.log(Array.isArray(nums));

// console.log(nums.indexOf(54));

// nums.push(0);

// console.log(nums.pop());

// console.log(nums.shift());

// nums.unshift(78)

// first number indicates the placement index
// second asks how many items to delete after that number
// the third is what will be inserted
// ONLY RUN ONE OF THESE LINES
// nums.splice(3, 1, 'test') // [ 1, 2, 3, 'test', 8, 1 ]
// nums.splice(3, 2, 'test') // [ 1, 2, 3, 'test', 1 ]
// console.log(nums);

let strOfNums = nums.join('-'); //1-2-3-54-8-1
let newArr = strOfNums.split('-'); //[1,2,3,54,8,1]
let finalArr = nums.concat(['a','b','c'])

console.log(finalArr);