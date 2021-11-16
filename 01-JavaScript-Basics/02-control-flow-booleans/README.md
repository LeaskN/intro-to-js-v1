![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)



## JavaScript Intro - Control Flow

### Objectives
* Understand how boolean values are used with conditional statements
* Understand what an expression is
* Understand that an expression has a boolean form - truthy vs falsy
* Use conditional logic to create a control flow
* Use Comparison & Logical operators

---

## Boolean Values and Control Flow (10 minutes)

A primitive [`boolean`](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) value can only be one of two things and these are represented by the keywords `true` and `false`. 

> **Note:** These are not to be confused with a `Boolean object`, which we won't really get into because they aren't used all too often - but you can definitely read more about the differences between the object and the primitive [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean).

`Booleans` are often used to determine the flow of logic [(`Control flow`)](https://en.wikipedia.org/wiki/Control_flow) running through a program, telling the computer whether or not to go down one path of executions versus another. It's kind of like what happens when you wake up and check the weather - if it's `true` that the weather condition includes rain, you put on rain gear, if that's `false`, you dress like you normally would. It's a fundamental piece of data that we can create explicitly with keywords or in other ways which we'll discuss.

![The Matrix - Red or Blue Pill](https://media.giphy.com/media/JFCTv9AvwFBJK/giphy.gif)


---

## Expressions in JavaScript and Comparison Operators (10 minutes)

Any value written out literally, such as the number `50` or the string `"Hello, Dan."` is considered an `expression`. However, an expression can also be a line(s) of code that produces a single value. When interpreting the value of a given `expression`, we say that the expression `evaluates` to said value. What might an expression look like and why is it important to understand in the context of `boolean` values? These are the building blocks for building a `control flow` in your programs.

```js
5 > 2
// This is an expression which evaluates to the value true

6 === "6"
// This is an expression which evaluates to the value false

const storedEvaluation = 10 < 5;
// Here I am storing the evaluation of an expression. What value is stored in the above variable? 
```

The above example has a few things going on. Namely, we are creating JavaScript `expressions` that each evaluate to a `boolean` value, by using `comparison operators`.
> **Knowledge Check:** What code could you use to check the data type of the value contained in the above variable `storedEvaluation`?

So we know that `expressions` can evaluate into `boolean` values, but we need to cover our bases here and briefly talk about the mechanism that is allowing for this kind of evaluation: `comparison operators`.

### Comparison Operators (5 minutes)

You can create `boolean` values using `Comparison Operators`: `>`, `<`, `>=`, `<=`. The syntax requires you to have two diffrent expressions on either side of an operator in order to make an `evaluation`. You can make `evaluations` with these operators using both `strings` and `numbers`. This is because, as mentioned earlier, JavaScript will make `type coercions` between `strings` and `numbers` under certain circumstances - this being one of them.

```js
"3" > "2"
// Evaluates to the boolean true

5 > "10"
// Evaluates to the boolean false

20 >= 20
// Evaluates to the boolean true - because 20 is greater than or equal to 20

```

This also works - letters of the alphabet will be greater than those behind them in sequence.

```js
"a" < "b"
// Evalutes to true

"e" > "d"
// Evalutes to true

"a" > "z"
// Evalutes to false
```

***COMPLETE COMPARISON OPERATORS PRACTICE***

### Equality Operators (`==`, `===`, `!=`, `!==`) (5 minutes)

There are a few ways to check whether one (value) piece of data is equivalent to another. One way is by using the `Equality` operator (`==`), which checks whether the value on either side of it (operands) are equal. This returns a `boolean` value - `true` or `false`. This is another instance where JavaScript will try to coerce data types to match each other. So something like `1 == '1'` will result in true, even though on the left of the operator is a `number` and on the right a `string`. Use the `Strict Equality` operator to always consider data type in your `evaluation`. **It's best practice to do this.**

The **bang operator** (`!`) reverses a `boolean` value (`!true` becomes `false`), and when used with `equality` checks (`!==`) it's like asking "is what's on the left of this operator NOT equal to what's on the right?"

```js
  "5" !== 5
  // Evaluates to true

  "5" != 5
  // Evaluates to false, because we are using a loose equality check

  5 === 5
  // Evaluates to true

  5 === "5"
  // Evaluates to false, because we are using a strict equality check

```

### Time to practice! (5 minutes)
  - Guess what `boolean` value the following expressions evaluate to

  ```js
  null === undefined

  5 == "5"

  10 !== "10"

  20 === "20"

  20 >= "20"

  30 < 35

  ```

***COMPLETE EQUALITY OPERATORS PRACTICE***

---

## Conditional Statements & Conditional Execution (20 minutes)

In programming, an `expression` is a bit of code that produces a value and a `statement` makes something happen in your program. They represent an action or command. A `conditional statement` is a set of rules that determine what happens in your program based on conditions defined by the programmer. Introducing the `if` statement! The syntax looks like this:

```js
  if(/*condition - expression*/){

    // perform actions if condition above evaluates to true

  }
```

Within the parenthesis `()` is where you place your condition (expression). If that condition evaluates to true (an expression that evaluates to true), you run what ever code is within the curly braces `{}`. This series of events is known as **Conditional Execution** (the same term applies to our rainy day example - we follow a different series of steps based on the `condition` of rain).

> **Reminder:** Take note of the formatting of this syntax. When writing code it's important to keep in mind that there are formatting conventions that exist in order to promote code clean, bug free, and readable by others.

> **Reminder:** `if` is a keyword - which means it's a reserved word in JavaScript with special properties. You can't expect to make a variable called `if` without getting an error. This goes for [all other reserved keywords in JavaScript](https://www.w3schools.com/js/js_reserved.asp).

```js
  let agent = "James Bond";
  
  if(agent === "James Bond"){
    console.log("Welcome, Bond. Lets go over your mission debrief.");
  }

  if(5 > 2){
    console.log("Of course 5 is greater than 2!");
  }
```

`if...else` statements allow code to run if the condition within the parenthesis `()` of the `if` statement evaluates to false.

```js
  let agent = "Johnny Bravo";

  if(agent === "James Bond"){
    console.log("Welcome, Bond. Lets go over your mission debrief.");
  } else {
    console.log("Intruder Alert! You have 5 seconds to leave the premises or be dealt with!");
  }
```

An `else` statement must always be paired with an `if`. It doesn't work on it's own. What's useful about having an `else` statement paired with an `if`, is that the code in that `else block` (`{}`) won't run if the condition within the `if statement` evaluates to `true`. This is different than just having code underneath an `if statement` that will run regardless.


`if...else if` statements gives you room for adding more conditions if a previous condition is `false`, giving you more control over what code gets executed and under what conditions.

```js
  let agent = "Johnny Bravo";

  if(agent === "James Bond"){
    console.log("Welcome, Bond. Lets go over your mission debrief.");
  } else if(agent === "Johnny Bravo"){
    console.log("You again?! Get out of here Johnny, before I ring the alarm.");
  } else {
    console.log("Intruder Alert! You have 5 seconds to leave the premises or be dealt with!");
  }
```

> **Note:** Don't assign or re-assign variables in the condition space - the parentheses `()` of an `if` / `if...else if` statement.

## Truthy And Falsy Values (10 minutes)

JavaScript uses type coercion within a Boolean context. What do you think this means? Where is that context? In this case, the `boolean` context is within the `()` of the `if` & `if...else` statements. Any value (expression) that is within these parentheses will be evaluated and converted into a `boolean` value - `true` or `false`. This means that every value of any data type actually has a `boolean` form. So we say that a given value is either `truthy` or `falsy` because their inherit `boolean` form becomes `true` or `false`. In order to better understand this, it's best to discuss what values are considered `falsy`.

Falsy values include:
- `false`
- `0`
- `-0`
- `0n`
- `''`, `""` -> any empty string (remember a space is a character, which means if there is a space in the string it isn't empty)
- `null`
- `undefined`
- `NaN`

Some examples:

```js
  if("this string has a truthy value"){
    console.log("If you see this message, the condition was truthy");
  }

  if(0){
    console.log("You'll never see this message with a zero as a condition. The number 0 is a falsy value.");
  }

  if(null){
    console.log("This won't work either");
  }

  if(1){
    console.log("You'll see this though!");
  }

```

## Truthy & Falsy Values With Boolean() (5 minutes)

If you want to check and see if an expression is `truthy` or `falsy` you can use the global `Boolean()` constructor function (don't worry too much about this jargon yet). 

This is how you use this function.

```js

Boolean(5 > 2);
// Will output true

Boolean(5 < 2);
// Will output false

Boolean(0);
// Will output false

```

## Time to practice!

Create a Horse Racing program that when executed, stores a random number in a variable called `position` between 1 and 5. The program should then check to see what number is stored in the variable and output the messages indicated in the comments below.

```js
let horseName;

let position;

// If position is 1, log to the console: "(Insert horseName) finished in first place!"
// If position is 2, log to the console: "(Insert horseName) finished in second place!"
// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."

```

---

## Logical Operators (15 minutes)

`Logical operators` are used to build up more complex logical expressions. You use them inbetween variables or values in order to evaluate whether or not an expression is `true` or `false`.


- The `and` operator checks to see if the expression on the left and right of it evaluate to `true`. If one of the values is `false` on either the left or the right, the entire expression will evaluate to `false`. This is what the operator looks like: `&&`

```js
let x = 10;
let y = 25;

if(x < 25 && y > 20){
  /* 
    Code in this block will execute because 
    the expressions on both sides of the && operator 
    evaluate to true
  */
}

if(x < 25 && y > 25){
  /* 
    Code in this block will NOT execute because 
    the expression on the right side of the && operator 
    evaluates to false
  */
}
```

- The `or` operator checks to see if EITHER the expression on the left `or` right of it evaluates to `true`. If one of the values is `true` on either side, then the entire expression will evaluate to `false`. The operator looks like: `||`

```js
let x = 10;
let y = 25;

if(x < 25 || y > 20){
  /* 
    Code in this block will execute because 
    the first expression on the left is true.
    The expression on the right doesn't matter
    and actually doesn't get evaluated because
    the left satisfied the condition.
  */
}

if(y > 25 || x < 25){
  /* 
    Code in this block will execute because 
    the expression on the right side of the && operator 
    evaluates to true
  */
}
```

- The `not` or `bang` operator coerces a boolean to it's opposite value. We went over this earlier. The operator looks like this: `!`

```js
let x = 10;
let y = 25;

if(!(x < 25 && y > 20)){
  /* 
    Code in this block will not execute because 
    the inner expression, within the parenthesis,
    evaluates to false. The bang operator, outside of 
    the parenthesis then coerces that value to true.
  */
}
```

***COMPLETE LOGICAL OPERATORS PRACTICE***

---
### Ternary Operator (5 minutes)
Ternary operator syntax offers a more concise way of writing an `if...else` statement. You can think of reading the statement from left to right like: "Is y greater than x? If it is, return "Hello World!". If it's not, return "y needs to be greater than x". Notice the question mark `?` paired with the placement of the colon `:`.

```js
  let y = 10;
  let x = 25;

  let text = y > x ? "Hello World" : "y needs to be greater than x";

  console.log(text);
  // This will log "y needs to be greater than x"
```

***COMPLETE TERNARY PRACTICE***

## The Switch Statement (5 minutes)
A `switch` statement evaluates an expression, much like an `if` statement. It matches the value produced by the expression to a series of `cases` by checking whether said value is equal to the case provided. When looking at the syntax, notice the `break` keyword. These are placed within the execution area of a confirmed case, and will cancel all other case checks and effectively leave the `switch` statement.

Also, note the `default` keyword at the bottom. This will execute if all the cases fail. `default` along with the `break` keyword are optional

```js
  let food = "Bananas"

  switch(food){
    case "Watermelon":
      console.log("Yes, Watermelon is available for purchase");
      break;
    case "Strawberries":
      console.log("Yes, Strawberries are available for purchase");
      break;
    case "Bananas":
      console.log("Yes, Bananas are available for purchase");
    default:
      console.log(`Sorry, ${food} is not available right now.`);
  }
```

***COMPLETE SWITCH PRACTICE***