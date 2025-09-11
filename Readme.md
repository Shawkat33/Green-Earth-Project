What is the difference between var, let, and const?

var is function scoped, ignores if-for blocks, redeclarable; not good for looping, conditionals etc.

let is block scoped, value reassignable, non-redeclarable in the same scope; good for looping, conditionals etc.

const is also block scoped, non-reassignable(for primitive data types ig), non-redeclarable within same scope.

---

What is the difference between map(), forEach(), and filter()?

map() is used primarily to convert each item of an array according to logic provided; return a new different Array

forEach() is used primarily to run function/functions/logical operations for each item of an array; returns undefined by default if not specified

filter() is primarily used to reduce array items according to conditions provided; returns a new smaller array

---

What are arrow functions in ES6?

Arrow functions are an easier way of writing functions used array methods, api calls, event listener functions, doesn't have the arguments object that a regular function has to check for the arguments passed in the parameter.

---

How does destructuring assignment work in ES6?

Destructuring is a type of assignment that is primarily used for array or objects.

For arrays, destructuring assigns the value of the variables in the same order it is inside the array. i.e const [brand, car] = ["Toyota", "Corolla"]; here, brand = Toyota and car = Toyota.

For objects, it is almost the same, const cars = {brand: {name: "Toyota", origin: "Japan"
}, cars: {name: "Corolla", released:1970}}; this can be done now, const {brand, cars} = cars;

---

Explain template literals in ES6. How are they different from string concatenation?

Template literals replace places marked with ${item} inside the string and keeps spaces, new lines intact, also good for simple logical operations. Whereas string concatenation adds two strings side by side, and adding new lines must be done with \n, adding new items in between must be done with either commas or after closing the string literals and then initiating a new string afterwards for the rest of the line.
