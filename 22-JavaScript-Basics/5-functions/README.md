![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)


## JavaScript Intro - Functions & Scope

### Objectives
* Be able to describe what functions are and why they are created
* Understand the difference between parameters and arguments
* Be able to describe the concept of Scope
* Understand the differences between local (block scope) and global scope
* Have a basic understanding of hoisting

---

## Functions (10 Minutes)

![wood chipper function](./wood-chipper-function.jpg)

"Functions are one of the fundamental building blocks in JavaScript." - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

So what are they? First and foremost, they are reusable chunks of code with labels. They offer a way to structure your code and help us build separation of concern. You can think of each function as it's own mini program that you can compose together with other functions to make a bigger program. Each of these mini programs has their own set of instructions that execute whenever the programmer needs that functionality to run.

>**Note:** You can think of the wood chipper above as a function. You know you can use it whenever you need wood chips. All you have to do is pass in wood, a series of steps act upon the wood, and out come the wood chips. Hopefully this analogy will become more clear soon.

A couple things about functions to keep in mind:
-  After defining `Functions`, they can be executed, which means the code inside them starts running. The word `executing` is synonomous with `running`, `invoking` or `calling`.
- `Functions` can be passed around and stored like any other datatype.
- `Functions` are often defined with input parameters that can be replaced by arguments during invocation (when executed). 
- They tend to produce an output - you can think about this as they evaluate to a piece of data after they've been executed (much like an expression).
- Another way to think of a function is a group of statements that are composed together and labeled, waiting to be run.

## Defining Functions
There are a couple of ways to create a function in JavaScript involving slightly different syntax. There are technically more types of functions, but they are essentially made up of these two foundational ones...

### A Function Declaration
A `function declaration`, also known as a `function definition` or a `function statement`, uses the `function` keyword.

```js
function greeting(){
    console.log("Hello World!");
}
```
Lets break this down:
- `function` is the keyword that tells JavaScript that you're about to define a function.
- `greeting` is the label of this particular function - yes, this is a variable and can be treated as such.
- `()` this is where you have the options of create parameters for your function and is just generally part of the syntax.
- `{}` this is where your `scope` is created (more on that in a minute) - where the code your function is holding onto lives.

### A Function Expression
A `function expression` is a little bit different. One of the key differences we'll discuss in a bit has to do with `hoisting`, which is what happens with `function declarations` and not `function expressions`.

```js
const greeting = function(){
    console.log("Hello World!");
}
```

Here we are storing a `function definition` into a variable. Syntactically this is an expression versus a `function declaration` which is a statement. If this is confusing I wouldn't fixiate too much on this right now. 

A couple of things to note:
- The way the `function` keyword is directly followed by the parentheses `()` is syntactically known as an **`anonymous function`**. This means it doesn't have a label.
- ES6 best norms/practice suggest using `const` in order to define function expressions.
- There is a newer (ES6 JavaScript) more concise way of writing `function expressions` that we'll go over in a bit.

### Parameters, Arguments, The Return Keyword & Invoking A Function (15 minutes)

As mentioned earlier, you can think of functions as their own mini programs. When you think of a computer program, there are a couple of fundamentals concepts that should come to mind. In particular, this concept of a program having an `input` & `output` where the `input` helps to determine the `output`. Think of how we are using the computer right now. The operating system (macOS or Windows) is a computer program that can register physical inputs from us in the form of moving the mouse or typing on the keyboard. The `output` of such `inputs` is then said to be the cursor moving or letters showing up on the screen. Or better yet, our wood chipper. The `input` is a log of wood, the `output` are the wood chips.

A `parameter` is a placeholder for an input (data) that can be passed into a `function` during an `invocation`. Remember, you first have to define a `function` before you can `invoke` it. This includes determining things like:

- How many inputs is the function going to have?
- What data type should the input be?
- What is the output going to be - what data type?

```js
function greetName(name){
    console.log(`Greetings ${name}! How are you?`);
}
```

Here we've added a `parameter` called `name`. Now we can pass in an `argument` that will replace the `name` parameter throughout our function when it's `invoked`.

```js
greetName("John Doe");
// Logs: "Greetings John Doe! How are you?
greetName("Robinson Rangles");
// Logs: "Greetings Robinson Rangles! How are you?
greetName("Billy Jelloton");
// Logs: "Greetings Billy Jelloton! How are you?
```

The first thing here to note is that we are now **`invoking`** our function! Any function can be `invoked` by using it's label, followed by open and closed parentheses `()`. We are replacing `name` with strings. These strings are our `arguments`. Arguments can be any kind of data - even functions themselves (more on that later)!

The **return** keyword adds an extra dimension to `functions`, providing them the ability to produce an output, which can be captured or used immediately. For example:

```js
function hasLetterZ(text){
    for(let i = 0; i < text.length; i++){
        if(text[i] === 'z' || text[i] === 'Z'){
            return true;
        }
    }
    return false;
}

const applicant = "Zetra Sloan";

if(hasLetterZ(applicant)){
    console.log("Welcome to the Z-club! We are all proud to have that rare letter z in our names!");
} else {
    console.log("Unfortunately you didn't make the cut.")
}
```

In our `hasLetterZ` function definition we've added a parameter. This gives us room to pass in an `argument` and allows the function to be dynamic. The function is returning a boolean value, which means it evaluates to either `true` or `false`, and it also means we can use it reliably within an `if` statement condition. If we wanted to we could also store the evaluation of the function in a variable for later use:

```js
const holdingReturn = hasLetterZ("Zlatan Ibrahimovic");
// holdingReturn has a boolean value of true stored in it
```

A few other things to note:
- A return statement will stop a function in it's tracks, including any loops in process.
- You can add as many parameters to a function as you'd like, however there are best practices and conventions that urge you to not use so many, and arguably the better functions are using only one parameter. Part of the philosophy of writing functions and code in general includes the idea that less is more, and that you really only want a function to do one thing. If it's doing more, [it should be split up.](https://softwareengineering.stackexchange.com/questions/145055/are-there-guidelines-on-how-many-parameters-a-function-should-accept)


### Time To Practice!
- Define a function called `multiplyBy10` that takes in one `number` argument and returns that `number` multiplied by 10. Test the function with some numbers.
- Define a function called `sayGoodbye` that uses a `name` parameter and returns a farewell message incorporating that `name`.
- Define a function called `evenNumbers` that takes in an array as an argument and iterates over that array and returns a new array with all the even numbers from that input array (Hint: you can use the `modulus` operator to check whether a number is even or not).
- Define a function called `reverseWords` that takes in a string and returns a string with the order of words reversed.

### Newer ES6 Syntax - Function Expressions Pt.2 - Arrow Function (5 minutes)
Yay more to remember! The newer ES6 syntax introduces a more concise way of creating a `function expression` and it's called the `Arrow Function`.

```js
const greeting = () => {
    console.log("Hello World!");
}
```

As you can see above we are using what is colloquial called a "the fat arrow" `=>` to indicate a `function definition` as opposed to having to use the `function` keyword.

```js

const greeting = (name) => {
    return `Hello ${name}`;
}

// OR

const greeting2 = name => `Hello ${name}`;

```

`greeting2` is using what's called an `implicit return`, meaning that we can actually omit the return statement if the code in the function body can fit on one line. Notice how we are also omitting the curly braces and parentheses around the parameter. You can do this if there is only one parameter - you also don't need everything to be on one line in order to do this.

### Default Parameters (5 minutes)
You can actually add default parameters to a function that'll provide arguments to a function if no argument is explicitly provided.

```js
const multiplyNumBy = (num1, num2 = 2) => {
    return num1 * num2;
};

multiplyNumBy(5);
// This will return 10 because num2 is a default parameter initialized with a value of 2

multiplyNumBy(5, 3);
// This will return 15 because we are overriding the default parameter of 2 and providing our own value of 3
```

---

## Scope (10 - 15 minutes)

The idea of `scope` is a key concept in programming to learn as soon as possible. Scope defines where variables can be accessed or referenced. Some variables can be accessed from anywhere and some cannot - it all depends on what context they exist in. A common analogy that's made when learning about scope is imagining the night sky filled with stars. Now imagine each of those stars are variables - everyone on the planet can see and have a reference to these stars. Depending on where you are on the planet, you might be able to see a city or a country skyline. Not everyone can see that though. If we continue with this analogy, within your place of dwelling you can see your furniture and household items. Others cannot. You still have that window though, so you can access the scopes that are beyond your immediate surroundings at home.

### Block Scope
A block of code is the code that exists within a set of curly braces `{}`. These curly braces always defines a scope. You can imagine them as walls to a house. The code within those walls can see and reference the code outside of the house because there are windows. However, the code that's outside of the house cannot see what's going on inside.

```js
const neighbor = "Ned Flanders";

if(neighbor === "Ned Flanders"){
    const homer = "Homer Simpson";
    const bart = "Bart Simpson";
    const lisa = "Lisa Simpson";
    const maggie = "Maggie Simpson";
    const marge = "Marge Simpson"

    console.log(`${bart} Says: "Go away ${neighbor}!"`);
}

console.log(bart);

```

In this example we are pretending the `if` statement with it's `{}` curly braces is the Simpsons house and the conditional space `()` is the front door. If Ned Flanders tries to come over `bart` yells "Go away Ned Flanders!". Notice how we are able to use the `neighbor` variable inside of the `if` statement. This is valid code. There are windows on the house and the code inside can see outside. On the other hand, as soon as we get down to the last `console.log(bart)` JavaScript will give us a `ReferenceError` because `bart` is in a more localized scope defined by the curly braces from the `if` statement. In other words, he's inside the house and can't be seen.

In the above example, the variable `neighbor` is said to be in the `global scope` and can be accessed by any other code that's inside of it. Every block of code defined with curly braces will be creating it's own scope, and you can certainly nest them. Just remember that code outside won't have access to what's inside.

>**Reminder:** Functions definitions also create their own scope denoted by their curly braces.

### Scope Pollution (5 minutes)

In general having too many variables in the `global scope` can get messy and unmanagable. As you become a more practiced program you need to think more about scoping your variables as tightly as possible using `block scope` where ever it makes more sense. This will help your code out in a variety of ways:

- It will make your code more legible because you are sectioning off code more related to each other.
- It will make your code easier to maintain because you are making things [`modular`](https://www.geeksforgeeks.org/modularity-and-its-properties/).
- It will save memory because when a block finishes running the data will be removed.

## Hoisting (5 minutes)

`Hoisting` is a default JavaScript behavior where the JavaScript engine puts `declarations` (variable declarations & function declarations) into memory before running code from top to bottom. What this means is that there are references to things before they are evaluated - it would be like before you read a page in a book you already sort of know what's going to be on the page ahead of time.

```js
let myAge = 29;

myAge = addOne(myAge);

console.log(myAge);
// Logs: 30

function addOne(num){
    return num + 1;
}
```

Notice how we have access to the `function` `addOne` even though we defined it below the code that uses it. It's because that function definition was put into memory before our code was executed. Don't expect this to work with anything other than `function declarations`. Anything else, including functions, defined with `let` or `const` won't be hoisted as nicely.


```js
let myAge = 29;

myAge = addOne(myAge);
// ReferenceError occurs here - all the code below won't get executed

console.log(myAge);

const addOne = num => {
    return num + 1;
}
```

This code will give us an error that looks like this: `ReferenceError: Cannot access 'addOne' before initialization`.

Another important thing to note, is that you can reuse variable names in different scopes without worrying about collisions.

```js

const name = "Ronald";

function printRonald(){
    const name = "Ronald Spacely"
    console.log(name);
}

printRonald();
// Logs: "Ronald Spacely"
```

How this works is that when a block scope is being evaluated, it'll first look for the variable within it's own scope before looking at a scope outside.

### Time To Read!

The concept of scope is so important that it's worth emphasizing that you should read more about it as soon as possible. It should go without saying that it's always important to do your own research and read from a variety of sources in order to get a solid understanding of any topic we've covered.

I suggest reading [this blog](https://dmitripavlutin.com/javascript-scope/). You can ignore the ***4. Module scope*** section for now.