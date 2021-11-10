![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)



## JavaScript ***Intro to Strings***

### Objectives
* Understand the string datatype
* Understand the concept of type coercion
* Understand the concept of string concatenation and string manipulation
* Understand indexing and how to use bracket notation with strings
* Understand string immutability
* Be able to implement ES6 Template Strings
* String methods

## String Manipulation
With all data types in JavaScript, you want to be aware that there are certain operations that are specific to that kind of data. `Strings` have their own unique characteristics you'll need to be aware of.

### String Concatenation & Type Coercion
You can actually use the `+` operator with strings. The result of two strings in between a `+`, is actually the meshing of the text together - they are added together one after the other to make one `String`:

```js
  let holdMyString = "Hi, I am a string!";
  let holdMySecondString = "Hello, I am another string!";
  let concatenatedString = holdMyString + holdMySecondString;
  console.log(concatenatedString);
  /* 
    What will be registered in the console is:
    "Hi, I am a string!Hello, I am another string!"

    Notice how there is no space here: "...string!Hello".
    Spaces are characters like any other and need to be accounted for!
  */
```

Moreover, what would you imagine gets logged when you see this in JavaScript:

```js
console.log("3" + "2");
```

If you guessed `5`, you'd be wrong. Yup. You're actually going to get `"32"`. This is because the `+` operator, when used in between two strings, combines them! Like I mentioned above... Again, this is a characteristic of the `String` data type, and this phenomenom is called `concatenation` - which is a fancy way of saying the two strings get combined.

> **Note**: You can use both double quotes `""`, single quotes `''`, or backticks ``` `` ``` for string values. Backticks are also called `Template Literals`.

### Type Coercion

> "Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers)." -[MDN](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)

In JavaScript, when you use the `+` operator between a number and a string the result is another string with the two values `concatenated`.

```js
const holdingFive = 5;
const holdingSix = "6";

console.log(holdingFive + holdingSix);
// The above prints the new string "56"
 ```

What's happening here is the first variable is holding a value of `5` (the datatype is a number), and the second variable is holding a value of `"6"` (the datatype is a string). Again, when you use the `+` operator between the two datatypes there is a process that occurs called `type coercion`, which is when a value has it's datatype changed - the `number` becomes a `string` and so we end up with the meshing of two strings (`concatenation`). This is something to be aware of because it is a common unintended source of bugs for beginners.

### Converting a Number to a String and a String to a Number

We'll get into methods very soon, but there is actually a `String` method you can use explicitly for this kind of `type coercion`:

```js
(5).toString(); // returns: '5'
// Using .toString() on a number will turn that number into a string!
```

You can also turn a `String` into a `Number` a couple of ways

- 1. Use the function (method) `parseInt()`

```js
parseInt('5'); // returns: 5
// Using paseInt() on a string will turn that string into a number (if possible)!
```

- 2. Use the ***`Unary Plus`*** operator (`+`)

```js
  const holdString = "105";
  
  const toNumber = +holdString;

  typeof(toNumber);
  // This will also return "number"
```

> ***Note:*** you don't have to follow the format of these examples exactly. Once you begin to see the smaller pieces to what's happening above, you'll be able to write JavaScript however you want, as long as you are following the syntax rules in JavaScript. ***You need to experiment!!!!***

---
### Template Literals

Template literals is a JavaScript syntax that allows for embedded expressions during the creation of a string. 

```js
let name = "Jack Sparrow";
let myAge = 30;
let height = "5'10";
let food = "Caribbean cuisine";

const savedTemplateLiteral = `Hello everyone. My name is ${name}. I am approximately ${height}, and ${myAge} years of age. My favorite thing to eat is ${food}`;

console.log(savedTemplateLiteral);
// What do you think the above console.log going to produce?
 ```
  
***Practice: Lets take a moment to write this into our own notes and test it. Change the values within the variables and see what the output is.***

In this example, the syntax `${}` within a pair of back ticks `` ` ` `` can hold embedded JavaScript expression, or any other piece of code that produces a value - like a variable. In programming, [an expression is a fragment of code that produces a value](https://masteringjs.io/tutorials/fundamentals/expressions) (we'll get into more elaborate expressions later).

### Time To Practice!

```js
/* 
Copy the following text to your notes, then create variables and assign them strings that will help the bottom console.log run properly:

Write your code below the comment and above the console log 
*/


console.log(`I am currently learning the programming language called ${language}. I ${adjective1} this program already. I read recently that declaring variables with the ${keyword1} keyword has gone out of style ever since ECMAScript ${year}. Oh, also, my instructor ${instructor} is awesome!`);
```

## String Manipulation (Continued. Pt 2)

### Escaping special characters

There are certain characters within JavaScript that need "escaping" in order to properly display them. This depends on a couple of factors, one being whether you are declaring your strings with single quotes (`''`), double quotes (`""`), or backticks (``` `` ```):


```js
/* 
  Trying to console.log the below string will produce an error - this is because we are using single quotes to hold our string, and "Aren't" has a single quote.
  JavaScript thinks we are ending our string earlier than intended.
*/
console.log('Aren't we suppose to wait 30 minutes after eating before we jump into the pool?');
```
```js
// We can fix this by using double quotes or backticks instead, or by using an "escape" character, which in JavaScript is a backslash "\"
console.log('Aren\'t we suppose to wait 30 minutes after eating before we jump into the pool?');
// Or we can utilize a differnt type of quotes to avoid conflict
// Double Quotes
console.log("Aren't we suppose to wait 30 minutes after eating before we jump into the pool?");
// Backticks
console.log(`Aren't we suppose to wait 30 minutes after eating before we jump into the pool?`);
```

### Zero Indexing, Strings & Bracket Notation

You can think of `Strings` as being a list of `characters`. In programming lists are `zero indexed`. Each character in a string has a numerical index associated with it's order in that string, except instead of the first character being listed as 1 we begin at 0.

```js
const myName = "Pegasus Walters";

console.log(myName[0]);
// This will display the letter "P" because it's the first character in our list of characters.

console.log(myName[1]);
// This will display the letter "e".

console.log(myName[2]);
// This will display the letter "g"... and so on.
```

Here we are using what's called `bracket notation` in order to access the value at different indices of the string within the `myName` variable.

A common request is to get the last item in a string. Therefore we have a recurring line of code which is similar to this: 
``` javascript
let city = 'New York';
let lastChar = city[city.length-1];
```
This can also be written:
``` javascript
let city = 'New York';
let lastIndex = city.length-1
let lastChar = city[lastIndex];
```
### Time To Practice! 

```js
// Using only the alphabet variable below, bracket notation & concatenation, console.log out your first name
const alph = "abcdefghijklmnopqrstuvwxyz";

console.log(/* Your Code */);
```

## String Immutability

A `String` value in JavaScript cannot be altered (mutated), only created or deleted. Thus, strings are `immutable`.

```js
let myName = "Bob";
myName[0] = "R";

console.log(myName);
// This will display "Bob". We are unable to modify myName. We can, however, still re-assign the variable.

myName = "Rob";
```
[More on `String` Immutability](https://www.youtube.com/watch?v=d1UcatFGn00&ab_channel=WeWillCode).

## String Methods

Although a `String` is a primitive value, there actually exists a `String` object in JavaScript that is used to represent and manipulate primitive `Strings`. If that wasn't confusing enough, JavaScript will automatically turn a `String` primitive into a `String` object in order to use methods. We'll get more into methods and objects later, but for now you can think of a `String` method as code that can only be used with a `String` datatype.

### indexOf()
```js
let myName = "David";

console.log(myName.indexOf("D"));
// Here we are using the indexOf() String method. This will return 0, because the index of the character "D" in the String "David" is 0.
```

There are a few things to notice about the above example. We are using dot notation, which is the period `.` after the data (`myName`), to access the method name `indexOf`. In order to run (execute or invoke) this method we have to use open and closed parentheses `()` immediately after the name. The `String` value we are passing into that method, `"D"`, is called an `argument`. We'll get more into how methods and functions work (they are pretty much the same thing), but know that this particular method accepts a `String` value as an argument, and what it does under the hood is (iterate over the string) check to see if there is a match between the argument and the `String` that we are running the method on (which in this case is "David"). If it finds a match, it `returns` the index of the match within that `String`. 

### slice()
```js
let wildThings = "Where The Wild Things Go";

console.log(wildThings.slice(10, 14));
// Here we are using the slice() String method. This will return the string (substring) "Wild".
```

This method will return a substring (a part of another string) of the `String` it's being called on. This method can actually use two `arguments`. Notice how the arguments are separated by a comma. Both numbers correspond to an index within the `String`; the first one indicates where to begin the extraction and the second one where to end it. Again, because `Strings` are `immutable` the original string isn't modified. 

### toUpperCase() & toLowerCase()
```js
let help = "Help me!";

console.log(help.toUpperCase());
// Expected output: "HELP ME!"

let fullName = "Eric Anderson";

console.log(fullName.toLowerCase());
// Expected output: "eric anderson"
```

Both `toUpperCase()` and `toLowerCase()` should be pretty self explanatory. They return a new `String` based on the `String` that the method was called in, except with each character converted to upper or lower case. Notice that these two methods don't take any `arguments`. You still need the parentheses `()` in order to run the method.

### string.length

You can find the length of a string by accessing it's [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) property.

```js
let holdString = "Holding this string";
console.log(holdString.length)
// Expected output: 19

console.log("find length".length);
// Expected output: 11
// Note: the above example is just a reminder that you don't need to store a value in a variable in order to act on that value.
```

### .concat()

.concat joins two or more strings together.
``` javascript
let food = 'pizza'
let toppings = 'pineapple'
let drink = 'Coke'

console.log('I am hungry and could go for '.concat(food, ' with ', toppings, ' on top and ', drink)) 

//'I am hungry and could go for pizza with pineapple on top and Coke'

```

### .split()
``` javascript
let splitString = "Where is my ice cream?";
let splitStringToArr = splitString.split(' ');
// ["Where", "is", "my", "ice", "cream?"]
```
### More String Methods

There are a good amount of other built-in JavaScript `String` methods that you should learn about. I recommend using the documentation over at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and using the left-hand navigation under "Methods" to browse through what's available. Some common ones are: `indexOf()`, `slice()`, `toUpperCase()`, `split()`, `concat()`, `substr()`.

***Complete String Practice***