/* 
    While Loop
        (MDN) The while statement creates a loop that executes a specified statement 
        as long as the test condition evaluates to true. The condition is evaluated 
        before executing the statement.

        You're going to keep looping until your condition is false.
    
    Note: You can use the break statement to stop a loop. Using the return statement also will
        stop a loop.

    Note: You usually use a while loop WHEN YOU ARE NOT SURE how many times you want to loop
*/

/* 
    Syntax:
        while(condition){
            statement (whatever code you want to repeat)
        }
*/

let count = 0;

while(count <= 10){
    count++
    console.log("still here", count);

    // An example failsafe - so our loop doesn't try to run into infinity
    if(count > 100){
        break;
    }
}