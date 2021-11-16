![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)



## JavaScript Intro - Numbers and Math Object Methods

### Objectives
* Understand the Number data type
* Understand how to use JavaScripts global Math object and its methods
* Understand how to use the Modulus operator
* Understand how to use the Artihmetic, Increment & Decrement, and Math Assignment operators

## JavaScript Math Overview

Math is an important facet of programming and being good at it will only help you in this field. However, in general computers operate on pretty straight forward and simple logic and you'll often find that the math that's required for the job won't involve anything like calculus (at least not in this program). If you're familiar with linear algebra, you'll definitely see a lot of that. More to the point, just like JavaScript has built in `String` methods, it also comes with built in `Math` methods.

### Arithmetic Operators (10 minutes)

The simplest form of Math is arithmetic, and JavaScript uses all the operators one would imagine. 

Multiplication: `*`
Division: `/`
Subtraction: `-`
Addition: `+` (remember, this operator is also used with `Strings`)

And lastly, if your new to programming there is this operator called `Modulus`: `%`.

> **Note:** the mathematical order of operations that you might be familiar with known as [PEMDAS](https://www.mathsisfun.com/operation-order-pemdas.html) applies in JavaScript. So you can change the order of operations of this: `2 + 10 * 100`, which returns `1002`, to this `(2 + 10) * 100`, which returns `1200`.

#### Modulus - %

Using the Modulus operator (`%`) we are able to find the remainder of a division problem when we provide the operator with a left and right input such as:

```js
2 % 2
// The above will evaluate to 0
```

We get the remainder of such an operation, which in the above example is 0. This operator is great for figuring out whether a given number is even or odd - if it's odd the result of dividing that number by 2, such as `3 % 2`, will always be 1, and with even numbers dividing by 2 will always return a value of 0.

## Infinity

There exists a special global property in JavaScript called [`Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity). This is often used to designate an Infinite upper limit in a program / algorithm. Conversely you can also use `-Infinity`. It might not yet be clear why this is useful until we start getting into more complex logic - in particular we will soon introduce `Comparison & Logical Operators`.

## Other Shorthand Operators

### Increment & Decrement (10 minutes)

The [increment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment) (`++`) adds one to a number. Note that these can only be used on variables containing a number value. There are two ways to use this: `postfix` & `prefix`.

Postfix will add one to that variable holding a number, but won't return the updated value on the same line.

Prefix will add one to that variable holding that number as well, but will return the updated value on the same line.

```js
// Postfix (most common)
let x = 3;
let y = x++

console.log(`x:${x}, y:${y}`);
// This will output: x:3, y:4;

// Prefix
let a = 3;
let b = ++a;

console.log(`a:${a}, b:${b}`);
// This will output: a:4, b:4
```

If the above is confusing, don't worry, it's mostly unneccessary to understand. In general it's less confusing, and some would argue best practice when using the increment operator on a variable to have that operation happen on it's own line to avoid confusion:

```js
let x = 3;
x++
let y = x;

console.log(`x:${x}, y:${y}`);
// This will output: x:4, y:4
```

The same way there is an increment operator, there is also a decrement operator that behaves the same way except subtracts one from a number.

```js
let x = 3;
x--
let y = x;

console.log(`x:${x}, y:${y}`);
// This will output: x:2, y:2
```

### Compound Assignment Operators (5 minutes)

There are a multitude of [shorthand assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) in JavaScript. The ones we'll mention here are commonly used and start with an arithmetic operator and are called `Compound Assignment Operators`. They should be pretty self-explanatory through example (remember, the assignment operator, denoted by an equals (`=`) sign, `assigns` a value to a variable, and can also `re-assign` the value of a variable that has been declared with the `let` or `var` keyword).

```js
let x = 3;
x += 3

console.log(x);
// This will output: 6

let y = 4;
y *= 4;

console.log(y);
// This will output: 16

let z = 16;
z /= 2;

console.log(z);
// This will output: 8

let a = 10;
a -= 5;

console.log(a);
// This will output: 5

let b = 10;
b %= 2;

console.log(b);
// This will output: 0
```

### Time To Practice! (10 min)
Using Chrome's console, lets practice writing out math with JavaScript syntax:

- Add together two numbers.
- Subtract two numbers.
- Multiply two numbers.
- Divide two numbers.
- Find the reminder of dividing 223 by 3.
- Store the value in a variable produced by dividing 300 by 100. Declare that value with the `let` keyword.
- Increment that variable by 1 using the increment operator.
- console.log that variable, or type it directly in the console to view it's value.
- Use a multiply assignment operator to change the value of the variable to the product of multiplying it by 5.
- console.log that variable, or type it directly in the console to view it's value.

## The Math Object & Math Methods (10 minutes)

Remember that `methods` are packaged code written to perform certain actions. There are [default `objects`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) and `methods` built into JavaScript, some of which are meant to work with specific `datatypes` only. Again, we aren't going too deep here just yet in regards to what a `method` or an `object` is (we'll go over this later), but know that when there is code stored in an `object` as a `function`, we call that a `method`. Thus, within the `Math` object in JavaScript, there are seperate chunks of code stored in `functions` meant to act upon `Number` data. Ok, so long story short, we are about to go over methods that allow us to perform operations on numbers, such as finding the product of a number raised to certain power.

- Finding the product of a number raised to certain power using `Math.pow()`.

```js
  Math.pow(4, 4);
  // Outputs: 256

// - Finding the square root of a number using `Math.sqrt()`.

  Math.sqrt(16);
  // Outputs: 4

// - Finding a random number using `Math.random()`.

  Math.random();
  // Outputs: some random number between 0 and 1 - ie: 0.061586464969113575

  /* In order to use this a bit more effectively you can do something like the following */
  Math.random()*100;
  // Outputs: some random number between 0 and 100

// - Finding a random number using `Math.random()`.

  Math.random();
  // Outputs: some random number between 0 and 1 - ie: 0.061586464969113575

  /* In order to use this a bit more effectively you can do something like the following */
  Math.random()*100;
  // Outputs: some random number between 0 and 100

// - Remove the decimal from a number using `Math.floor()`.

  Math.floor(10.93492);
  // Outputs: 10

// Math.sqrt() - allows you to find the square root of your number.


let myNum = 25;
let squareRootOf25 = Math.sqrt(25);
console.log(squareRootOf25, "<--- line 58");

// Math.pow() - The Math.pow() function returns the base to the exponent power.


let powExample = Math.pow(5, 4);
console.log(powExample, "<--- line 65");

// Math.round() - function returns the value of a number rounded to the nearest integer (a number without decimals).


let roundExample = Math.round(10.5);
console.log(roundExample, "<--- line 72");

// Math.ceil() - function always rounds a number up to the next largest integer (a number without decimals).


let ceilExample = Math.ceil(12.1);
console.log(ceilExample, "<-- line 79");


// Math.floor() - function returns the largest integer less than or equal to a given number


let floorExample = Math.floor(5.95);
console.log(floorExample, "<--- line 86");


// Math.abs() - function returns the absolute value of a number


let absExample = Math.abs(-5);
console.log(absExample, "<--- line 93");

// Math.min() - returns the lowest-valued number passed into it, or NaN if any 
  // parameter isn't a number and can't be converted into one

let minExample = Math.min(4, 3, 8, 10, 21, 2);
console.log(minExample, "<--- line 101");


// Math.max() - The Math.max() function returns the largest of the zero or more numbers given as input 
  // parameters, or NaN if any parameter isn't a number and can't be converted into one.


let maxExample = Math.max(4, 3, 8, 10, 21, 2);
console.log(maxExample, "<--- line 109");


// Math.random() - function returns a floating-point (decimal number), pseudo-random number in the range 0 to less than 1 
    // (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you 
    // can then scale to your desired range. The implementation selects the initial seed to the random 
    // number generation algorithm; it cannot be chosen or reset by the user.

let randomExample = Math.random();
console.log(randomExample, "<--- line 119");

// MORE on Math.random()

let randomExample2 = Math.random()*50;
console.log(randomExample2, "<--- line 124");
console.log(Math.floor(  Math.random()*1000  ), "<--- line 125");
Unfortunately, there are a lot of gotchas when it comes to dealing with `floating point numbers` decminal numbers in JavaScript. Because of how JavaScript stores numbers in memory, the accuracy isn't always the best. For instance, in the console try typing in `0.3 - 0.1`. Do you notice something weird here? We won't go too far in depth about these issues, but to go from a novice JavaScript developer to a more seasoned one, you'll need to come back to this topic. If you run into issues when dealing with very percise numbers in JavaScript throughout this course, I'd suggest maybe you start by watching this 16 minute [video](https://www.youtube.com/watch?v=wETgMr6QMIE&ab_channel=AllThingsJavaScript%2CLLC).

```
#### More Math Methods

Just like with `Strings` there are a good amount of other built-in JavaScript `Math` methods that you should learn about. Again, I recommend using the documentation over at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) and using the left-hand navigation under "Methods" to browse through what's available. Some common ones are: `Math.pow()`, `Math.sqrt()`, `Math.round()`, `Math.ceil()`, `Math.floor()`, `Math.abs()`, `Math.min()`, `Math.max()`, `Math.random()`.

## Time To Practice! (15 minutes)

Using MDN, spend some time researching one of the Math methods that we haven't covered yet, and be prepared to give us a brief presentation on what it's used for with a demonstration on how to use it.