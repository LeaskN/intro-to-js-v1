![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)



# JavaScript Intro - Data Types & Variables

## Objectives
* Be able to describe what a data type is and which ones exist in JavaScript
* Understand the concept of a variable
* Be able to declare and manipulate the data stored in variables using JavaScript syntax
* Understand why the name of your variable is important

---

# JavaScript Overview
A programming language is used to instruct a computer what to do. We call them languages because they are written, expressive and have grammar and syntax rules much like English or any other spoken language. There are A LOT of programming languages - hundreds if not thousands. While they are all different in their own way, there are core principles that are shared throughout all languages (like... data types and variables! More on that soon). So why are we learning JavaScript? JavaScript is known as the language of the web. When the world-wide web was first conceived, it was all text based only. JavaScript filled the void that HTML, CSS and backend technologies couldn't fill - making web pages more interactive, dynamic and engaging.

JavaScript was invented by Brendan Eich in 1995, and has become one of the 3 languages all web developers must learn - the other two being HTML and CSS. JavaScript is special because it enables more advanced interaction between the user and a web browser - it can respond to user input and doesn't need to communicate with a back-end server. It's also unique in the sense that you can use it for back-end development as well, where most programming languages are either user-interface based (front-end / browser side) or server side (back-end).
 - Watch [this 12 minute video going through the history of JavaScript](https://www.youtube.com/watch?v=Sh6lK57Cuk4&ab_channel=Fireship) 

---

# What Are Data Types?
> **Definition**: A data type (or just "type") is a classification given to a kind of data, identifying the family of the data and narrowing the operations that can be performed on a given value created from that data type, how the value is stored, and the meaning of the value.

A quick breakdown of two popular data types should help wrap your mind around what a "classification" of data means:
  - The `Number` data type should be pretty straight forward to understand - you can add two numbers together and get the sum. You can also multiply two numbers together and get a product. So yes, any math operation can be performed on a `Number`.
  - The `String` data type is anything in between `" "`, `' '`, or ``` ` ` ```  - you can think of a string as a list of characters - including spaces. "Hi, my name is John", is an example of what a `String` might look like. Unlike a `Number`, you can't expect that you'd be able to multiply a `String`. It's in a different family of data.

As mentioned earlier, data types are fairly consistant accross all programming languages. Remember, once you understand them in JavaScript you can more easily understand them in any language. There are **nine fundamental data types in JavaScript** and [they are](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) broken up into 3 umbrella categories:
  
### [Primitive Data Types](https://levelup.gitconnected.com/summary-of-data-types-in-javascript-a04d02715a9a#:~:text=There%20are%207%20primitive%20data,null%2C%20undefined%2C%20and%20symbol.)
  - `String` - A fancy word for text! You can also think of them as a list of characters - ie "Hello" has 5 characters - "H", "e", "l", "l", "o". A character can be anything you can physically type on your keyboard and create text with (yes, including numbers) - in programming, as long as you add quotations around the character(s) `" "` it's considered a `String` data type.
  - `Number` - Numbers!
  - `Boolean` - There are two values that are in the `Boolean` family - `true` and `false`. Think of a lightbulb - a question could be asked whether or not a light is on or off. The answer to that question has two possible answers (values), `true` or `false`.
  - `null` - the intentional declaration of nothing 
  - `Undefined` - This will make more sense when we talk about variables - it's a essentially what happens when a variable has been declared but a value hasn't been assigned. It's usually represents an unintended absence of value.
  - `Symbol` - This is a way to construct a value that is guaranteed to be unique. It's fairly new to JavaScript and used in complex coding. We likely wont need to use this in this program.
  - `BigInt` - Similar to `Number` except can represent MUCH larger numbers.

### Reference Data Types (non-primitive)
  - `Object` - A complex data type allowing for a collection of related data. An object contains properties - defined as key-value pairs. We'll talk about this more later.
  - `Function` - A re-usable block of code, technically, functions are `Objects` but they operate very differently.

### Structural Root Primitive
  - `null` - An absence of value. This is a data type with one value, `null`. It is created with intention by the programmer and is considered both a primite and a structural data type in JavaScript.

## How do we know the data type of some bit of code?

[We can use the keyword 'typeof'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) to check what the datatype is of any given value. When used correctly, it will return a string describing the datatype:

```js
console.log(typeof 50);
// The above will output: "number"

console.log(typeof "here we are");
// The above will output: "string"

console.log(typeof true);
// The above will output: "boolean"
```

---