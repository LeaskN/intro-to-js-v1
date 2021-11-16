// What is a key on an object? What is a value? What is a property?
    // A key is a variable on an object
    // A property is interchangeable with a key - it's a characteristic of an object

// What are a couple ways you can create an object?
    // Object Literal
    const someObject = {
        someKey: "Some String Value",
        someOtherKey: 5
    }

    // Object.create()
    const someOtherObject = Object.create({key: "string"});

    // Constructor function
    function Car(color, topSpeed, cost, mileage){
        this.color = color;
        this.topSpeed = topSpeed;
        this.cost = cost;
        this.mileage = mileage;
    }

    const myCar = new Car("Red", 190, 100000, 0);

// What are a couple ways you can access a keys value?
    // Using dot notation
    let storeVal = someObject.someKey;

    // Using bracket notation
    storeVal = someObject["someKey"];

// How do you assign a key-value pair to an already created object?

    // Using dot notation
    someObject.color = "Blue";

    // Using bracket notation
    someObject["color2"] = "Red";

// Declare a variable "human" and initilize it with a value of an object that contains relevant properties.
    const human = {
        species: "human",
        height: "9'1",
        age: 22,
        gender: "Female"
    }

// Create a function called covidVaccination that can take in that human object as an input and assign 
// it a new property that identifies that human as vaccinated.
    function covidVaccination(obj){
        if(obj.species.toLowerCase() === "human"){
            obj.vaccinated = true;
        } 
        return "Human Vaccinated";
    }
    console.log(covidVaccination(human));

    console.log(human, "<-- Our vaccinated human");

// Create a constructor function for humans.
    function Human(height, age, gender, name){
        this.species = "Human";
        this.name = name;
        this.height = height;
        this.age = age;
        this.gender = gender;
    }

// Create 5 new humans.

const tefe = new Human("5'10", 30, "Male", "Tefe");
const bayley = new Human("5'9", 23, "Male", "Bayley");
const shaundel = new Human("6'1", 22, "Male", "Shaundel");
const johnnaibys = new Human("5'7", 33, "Male", "Johnnaibys");
const lucian = new Human("5'9", 37, "Male", "Lucian");

// Vaccinate a couple of those humans and then store all of them in an array.

covidVaccination(tefe);
covidVaccination(bayley);
covidVaccination(shaundel);


/* 
    Create a function called covidScreener that can take in an array of humans as an input, and check to
    see who has been vaccinated - have the function return a string identifying those humans who have and 
    have not been vaccinated.
*/

const seClass = [tefe, bayley, shaundel, johnnaibys, lucian];

function covidScreener(arr){
    const vaccinatedHumans = [];
    const nonVaccinatedHumans = [];

    for(let i = 0; i < arr.length; i++){
        const currentHuman = arr[i];
        if(currentHuman.vaccinated){
            // console.log(currentHuman + " is vaccinated")
            vaccinatedHumans.push(currentHuman);
        } else {
            // console.log(currentHuman + " isn't vaccinated")
            nonVaccinatedHumans.push(currentHuman);
        }
    }
    
    let vaccinatedNames = "";

    for (let i = 0; i < vaccinatedHumans.length; i++) {
        const element = vaccinatedHumans[i];
        vaccinatedNames += ` ${element.name}`;
    }

    let nonVacinatedNames = "";

    for (let i = 0; i < nonVaccinatedHumans.length; i++) {
        const element = nonVaccinatedHumans[i];
        nonVacinatedNames += ` ${element.name}`;
    }
    // const vaccinatedString = vaccinatedHumans.reduce((output, human) => {  
    //     output += ` ${human.name}`;
    //     return output;
    // }, "");

    // const nonVaccinatedString = nonVaccinatedHumans.reduce((output, human) => {
    //     output += ` ${human.name}`;
    //     return output;
    // }, "");
    
    // return `These people are vaccinated: ${vaccinatedString}\nThese people aren't vaccinated: ${nonVaccinatedString}` 
    return `These people are vaccinated: ${vaccinatedNames}\nThese people aren't vaccinated: ${nonVacinatedNames}` 
}
console.log(covidScreener(seClass));

// Delete a property from one of your humans



// BIG NOTE: Objects are pass by value BUT that value is a reference to that object in memory.

///// PASS (STRICTLY) BY VALUE - WORKS ONLY FOR PRIMITIVE VALUES
let newVariable = "some random string";
    // Here I am trying passing the value of new variable to holdTheSameVal
let holdTheSameVal = newVariable;
    // checking that variable...
// console.log(holdTheSameVal, "<--- HERE WE ARE");
    // Here I am reassigning newVariable to a new string - does this affect holdTheSameVal?
newVariable = "Something else";
    // NO, IT DOES NOT. Because a string is a primitive value.
// console.log(holdTheSameVal, "<---- ACTUALLY HERE"); // Expected output: "some random string"
/////

///// PASS BY VALUE (BUT THE VALUE IS A REFERENCE) - WORKS FOR NON-PRIMITIVE VALUES
let newVariable2 = ["some random string", 5, "random"];
    // Here I am trying passing the value of new variable2 to holdTheSameVal2
let holdTheSameVal2 = newVariable2;
    // checking that variable...
// console.log(holdTheSameVal2, "<--- holdTheSameVal2");
    // Here I am reassigning the first index in newVariable2 to a number - does this affect holdTheSameVal2?
// newVariable2[0] = 23;
    // YES, IT DOES. Because an array IS NOT a primitive value - it's an object.
// console.log(holdTheSameVal2, "<---- holdTheSameVal2 mutated")