/* Create an object and store it in a variable */

    // This is one way to create an object - it's called a template literal
const cellphone = {};

/* Add properties to the object above */
    
    // There are two main ways
    // Note: try to keep your keys lowercase 
cellphone.provider = "Verizon";
cellphone["storage"] = "32gb";
cellphone.verizon = "My provider";

console.log(cellphone, "<-- my properties here");

    // This is why you might want to create an object with square brackets (you can use variables or spaces to create a key)
let x = "screenSize";
cellphone[x] = "PLUS";

console.log(cellphone, "<--  added properties");

/* Create a function that allows us to add new properties to an object (our phone)*/

function addProtection(phone, addCase, addProtector){
    if(typeof addCase === 'boolean' && typeof addProtector === 'boolean'){
        phone["hasCase"] = addCase;
        phone["hasScreenProtector"] = addProtector;
    } else {
        console.log("Hey, use booleans my guy");
    }
}

addProtection(cellphone, "apple case", false);

console.log(cellphone, "<-- added protection");

// How would I lookup my cellphone provider?

console.log(cellphone.provider,"<--- my phone provider");

// How would I loop over my cellphone object and log all its keys and values?

for(let myKey in cellphone){
    // console.log(myKey);
    console.log(`key: ${myKey} ||||| value: ${cellphone[myKey]}`);
}

// How do I loop over an object and check to see if a specific value exists?

function checkIfValueExists(obj, inputValue){
    // Steps:
    // 1. We can loop over our object, 
    // 2. check each value against our inputValue
    // 3. If the value exists, return true
    // 4. If the value doesn't exist, return false
    
    // 1
    for(let key in obj){
        // 2
        if(obj[key] === inputValue){
            // 3
            return true;
        }
    }
    // 4
    return false;
}

console.log(checkIfValueExists(cellphone, "PLUS"));