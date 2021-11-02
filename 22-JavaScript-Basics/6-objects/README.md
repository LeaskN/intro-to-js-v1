![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)


## JavaScript Intro - Objects

### Objectives
* Understand the difference between a traditional objects and an array
* Be able to create objects using object literals syntax
* Be able to explain the different parts of an object property
* Be able to access property values, create properties, and re-assign property values.
* Be able to iterate over an object

## What Are Objects? (10 minutes)

Objects are a universal data structure accross all programming languages. There is even a lauded and fundamental progamming paradigm called [Object Oriented Programming (OOP)](https://www.educative.io/blog/object-oriented-programming) that's highly beneficial to learn more about for anyone just getting into programming. Objects are a data strucutre like an array is a data structure, except objects use named `keys` to hold and access their values instead of `indices`. Objects can also hold multiple `types` of data (like arrays can in JavaScript) and generally are made up of what are called `properties` and `methods`.

The first thing to understand about objects and OOP is that objects are meant to model real life things. It's quite common to use a car as an example when describing how you can take an object / entity that's well known, and model it with an object in programming:

A car has `Properties`:
- A color
- A type (convertible, hatchback etc.)
- Mileage
- Top speed
- etc.

A car has `methods`:
- Start engine
- Turn off engine
- Turn left
- Turn right
- etc.

`Properties` should be fairly self-explanatory in that they describe the object. `Methods` are functions, but because they are created within the object they are thought of actions that the object can invoke on itself - all of the functionality, if following best OOP practices should be related to the entity itself (ie. a `start engine` method can, but shouldn't exist on a `cat` object).

On another note, **everything in JavaScript is an object**... aside from primitive types - but heres the thing, even primitive values can act like objects. For instance, if you recall that with `string` values you can check the length by calling the property `.length`, and they also have methods you can use directly off of a `string` like: `"Hello there".splice(1)"`. We are not going to get into this, but I strongly encourage you to read about when you're ready - it's a mechanism in JavaScript called [**autoboxing**](https://dev.to/benjaminmock/do-you-know-what-autoboxing-in-js-is-enl).

---

## Creating Objects - Object Initializers (15 minutes)

There are different ways of creating an object in JavaScript. We'll focus on one for now and list the rest because the others go into a slightly deeper concept in JavaScript that we'll hold off on.

### Object Literals

Just like any value in JavaScript, we can assign objects to variable names. Using object literal syntax we can create an object simply by assigning a variable an empty set of curly braces `{}`.

```js
const car = {}; // An empty object
```

This is probably one of the more popular and straight forward way of creating an object. Also, notice just like with arrays we are defining this variable with `const`. Even though the values inside the object can change, it's common practice.


### Object Properties - Keys & Values

Properties, like mentioned earlier, help describe the object. You can create a property like this.

```js
const car = {
    color: 'Green',
    engine: 'V8'
};
```

Here we've given our car object a `color` and an `engine` property. An object **key** is pretty much the same as a variable name - it holds a reference to a value. All object `properties` are made of **key** and **value** pairs. For example you would say our `car` object has a **key** of `color`, which holds the **value** of the string `'Green'`. 

#### Syntax notes
- Notice how we are seperating the two properties on our object, `color` & `engine`, with a comma. If we had another property after engine, we'd have to have another comma present. This is part of the syntax, without it we'll get an error.
- You'll sometimes see the properties on an object written on one line if there aren't that many for instance. All other syntax rules apply, including the commas to seperate the properties, but the one liners are just a formatting preference and for redability.

**Keys** are strings, but when a key that doesn't have special characters in it, JavaScript lets us omit the quotation marks. Notice what needs to happen when we add a `space` to a key:

```js
const car = {
    color: 'Green',
    engine: 'V8',
    'Tail Pipe': 'Dual Rear Exit'
};
```

In order to use a `space` character with `key` we need to explicity write in the quotation marks. It's best practice to avoid doing this and instead opt for camel casing or using one word for the property name. In a similar sense, we can't just use a number as a `key` unless it's wrapped in quotes.

It's also important to note that the **key - value pairs**, which make up the properties of an object, are in an unordered state - unlike an array where data is stored using a sequential index based system.

---

## Accessing & Assigning Properties (10 Minutes)

There are two ways to access an object property. One of them involes using **dot notation** (`.`), and other is with **bracket notation** (`[]`). These are known as [**property accesors**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors). These aren't new mechanisms for us at this point, but it's worth reviewing. 

```js
const car = {
    color: 'Green',
    engine: 'V8',
    exhaust: 'Dual Rear Exit'
};

car.exhaust // Uses dot notation to access the exaust property
// This evaluates to 'Dual Rear Exit'

car['exhaust'] // Uses bracket notation to access the exaust property
// This also evalutes to 'Dual Rear Exit'
```

The only way to target a key that has a name with a special character in it (like a space) is with `bracket notation`.

You can also use a variable to target a property using `bracket notation`. 

```js
const useThis = 'engine';

const car = {
    color: 'Green',
    engine: 'V8',
    exhaust: 'Dual Rear Exit'
};

car[useThis]
// Evaluates to 'V8'
```

This can be especially helpful when incorporating functions.

```js
const returnAnyProp = (object, properyName) => object[propertyName];

returnAnyProp(car, 'engine');
// Evaluates to 'V8'
```

### Time To Practice!
Create a family of 5 including a dog!

### Property Assignment (10 minutes)

You can assign properties to objects after they've been created. Once created, objects are still mutable. You can use either `dot notation` or `bracket notation` to target a key-value pair, and then use the `assignment operator` (`=`) to reassign the value. You can also create a brand new property by using the same formula. Lets go back to using our car example.

```js
const car = {
    color: 'Green',
    engine: 'V8',
    exhaust: 'Dual Rear Exit'
};

car.engine = 'V6';
// We've changed the engine property on our car object

car.topSpeed = '125 mph';
// What?? Oh, we can add a brand new property like this too

console.log(car);
/*
    Output:

    {
        color: 'Green',
        engine: 'V6',
        exhaust: 'Dual Rear Exit',
        topSpeed: '125 mph'
    }
*/
```

Four points to review:
1. You'll get an error if you try to reassign the variable name of the object itself, because we've declared it with const.
```js
car = {} // This will throw us a TypeError - assignment to constant variable is not allowed
```
2. If a property already exists on an object, the value will be changed as soon as you target that property and use the assignment operator.
3. If the property doesn't exist, a key-value pair will be added to that object.
4. This works the same with bracket notation.

```js
car['engine'] = 'AC Electric';
```

### The `delete` Operator

You can use the `delete` keyword before targetting a property to remove the entire property from the object.

```js
delete car['engine']
// If we console.log car at this point we will no longer see the engine key-value pair

```

## Methods (5 minutes)

A function defined on an object is called a `method`. A property is kind of like an `adjective` of an object, while a method is a `verb` - or what the object does. We have already been using methods throughout the program. Every time we `log` something to the `console` we are using a method - the `.log` method of the `console` object. The same goes with any of the other `string` methods or `number` methods (a converstion happens where the primitive value gets wrapped in object right before using a method - again this goes back to [autoboxing](https://dev.to/benjaminmock/do-you-know-what-autoboxing-in-js-is-enl)).

Methods are defined exactly how you've already learned to define them, except they exist on the value side of an object property.

```js
const car = {
    color: 'Green',
    engine: 'V6',
    exhaust: 'Dual Rear Exit',
    topSpeed: '125 mph',
    start: function(){
        console.log("Vroom Vroom!");
    }
}
```

Then to call a method you would use the following syntax.

```js
car.start(); // "Vroom Vroom!"
```

Remember, in order to execute the function once it's referenced by name, you have to add a opening and closing parentheses after it.

Of course, you could also use `bracket notation` to reference the function, but that's not very conventional.

```js
car['start'](); // "Vroom Vroom!"
```

##### Retroactively Assigning Methods (5 minutes)

The same way you can add/reassign a property after the initial object defintion, you can do the same with a function.

```js
function startCar(){
    console.log("Vroom Vroom!");
}

car.start = startCar;

car.start(); // "Vroom Vroom!"
```

### ES6 Method Syntax (5 minutes)

Since ES6, you can now actually omit the the `function` keyword and the semi-colon `:` when defining a method.

```js
const car = {
    color: 'Green',
    engine: 'V6',
    exhaust: 'Dual Rear Exit',
    topSpeed: '125 mph',
    start(){
        console.log("Vroom Vroom!");
    }
}
```

---

## Nested Objects (5 Minutes)

You'll frequently come accross the nesting of data structures. For instance, the nesting of an object within an object is quite common. If you wanted to dig into a nested object and reference a property, you can chain together **property accesors** in order to get to the data you need. For instance, given my updated `car` object below, if I wanted to get the material of the wing spoiler I could the following:

```js
const car = {
    color: 'Green',
    engine: 'V6',
    exhaust: 'Dual Rear Exit',
    topSpeed: '125 mph',
    racingAccessories: {
        sharkfins: 10,
        wingSpoiler: { brand: 'Mophorn GT', material: 'Aluminum'},
        sideSkirt: { brand: 'Samurai', material: 'Carbon Fiber'}
    },
    start(){
        console.log("Vroom Vroom!");
    }
}

car.racingAccessories.wingSpoiler.material // This evaluates to: 'Aluminum'

```

>**Reminder:** You can nest any kind of data into an object, including arrays. To target an element within an array that's nested in an object, you would also use the technique we used above - chaining together property accesors.

## Pass By Reference (10 minutes)

Objects get passed by reference, which means if we were to pass an object into a function as a variable and then mutate a key on that variable, that would reflect back on the object. This is because when we pass an object around our applications, we are just pointing to that object in memory, as opposed to creating a new value. This might already make sense to you, or not. Either way it's an important thing to keep in mind - primitive values don't get passed by reference, they get passed by value, so we can't reassign the variable unless we explicity called upon that variable within the function body.

```js
const momsCar = {
    color: 'Orange',
    brand: 'Honda',
    topSpeed: 90
}

let newSpeed = 125;

function tryMutatePrimitive(prim, value){
    prim = value;
    return prim;
}

tryMutatePrimitive(newSpeed, 300);
// Returns 300
console.log(newSpeed);
// Nothing changed - logs 125.

function tryMutateObject(obj, prop, value){
    obj[prop] = value
    return obj;
}

tryMutateObject(momsCar, topSpeed, 300);
// Returns the momsCar object
console.log(momsCar.topSpeed);
// Logs 300
```

The above was kind of a long winded example of what can happen when you forget the pass by reference rule in JavaScript. A more concise way of showing that you are dealing with a reference when dealing with `arrays` or `objects` is by using the `strict equality operator` and comparing two objects.

```js
const object1 = { first: 1, second: 2 };
const object2 = { first: 1, second: 2 };
const object3 = object1;

console.log(object1 === object2);
// This returns false

console.log(object3 === object1);
// This returns true
```

One might assume that `object1` and `object2` would be equal to each other because they hold what looks like the same values, but in fact they are two seperate objects that are created in memory and have their references stored into those variable names. This is further highlighted by `object3` being equal to `object1`, because they are sharing a reference to one object in memory.

### Copying Objects

In light of the fact that objects are mutable and pass by reference, its good to know the different ways that you can make copies of them. One unfortunate shortcoming of these operations however, is the inability to make a **deep copy** of an object. They will make what is known as a **shallow copy**, which means they will only copy primitive values within the first level of an object - if there are any nested objects (more levels) those objects will still hold on to their own reference in memory, which means their reference will be copied over. This is important to keep in mind - but we won't worry about that too much for now. When we get into classes we'll get a better understanding of how you should approach making copies of an object. 

>**Note:** There is nice write-up about copying deeply nested objects without thinking about classes [here](https://javascript.plainenglish.io/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089), but this is going beyond the scope of what we are covering right now. However, this is going beyond the scope of what we are covering right now.

#### Spread Syntax
[`...`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) will take either a string, array or object and spread out and layer it's elements into a data structure where possible (the function argument space included). This means that if those elements are primitive values, they will be copied.

```js
const car = {
    color: 'Green',
    engine: 'V6',
    exhaust: 'Dual Rear Exit',
    topSpeed: '125 mph'
}

const newCar = {...car};

console.log(newCar);
/*
    This will log:
        {
            color: 'Green',
            engine: 'V6',
            exhaust: 'Dual Rear Exit',
            topSpeed: '125 mph'
        }
*/

console.log(newCar === car); // This will log false
```

### Object.assign()
This is actually a good way to merge two objects together, or make a **shallow copy** of one into another. It does this by taking the elements (or key-value pairs in this case) and appending them into the list of elements of another object.

```js
const car = {
    color: 'Green',
    engine: 'V6',
    exhaust: 'Dual Rear Exit',
    topSpeed: '125 mph'
}

const newCar = {};

Object.assign(newCar, car); // Here the left argument is the target object, and the right argument is the source object

console.log(newCar);
/*
    This will log:
        {
            color: 'Green',
            engine: 'V6',
            exhaust: 'Dual Rear Exit',
            topSpeed: '125 mph'
        }
*/

console.log(newCar === car); // This will log false
```

---

## Iterating Through Objects (5 minutes)

Although the key-value pairs in Objects are `unordered data` JavaScript has given us a solution to loop over them anyway. It's another `loop` that you can actually also use with arrays, it just works a little bit differently.

```js
const car = {
    color: 'Green',
    engine: 'V6',
    exhaust: 'Dual Rear Exit',
    topSpeed: '125 mph',
    racingAccessories: {
        sharkfins: 10,
        wingSpoiler: { brand: 'Mophorn GT', material: 'Aluminum'},
        sideSkirt: { brand: 'Samurai', material: 'Carbon Fiber'}
    },
    start(){
        console.log("Vroom Vroom!");
    }
}

for(let key in car){
    console.log(`${key}: ${car[key]}`);
}
```

Within the parentheses of this `for loop`, we set the variable name that will represent each key of the object we are iterating over - `let key` . In the code block, we are printing the actual name of the `key`, and also the value that's associated with that `key` by accessing the value with `bracket notation`. We are using template literal string syntax to produce a nicely formatted output in the console.