// Write a function that uppercases the first letter of any string passed into it

function upperCaser(word){
    const firstLetter = word[0];
                                                        console.log(firstLetter, "<--- first letter");
    const upperCaseLetter = firstLetter.toUpperCase();
                                                        console.log(upperCaseLetter, "<--- uppercase letter");
    const restOfWord = word.slice(1);
                                                        console.log(restOfWord, "<--- rest of word");
    return upperCaseLetter + restOfWord;
}

const upperCased = upperCaser("johnnaibys");
console.log(upperCased, "<-- we should see Tefe");
/* 
    Rock Paper Scissors (using functions, conditionals, Math, variables, data type)
    Player VS Computer

        Possible outcomes:
            - Rock smashes Scissors
            - Scissors cuts paper
            - Paper covers Rock
            - There could also be a tie
        
        How should we break up our program?
            - Get the users choice
            - Get the computers choice
            - Compare the two choices and find out who won
            - Start the game and console.log the choices made & the winner

        Possible functions:
            getUserChoice();
            getComputerChoice();
            determineWinner();
            playGame();
            
*/ 


/*
    I'm going to remix this project with functions
*/

// I can use a template literal to add my name to the output message - or string concatenation.

// From this...
// let randomNumber = Math.floor(Math.random()*4 + 1);
// To this ->

function getRandomNumber(){
    return Math.floor(Math.random()*4 + 1);
}

function getAlternateRandomNum(){
    return Math.floor(Math.random()*4);
}

// From this...
// if(randomNumber === 1){
//     console.log(`${userName}, your future is looking kinda bleak my friend.`);
// } else if(randomNumber === 2){
//     console.log(`${userName}, your past doesn't determine your future. You'll be fine in life.`);
// } else if(randomNumber === 3){
//     console.log(`In two hours, you better watch your back, ${userName}`);
// } else if(randomNumber === 4){
//     console.log(`Undetermined future`);
// }
// To this ->

function getFortune(randomNumber){
    if(randomNumber === 1){
        return "your future is looking kinda bleak my friend.";
    } else if(randomNumber === 2){
        return "your past doesn't determine your future. You'll be fine in life.";
    } else if(randomNumber === 3){
        return "in two hours, you better watch your back.";
    } else if(randomNumber === 4){
        return "you have a undetermined future";
    }
}

function alternateGetFortune(randomNumber){
    const fortuneList = ["your future is looking kinda bleak my friend.", 
    "your past doesn't determine your future. You'll be fine in life.", 
    "in two hours, you better watch your back.", "you have a undetermined future"]
    return fortuneList[randomNumber];
}

function formatFortune(userName, fortune){
    return userName + " " + fortune;
}

function tellMeAFortune(userName){
    const randomNumber = getAlternateRandomNum();
    const fortune = alternateGetFortune(randomNumber);
    const output = formatFortune(userName, fortune);
    return output;
}

const myFortune = tellMeAFortune("Shaundel");

console.log(myFortune);