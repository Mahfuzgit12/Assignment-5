                                    GitHub Issues Tracker – README

1. Difference between var, let, and const

In JavaScript,  var, let, and const are used to declare variables, but they behave differently.

a.var is the old way of declaring variables. It has function scope and can be redeclared and updated.
b.let is block-scoped, meaning it only works inside the block where it is declared (like inside { } ). It can be updated but cannot be redeclared in the same scope.
c.const is also block-scoped, but its value cannot be reassigned after it is declared. It is usually used for values that should not change.

Example:

javascript
var a = 10
let b = 20
const c = 30



2. What is the spread operator (...)?

The spread operator (...) is used to expand elements of an array or properties of an object. It helps combine or copy data easily.

Example:

javascript
const arr1 = [1,2,3]
const arr2 = [...arr1,4,5]


Here the elements of arr1 are spread into arr2.


3. Difference between map(), filter(), and forEach()

These are array methods used to work with array elements.

a.map() creates a new array by applying a function to every element.
b.filter()creates a new array with elements that match a condition.
c.forEach() runs a function for each element but does not return a new array.

Example:

javascript
const numbers = [1,2,3,4]

numbers.map(n => n * 2)

numbers.filter(n => n > 2)

numbers.forEach(n => console.log(n))



4. What is an arrow function?

An arrow function is a shorter way to write a function in JavaScript using =>.

Example:

javascript
const add = (a,b) => {
  return a + b
}

It makes the code cleaner and is commonly used in modern JavaScript.


5. What are template literals?

Template literals allow us to write strings using backticks and include variables directly inside the string using ${}.

Example:

javascript
const name = "Sakib"

console.log(Hello ${name})
