/*

    What is an object?
        - A data structure
        - Not a primitive value
        - Objects can hold all kinds of data - arrays, objects, strings, numbers...
        - Objects don't use indices, they use what are called keys to access / store pieces of data (key-value pairs)!!!!
        - Objects are generally made up two things: properties and methods.
        - Think of a key as variable name, and the value as being... well, the value of that variable.
    
    What are properties?
        - Think of the .length property on arrays.
        - Properties are data that objects hold, which should describe the object in some way.
    
    What are methods?    
        - Methods ARE FUNCTIONS. They are attached to objects, and because of that, you can 
            think of them as actions that the object can call on itself.
        - Think console.log() <-- log() is a method (function) on the object console.

    The keyword "this" for Object References
        - Remember, objects aren't primitive values.
        - This refers to the current object. 
        - When thinking about storing objects in variables, you actually store a reference to where it exists
            in memory. So, using the keyword "this", you can have an object refer to itself.

    Big term: Object-Oriented Programming
*/

// Example: A car

// An array is an ordered list
const myArray = ["some string", 5, "another string"];

// How do I create an object? 
    // - object literal (syntax)
        // key-value pair (below)
const person = {
    hairColor: "Brown",
    height: 5,
    weight: 150
}
    // - constructor function
function Car(color, topSpeed, cost, mileage){
    this.color = color;
    this.topSpeed = topSpeed;
    this.cost = cost;
    this.mileage = mileage;
}

const newCar = new Car("blue", 175, 10000000000, 0);
console.log(newCar, "<--- new car");

    // - Object.create()
const object1 = Object.create(person);
console.log(object1.species, "<--- our object")

// What does a key-value pair on an object look like
const anotherObject = {
    someKey: "some value",
    anotherKey: "Another value",
    yetAnotherKey: 5
}

// How do I access information from a regular object?
console.log(anotherObject.anotherKey);
// Or
console.log(anotherObject["someKey"], "<-- line 38");

// Objects allow us to define a wrapper of information
const myCar = {
    color: "Red",
    topSpeed: "175 mph",
    cost: 1000000,
}

console.log(myCar.color);

// How do I add a value to an object? (how to add another key-value pair - if the key doesn't already exist, it'll be created ie:)
myCar.mileage = 1000;
//Or
myCar["custom"] = true;

// How do I re-assign a key?
myCar.color = "Blue";
console.log(myCar, "<--- updated car");

// Methods, what do they look like?
const anotherCar = {
    color: "Red",
    topSpeed: "175 mph",
    cost: 1000000,
    isCarOn: false,
    turnCarOn: function(){
        this.isCarOn = true;
    },
    checkEngine: function(){
        if(this.isCarOn){
            console.log("Vroom!");
        } else {
            console.log("Car is off");
        }
    },
    displayTopSpeed(){
        console.log(this.topSpeed, "<-- our cars top speed");
    }
}

anotherCar.checkEngine();
anotherCar.turnCarOn();
console.log(anotherCar, "<-- check it out");
anotherCar.checkEngine();
anotherCar.displayTopSpeed()


/* 
    The "this" keyword - refers to the object you are working in
    MDN DEFINITION: 
        "A function's this keyword behaves a little differently in JavaScript compared to other languages. 
        It also has some differences between strict mode and non-strict mode.

            In most cases, the value of this is determined by how a function is called (runtime binding). 
        It can't be set by assignment during execution, and it may be different each time the function is called. 
        ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 
        introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing 
        lexical context)."
*/

const newObject = {
    testing: "Hi, we are a string",
    displayTesting: function(){
        console.log(this.testing, "<--- testing our 'this' keyword");
    }
}

/* 
    The delete operator
        You can delete a property (key-value pair) with the delete operator
*/

const player1 = {
    userName: "falcon-punch-1990",
    hitPoints: 50,
    attacks: {
        falconPunch: 100,
        dropKick: 25
    },
    gymBadges: ["Cascade Badge", "Boulder Badge", "Thunder Badge", "Rainbow Badge"],
    lifeExpectancy: 25
}

delete player1.lifeExpectancy

console.log(player1, "<-- player 1");

/* 
    You can kind of think of objects as an unordered list (there is a caveat):
        You can actually iterate over an objects keys in order 
*/

    // One way you can loop through your object is with a for...in loop
for(let myKey in player1){
    // console.log(myKey, "<--- key");
    console.log(player1[myKey], "<-- all values");
}

    // Other ways you can iterate over an object
        // Get all my keys and put them into an array
console.log(Object.keys(player1), "<--- return all my keys into an array");

        // Get all my values and put them into an array
console.log(Object.values(player1), "<--- return all my values into an array");

/* 
    How to copy an object 
        - You can use Object.assign(target, source);
        - You can use spread syntax (...)
*/