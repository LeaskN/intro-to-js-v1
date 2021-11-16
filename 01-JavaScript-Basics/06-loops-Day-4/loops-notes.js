const customers = ["John Doe", "Sally Sal", "Mally Mal", "Theodore Cumberbatch", "Curtis Jackson", "Clark Kent", "Peter Parker", "Pegasus Walters"];

//Looping from the front
// way you will typically write it
for(let i = 0; i < customers.length; i++) {
    console.log(`Greetings ${customers[i]}`);
  }

//   // Looping from the back
//   for(let i = customers.length-1; i >= 0; i--) {
//     console.log(`Greetings ${customers[i]}`);
//   }

//Practice
// Only Log the even numbers
  const arrayOfNums = [5, 3, 2, 1, 0, 9, 10, 30, 55];
// //   const evenNums = []

//   for(let i = 0; i < arrayOfNums.length; i++){
//       if(arrayOfNums[i] % 2 === 0){
//           evenNums.push(arrayOfNums[i])
//       }
//   }
//   console.log(evenNums)

  //Loops over Array
// for(let element of arrayOfNums){
//     console.log(element)
// }

// // Loops over Object
// for(let element in obj) {
// }

// //ForEach
// arrayOfNums.forEach((element)=>{
// console.log(element)
// })

//Uses continue to start new iteration and jump over code that adds to string
// let favoriteNumbers = '';

// for(let i = 0; i < 10; i++){
//   if(i === 3 || i === 5 || i === 9){
//     continue;
//   }
//   favoriteNumbers += i;
// }

// //Only adding to string if its not those numbers
// for(let i = 0; i < 10; i++){
//     if(!(i === 3 || i === 5 || i === 9)){
//       favoriteNumbers += i;
//     }
//   }
  
//   console.log(favoriteNumbers);

const myShoppingList = ["Apples", "Bread", "Cheese", "Grapes", "Sauerkraut", "Cucumber"];
  const myFridge = ["Tartar Sauce", "Pickles", "Sauerkraut", "Milk", "Cheese"];
  const iAlreadyHave = [];

  for(let i = 0; i < myShoppingList.length; i++){
    for(let j = 0; j < myFridge.length; j++){
      if(myShoppingList[i] === myFridge[j]){
        iAlreadyHave.push(myShoppingList[i]);
      }
    }
  }

  console.log(iAlreadyHave);
  // Output: ["Cheese", "Sauerkraut"]


  const famousQuote = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."

  const vowelCount = 0
