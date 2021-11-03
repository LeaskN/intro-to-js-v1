![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)


## Variables
A variable is a way to store a value with an associated data type into computer memory under a label you create. You can think of it like what you do when you are moving - you have boxes that you put some thing(s) into and you give it a label - i.e. "shoes". Because of that label, you now know what's in that box when you need to find your shoes later. That box is like the cell(s) in computer memory that holds your data, the variable name is the label on that box or cell.

![variables are like boxes](https://miro.medium.com/max/1580/0*9fmPGmQurHOwyA2t.png)

> How do variables work? A Computer vs Cooking

    The processor = The Chef
    The RAM (random access memory) = your counter space
    The hard drive = your cabinets where you store things
    
    If the chef is slow, doesn't matter how much space and storage, it's going to go slow. 
    If the chef is fast, but he doesn't have the space to work (RAM) it will slow him down.  
    If he is fast and has ample counter space, but his cabinets are either lacking or cluttered, it will again slow him down.  
    
    Perfect harmony is a quick chef, with a large counter, and large cabinets correctly organized.  That is a perfect computer.

    This example is great because RAM is very comprable to a counter top. If an item isn't available on the counter top or RAM we need to spend time finding it from our storage. If it is on the counter top or in RAM our access is almost immediate.

### ***What is a primitive data type?***
All primitive values are immutable - they cannot be altered. This should not be confused with variables, that can be mutated (unless it's been declared with `const`). What this means is that when you are mutating a `string` for instance, you are actually creating a brand new `string`, not mutating the existing one. Be sure to think about this and come back to it as you improve your JavaScript skills.
  - This resource can help with this concept: [JavaScript Primitive vs. References Values](https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/)

### ***Declaring Variables***
Using variables in JavaScript begins with creating them. In order to create a variable you need to tell the computer, explicitly, directly, that you are about to do so. This is where the term **variable declaration** comes into play. It's how you tell the computer "I want to use some memory for a variable", and to do we can use one of two different keywords: `let` or `const`. There is a third keyword JavaScript for declaring variables, the last is `var` which isn't used anymore. We will teach this keyword because it exists in legacy code & will come up in interviews.  

Examples:
> Declaring the variable `myFavoriteShoes` and storing a `String`:

```js
let myFavoriteShoes = "adidas Sambas";
```

> Declaring the variable birthYear and storing a `Number`:

```js
const birthYear = 1900;
```
### ***`var`***
In short, `var` was replaced by `let`. Both can declare variables that, later, can be re-assigned values. Declaring a variable with the keyword `var` in JavaScript isn't done anymore. When you see this you should expect that this code was written before the second major revision of JavaScript, known as [JavaScript ES6](https://www.w3schools.com/js/js_es6.asp) (ECMAScript 2015). [`var` is seen as something to avoid using because of it's loose scoping - global or function scoped, but not block scoped](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70). var is also an example of 'legacy code' something that shouldn't be written anymore but it still exists in live applications. We address scope later on & will return to `var` then. 

### ***`let`***
Declaring a variable with the keyword `let` allows you to change the value stored within it later on. Relecting on the prior box example: a `let` variable means you can take open the box up again, take things out of the box, and put something different inside of it.

So code like this will run without errors:

```js
let myFavoriteShoes = "adidas Sambas";

myFavoriteShoes = "Nike Tiempo";
```

### ***`const`***
Declaring a variable with the keyword `const` means that you cannot change the value. So something like this will cause and error and your program will crash:

```js
const birthYear = 1900;
birthYear = 1901;
```

You want to choose the proper keyword for declaring your variable depending on whether or not your variable will change within your application. The idea is that you generally want to use `const` whenever you can in order to maintain predictability.

You can name a variable whatever you want to. It's best to use a name that indicates what's stored inside of it. There are also a couple things to note here in regards to the syntax: we are using what's called Camel Case to name our variables. Our variable names that include more than one word begin with the first starting with a lowercase letter. Each successive word begins with a capital letter. This is by convention. In programming we generally like to follow convention.

An important thing to remember is that JavaScript is **CASE-SENSITIVE**, which means a variable named `myShoes` is different than `myShoess`, and both are different than `myshoes`.

Another thing to note: in these examples I've used semicolons at the end of each piece of code - this is not required in JavaScript. Read more about it [here](https://www.freecodecamp.org/news/lets-talk-about-semicolons-in-javascript-f1fe08ab4e53/#:~:text=The%20JavaScript%20parser%20will%20automatically,a%20%7D%20%2C%20closing%20the%20current%20block). We do generally use semicolons to [ensure JavaScript compiles properly](https://betterprogramming.pub/the-use-of-the-javascript-semicolon-843fd5e94d0e?gi=1e9ad625a395#:~:text=Semicolons%20are%20an%20essential%20part,other%20parts%20of%20the%20code.). The semicolons are read and used by the compiler (a [compiler](https://www.educba.com/javascript-compilers/) is a software that converts a high-level code scripted by developers to a low-level binary code in machine language which can be easily understood and executed by the processor and this process is called compilation or code compilation) to distinguish between separate statements so that statements do not leak into other parts of the code. 

### ***Reassigning Variables And Synchronous Execution***
JavaScript runs from the top-down, AKA synchronously (like how you read, from left to right top to bottom), so further down in your program, after you've declared a variable, you can **reassign** them. It's actually not as straightforward as this ([hoisting in JavaScript](https://www.w3schools.com/js/js_hoisting.asp)), but generally speaking this holds true. ***This is a common interview topic***

### ***Assignment Operator (`=`) & Reassigning Variables***

```js
  // The assignment operator (the equals sign) allows you to store a value in a variable
  let myNum = 23;

  // With the assignment operator we are able to re-assign a variable declared with let (const variables throw errors)
  myNum = 35;

  console.log(myNum); // This will display 35
```

## Scope

Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. [Read more here](https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript#:~:text=Scope%20in%20JavaScript%20refers%20to,declared%20inside%20of%20a%20block). In short, scope is what we have access to at any specific point in the code. Both `let` and `const` have the same scope - block scope. `var` has functional scope, which often leads to confusion and is why `var` is being phased out. ***This is a common interview topic*** 

For example:

``` javascript
let color1 = 'red'
{
  console.log(color1) // red
}

{
  let color2 = 'yellow'
}
console.log(color2) // not defined

// now using var
var color3 = 'blue'
{
  console.log(color3) // red
}

{
  var color4 = 'purple'
}
console.log(color4) // purple
```

What this shows us is that var pollutes the higher scope. AKA it adds extra data to where it shouldn't be. The way that JavaScript is written initially makes developers think that a variable's access is limited to a curly bracket. With `var` it wasn't, and therefore has been phased out and was replaced by `let` & `const`. We'll experience this more later on and will re-visit scope. ***This is a common interview topic***

---

## Some Asides - Conventions, Reserved Keywords & MISC.

There are many conventions that you'll want to pick up throughout your programming career. Below I've listed just a few.

### ***Formatting***
Take note of the formatting of syntax. When writing code it's important to keep in mind that there are many conventions, including some for formatting that exist in order to promote clean, bug free, code that can be read by others.

### ***camelCase***
You'll notice that a lot of variables are created with weird casing. In particular, if a variable includes two words, the first one will begin with a lowercase character and the following words will begin with uppercase characters. This is known as `camel case`. You generally want to stick to this [naming convention](https://en.wikipedia.org/wiki/Naming_convention_(programming)) when defining variables. When we get into writting `classes` we'll be using `Pascal case`, where the inital letter of a variable / classname begins with an uppercase.

### ***Reserved Keywords***
Throughout the course you'll notice that there are [certain reserved keywords in JavaScript](https://www.w3schools.com/js/js_reserved.asp). You can't expect to make a variable with these keywords without getting an error.

### ***Comments***
Comment your code! Especially when you are beginning it'll be great practice to write into plain English what pieces of code are doing. Comments will be ignored when your program runs. You can comment single lines by using two forward slashes `//` before the line of code you want commented. You can also create multi-line comments using `/* */`.

### ***Thread of Execution***
JavaScript's is known as a single-threaded programming language, and it's [`thread of execution`](https://alligator.io/js/thread-of-execution/) **executes code from top to bottom.** This is something to keep in mind when writing and reading JavaScript. 

**However**, it's not always that simple. We'll get to that later - in particular when we talk about [`hoisting`](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) in JavaScript.

---
