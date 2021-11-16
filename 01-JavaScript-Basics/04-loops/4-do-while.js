/*
    do...while
        (MDN) The do...while statement creates a loop that executes a specified statement until 
        the test condition evaluates to false. The condition is evaluated after executing 
        the statement, resulting in the specified statement executing at least once.

    Syntax:
        do {
            statement
        } while (condition);

    Note: the statement in the "do" will execute at least once. This is one of the main differences
        I'd say between this way of writing a loops versus others.
*/

let count = 0;
let countTimes10 = null;
do {
    count++
    countTimes10 = count;
    countTimes10 *= 10;
} while(count < 0);

console.log(count, "<--- count");
console.log(countTimes10, "<--- countTimes10");