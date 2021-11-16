![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)



## JavaScript Intro - Arrays

### Objectives
* Understand array syntax and be able to create one
* Be able to access and modify the elements within an array
* Understand how to research and implement array methods
* Understand multi-dimentional arrays and how to retrieve data from them
---

## Arrays (5 minutes)

If you remember our discussion about `Strings` being a "list of characters" and how we are able to target certain characters using `bracket notation` (`[]`), you're already half-way there in your understanding of `arrays`.

An `array` is a `data structure`, and it's data type is an `Object`. It's actually a special kind of `Object`, and we'll get into what a plain object is comprised of later. Lets focus briefly on this concept of a `data structure`. The term itself comes from the field of computer science and it means simply a storage format - a way of organizing data. `Arrays` are lists of data!

```js
  const top10List = ["Biggie Smalls", "Drake", "Eminem", "Tupac", "Lil Wayne", "Kendrick Lamar", "Lauryn Hill", "Andre 3000", "Jay-Z", "Nas"];

  const highScores = [5, 10, 15, 16, 20, 44, 50, 100];
```
It's typical in programming that `arrays` only hold the same data type, however in JavaScript you can mix them up!

```js
  const mixedArray = [56, "John Doe", { what: "woa an object" }, 229, "Another String", ["help, I'm a string in a nested array!"], null, undefined];
```

Lets take a look at the syntax a bit
  - Each piece of data, known as an array `element`, is sperated by a comma `,`. 
  - An array needs to have one opening, and one closing square bracket `[]`.
  - Typically you want to declare an array with `const`, which you'll see later doesn't mean we can't add or remove things from our array.

### Time to Practice! (5 minutes)

Lets declare an `array` called `favoriteMovies`, and compile a list of our favorite movies! One more thing - lets figure out how to isolate the first `element` from our array and store it in it's own variable.

---

## Accessing and Changing Elements in An Array (10 minutes)

If you figured out how to access elements from an array by following along, hooray! Remember that we can use `bracket notation` in order to access elements (list items) from an array, the same way we can access characters from a string.

```js
  const myArray = [10, 9, "grab this"];

  const holdString = myArray[2];

  console.log(holdString);
  // This will log: "grab this"
```

Using index numbers with `bracket notation` we are able to target `elements` in an `array`. Again, lists are `zero indexed` meaning that the first element is at the zeroth index (starts at 0).

### .length

Also, just like with strings, we can check the length of an array by appending `.length` at the end of it. This will give us the number of elements within.

```js
  const myArray = ["One", "Two", "Three Elements"];

  myArray.length
  // Outputs: 3
```

Remember, this means that the last index is 2, not 3. Knowing how `.length` works and the concept of `indices` (indices is the plural of index), how do you think we can isolate the last element of any `array`?

### Accessing The Last Element of Any Array

This is an important ability to keep in mind because it incorporates a few concepts we've learned recently. We can `dynamically` isolate the last element of any array by using `bracket notation`, `index numbers`, the `.length` propery of an array, and our understanding of `expressions` in JavaScript.

```js
const numbersArray = [5, 20, 23, 254, 39919, 394019];

const lastElement = numbersArray[numbersArray.length - 1];

console.log(lastElement);
// This will log the last number in the above array - 394019
```

We created an `expression` where we are getting the length of our array using `.length` and then offseting that by `-1`. This kind of expression is `dynamic` in nature, meaning it will work with any array.

### Time To Practice! (5 minutes)

```js
  const rugRats = ["Tommy", "Chuckie", "Phil and Lil", "Angelica", "Susie", "Kimi", "Dil", "Spike"];
```

`console.log()` the last element.
`console.log()` the 4th element.
`console.log()` the 1st element.
`console.log()` `"Kimi"`.

### Changing Elements (5 minutes)

Unlike strings, arrays are not `primitive values` and are in fact `mutable`. This means we can mutate the information inside without having to create a whole new array. We can use `bracket notation` to not only gain access to elements within an array, but also to put a new element in place of the current one using our `assignment operator`.

```js
  const top5pokemon = ["Mewtwo", "Mew", "Scizor", "Tyranitar", "Zapados"];

  top5pokemon[3] = "Gengar";
  top5pokemon[top5pokemon.length - 1] = "Moltres";

  console.log(top5Pokemon);
  // Returns: ["Mewtwo", "Mew", "Scizor", "Gengar", "Moltres"]
```

### Time To Practice! (5 minutes)

```js
  const myLuckyNumbers = [5, 3, 2, 11, 29];
```
Using the above array
1. Change the last element to equal the quotient of dividing it by 3.
2. Change the 2nd element to equal the product of multiplying it by 3.
3. log out the new array and check your work.

> ***Hint***: You can use `compound assignment operators` to help with this task.

---

## Array Methods (10 minutes)

### Array.isArray()
You can use this method to check whether an element is an array. It returns true or false. You have to use this method as is, and use the array in question as an argument.

```js
const checkMe = [5, 4, 3, 2, 1];

const checkMe2 = "Hah!";

Array.isArray(checkMe);
// Returns true

Array.isArray(checkMe2);
// Returns false
```

### .indexOf()

This works the same way that the `string` version of this method does. You can pass in a value as an argument to this method, and **it returns the first index it comes accross that matches that value.** If the value doesn't exist, the output of this method will be `-1`.

```js
const checking = ["testing", "this", 5, 23];

checking.indexOf(5);
// Returns 2
```

### .push()

This is one of those methods you'll probably end up using ALL the time. This allows you to **append (add) an element to the end of your array**. You can also add as many elements as you want as long as you seperate each argument with a comma.

```js
const myArray = ["here", "we", "are"];

myArray.push("yes!");

console.log(myArray);
// Outputs: ["here", "we", "are", "yes!"]

myArray.push("ok", "lets", "go");

console.log(myArray);
// Outputs: ["here", "we", "are", "yes!", "ok", "lets", "go"]
```

### .pop()

Another very popular method. You can think of it as the opposite of `.push()`. This method **removes the last element from the target array.** This doesn't accept any `arguments`. 

```js
const animes = ["Naruto", "Ghost in the Shell", "Full Alchemist", "I am Legend"];

animes.pop();

console.log(animes);
// Outputs: ["Naruto", "Ghost in the Shell", "Full Alchemist"];
```

>***Note***: This method returns the element it's removing from the array and can be captured and stored in a variable - `const holdPop = myArray.pop();`

### .shift()

This methods **removes the element** at the front of the target array (as opposed to the back, like `.pop`).

```js
animes.shift();

console.log(animes);
// Outputs: ["Ghost in the Shell", "Full Alchemist"]
```

### .unshift()

This method works similar to `.push()`, except it **adds an element to the front of an array.**

```js
animes.shift("Naruto");

console.log(animes);
// Outputs: ["Naruto", "Ghost in the Shell", "Full Alchemist"];
```

### Research More Array Methods (10 minutes)

Just like with `Math` & `String` methods, there are a myriad of build-in JavaScript methods that are specific to `Arrays`. You might have noticed that some of the examples with arrays had sequential ordering. There is actually a method that can do this for you (`.sort()`)! Sorting, along with searching and altering arrays are all very common practices with arrays. Be sure to check the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) while working with arrays, there might be a built-in method that already does exactly what you are thinking of.

Some other very frequently used methods:
  - `.splice()`
  - `.split()` -> this one converts a string to an array!
  - `.join()`-> and this one converts an array to a string!
  - `.concat()`


---

## Multi-Dimentional Arrays (5 minutes)

A Multi-Dimentional array is an array with an array nested inside of it. As mentioned earlier, arrays can hold any kind of JavaScript data, arrays included.

```js
const multiArray = [[1,2,3], [4,5,6], ["7","8","9"]];
```

The question here is:
1. How would you isolate an element inside a nested array?
2. How many elements are in our outer array?

### Isolating An Element In A Nested Array

We can do this by using an extra pair of brackets after isolating the element in question (which would be an array).

```js
multiArray[1][1];
// This gives us the value 5 from our second nested array
```

The logic is that once you have an array isolated using `bracket notation`, you can treat it like any other array - therefore you can just use `bracket notation` on the spot. The same goes for any element within an array. Once you've isolated that element, you're dealing with that element on the spot. So If I wanted to use a `string` from my `multiArray` variable, I could do something like this:

```js
console.log(`I have a niece who is ${multiArray[multiArray.length-1][0]} years old.`);
```

Take a minute to look at what was done here. The code within the `${}` evaluates to "7", which I am using from the nested array at the end.

***COMPLETE ARRAYS PRACTICE***