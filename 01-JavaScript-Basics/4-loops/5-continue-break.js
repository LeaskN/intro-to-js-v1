/*
    You can use these keywords when looping:
        continue
        break
*/

    /* 
        An example of the difference between the keywords:
            break
            return

        When you use return in a function, you break out of whatever loop AND function...
        If you use break, you'll just break out of the scope - ie loop.
    */

const testFunc = () => {
    for(let i = 0; i < 20; i++){
        if(i === 10) return;
        console.log(i);
    }
    console.log("Here now");
}

// testFunc();

const testFunc2 = () => {
    for(let i = 0; i < 20; i++){
        if(i === 10) break;
        console.log(i);
    }
    console.log("Here now");
}

// testFunc2();


// Example of continue - you can use continue to skip an iteration within a loop

const testFunc3 = () => {
    for(let i = 0; i < 20; i++){
        console.log(i);
        continue;
        console.log("I am never going to be logged");
    }
    console.log("Here now");
}

testFunc3();