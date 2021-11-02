/* Objects:
   Review - What do we remember about Objects?
    - They have key value pairs
    - They have properties -> this is another word for a key-value pair (or just the name of a key)
    - They store pieces of data
    - Instead of indices, we use keys to access information stored within an object
    - You can store an object in a variable
    - You can different types of data in an object - ie. a function (which is also an object)
    - Objects have methods! These are functions that are relate to the object
    - You can add, read, update & delete values from an object
    - "This" is a keyword generally associated / used with objects
*/

const introduction = (user) => `Hi, I'm ${user.name}`;

// How do I create a user object that can work with the function above?

const user1 = { name: "Dwight Jr.", birthday: "November" }
const user2 = { name: "Pam", birthday: "December" }
const user3 = { name: "Plop" }

// Lets use our introduction function with our user object

console.log(introduction(user1));

/* 
    Classes:
        We use objects to model real-world items and classes are essentially a way to create a template
        for these items, enabling us to make objects (instances) from those templates quickly.

*/

// ES5, we wont be using this though...(essentially an old school way of creating a object constructor)
// function User(name){
//     this.name = name;
//     this.introduction = () => `Hi, I'm ${name}!`
// }

// ES6 version - this way of creating a class is referred to as "syntactic sugar" over the REAL inner workings of
// JavaScript
class User {
    constructor(name, height){
        this.name = name
        this.height = height
    }

    introduction(){
        return `Hi, I'm ${this.name}!`
    } 

    comment(forum, comment){
        forum.setComment(comment, this.name);
    }
}

class Forum {
    constructor(subject){
        this.subject = subject;
        this.comments = []
    }

    setComment(comment, userName){
        this.comments.push({ comment, userName });
    }

    showComments(){
        this.comments.forEach(comment => console.log(`${comment.userName}: ${comment.comment}`));
    }
}

// Creating an instance of a user from the User class
const user4 = new User("Bayley");

// Creating an instance of a Forum
const generalForum = new Forum("General Forum");

// Using properties on my objects (instances) to log a custom string
console.log(`${generalForum.subject} has these comments: ${generalForum.comments}`);

// Using a method with my user instance, that I defined in my User class 
user4.comment(generalForum, "Bayley is the only person with his camera on wtf?!");

// Using a method with my forum instance, that I defined in my Forum class 
generalForum.showComments();

// Here I'm creating a new forum instance
const troubleShootingforum = new Forum("Troubleshooting");

// Here I am using a method from my user instance...
user4.comment(troubleShootingforum, "I don't know how to stay in a Team's classroom");

// Again, using a method from my forum instance
troubleShootingforum.showComments();


/* 
    AUTOMOBILE EXAMPLE 
        Imagine you own a dealership and want to create a database of all the vehicles you have in stock. Instead of writing out
        an object the way we've learned before (ie. using an object literal) for each vehicle, we can create an Automobile class
        that will serve as a template for all Automobile objects.

        Note: We PascalCase (start with a capitalized letter) class names by convention. We don't do this with objects.
*/

/*
    Breaking it down: The Constructor
        When creating a class, the constructor method should stand out to you as a main difference between class and object syntax.
        This method is called every time you create a new instance of a class (where an object is created from the class). 
            - The below constructor accepts 4 arguments: brand, miles, sprice, speed.
            - We are using the "this" keyword within a class structure so that the context of our variables carries over to each individual
            instance we create.

    Getter and Setter functions
        These are known as "accessor functions". We use them to "set" and "get" our objects property values.

        What is the point of this?
        -> https://zellwk.com/blog/why-use-getter-and-setter-functions/

            There are two reasons:
                1. Syntax Reasons
                2. Encapsulation (oh boy) --> this is one of the PILLARS OF OBJECT-ORIENTED PROGRAMMING
*/

class AutomobileWithGetters {
    constructor(brand, mileage, price, topSpeed){
        this._brand = brand;
        this._mileage = mileage;
        this._price = price;
        this._topSpeed = topSpeed;
    }

    get brand(){
        return this._brand;
    }

    get mileage(){
        return this._mileage;
    }

    get price(){
        return this._price;
    }

    get topSpeed(){
        return this._topSpeed;
    }

    set price(newPrice){
        this._price = newPrice;
    }

    printSpeed(){
        console.log(`Top speed: ${this.topSpeed} MPH`);
    }

    printMileage(){
        console.log(`Milage: ${this.mileage}`);
    }

    printBrand(){
        console.log(`Brand: ${this.brand}`);
    }
}

class Automobile {
    constructor(brand, mileage, price, topSpeed){
        this.brand = brand;
        this.mileage = mileage;
        this.price = price;
        this.topSpeed = topSpeed;
    }

    printSpeed(){
        console.log(`Top speed: ${this.topSpeed} MPH`);
    }

    printMileage(){
        console.log(`Milage: ${this.mileage}`);
    }

    printBrand(){
        console.log(`Brand: ${this.brand}`);
    }
}

/*
    Breaking it down: An Instance
        An instance is an object that maintains it's own values for the properties of it's class.
*/

const myFirstAutomobile = new Automobile("Pontiac", 5000, 8000, 110);

myFirstAutomobile.printMileage();

const tefesCar = new Automobile("Jaguar", 0, 65000, 110);

function revealCarAttributes(car){
    console.log(car.brand, car.mileage, car.price, car.topSpeed)
}

console.log(myFirstAutomobile.mileage, "<--- getting the mileage - this is utilizing our getter method for mileage");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
    Inheritance / Creating child classes (aka subclasses)
        What if we wanted more specific classes for the Automobiles in our dealership? Well my friends, let me introduce
        you to this keyword called "extends", the concept of inheritance, and the concept of a child class.

        What is inheritance?
            It's simply when you want another class to inherit properties / methods from a "parent class".
            The concept of inheritance is ANOTHER PILLAR OF OBJECT ORIENTED PROGRAMMING.

        The "extends" keyword...
*/

class Coupe extends Automobile {
    constructor(brand, mileage, price, topSpeed, owner){
        super(brand, mileage, price, topSpeed);
        this.owner = owner;
        this.doors = 2;
    }
}

const tefesCoupe = new Coupe("BMW", 0, 65000, 125, "Tefe");