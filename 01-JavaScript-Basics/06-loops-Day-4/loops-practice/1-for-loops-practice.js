// // 1.   Declare a for loop that starts at 0, goes until 20, and increments by 1
// //      Each loop it should log to the console the current index
//         for(let i = 0; i <= 20; i++){
//                 // console.log(i)
//         }
// // 2.   Declare a for loop that starts at 1, goes until 40, and increments by 2
// //      Each loop it should log to the console the current index

//         for(let i = 1; i <= 40; i+=2){
//                 // console.log(i)
//         }

// // 3.   Create an array with all student names in it. 
// //      Loop over the array and log each student's name to the console.
// //      Inside the array declare an unrequired, but useful variable for 'currentStudent'
//         const students = ["Kelly", 'Daniel', 'Jordan']
//         for(let i = 0; i < students.length; i++){
//                 // console.log(students[i])
//         }

// // 4.   Use the array below for the following question
// //      Loop over the numArray & ONLY log even numbers to the console.
// //      2 Hints: there will be an IF statement within the loop & be sure to check the value, not the index
//         const numArray = [5, 3, 2, 1, 10, 20, 30, 22, 33, 12, 11, 9, 6, 3];
//         for(let i = 0; i < numArray.length; i++){
//                 if(numArray[i] % 2 === 0){
//                         // console.log(numArray[i])
//                 }
//         }

// // 5.   Use the above numArray array for this question
// //      Create a for loop which will iterate over each element of the above numArray and output a new array of only odd numbers

//         const oddNums = []
//         for(let i = 0; i < numArray.length; i++){
//                 if(numArray[i] % 2 !== 0){
//                         oddNums.push(numArray[i])
//                 }
//         }
//         console.log(oddNums)

// 6.   Create a for loop which will output two separate arrays, one with only positive numbers, one with only negative numbers

        const numArray = [5, 3, 2, -1, 10, 20, 30, -22, 33, 12, 11, 9, 6, -3];
        const positiveArr = []
        const negativeArr = []

        // for(let i = 0; i < numArray.length; i++){
        //         if(numArray[i] >= 0){
        //                 positiveArr.push(numArray[i])
        //         }else{
        //                 negativeArr.push(numArray[i])
        //         }
        // }
        // console.log(positiveArr)
        // console.log(negativeArr)

        // for(let num of numArray) {
        //         if(num >= 0){
        //                 positiveArr.push(num)
        //         }else{
        //                 negativeArr.push(num)
        //         }
        // }