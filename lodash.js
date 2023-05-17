/* AUTHOR: JONATHAN IVANY */

// Lodash is a popular node js module providing a variety of utility functions that greatly assist in working with arrays in JavaScript. These functions simplify common array operations such as iteration, filtering, mapping, sorting, and grouping. Lodash also offers optimized algorithms and performance enhancements to improve the efficiency of array-related tasks.

const _ = require("lodash"); // load the lodash module, "_" is a common name devs give for lodash since it is memorable and quick to write

/* Working with a single array */
console.log("");
console.log("Working with a single array");
console.log("===========================");
// we can create an array of a range 1-100 using the .range() method
const numbers = _.range(1, 1001);

// use .sum() to get the sum of all the numbers in an array
const sum = _.sum(numbers);
console.log(`The sum of all the numbers is ${sum}`);

// use .mean() get the average of all the numbers in the array
const average = _.mean(numbers);
console.log(`The average of all the numbers is ${average}`);

// we can use .filter() to filter the given array with a given condition
// in this case we will filter the array to show how many even numbers there are
const evens = _.filter(numbers, (num) => num % 2 === 0);
console.log(`There are ${evens.length} even numbers`);

// use .max() find the maximum number in the array
// useful if the array is unsorted
const max = _.max(numbers);
console.log(`The maximum number is ${max}`);

// use .chunk() to group the array with a given condition
// in this case we are grouping by 100s
const chunks = _.chunk(numbers, 100);
console.log(`There are ${chunks.length} chunks of 100 numbers each`);

////////////////////////////////////////////
/* Working with 2 arrays that are strings */
console.log("");
console.log(" Working with a two arrays ");
console.log("===========================");

// create an array of fruits
const fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "kiwi",
  "lemon",
];

// create an array of vegetables
const vegetables = [
  "artichoke",
  "beet",
  "carrot",
  "daikon",
  "eggplant",
  "fennel",
  "garlic",
  "horseradish",
  "kale",
];

// you can use .concat() to merge the two arrays
const produce = _.concat(fruits, vegetables);
console.log(`There are ${produce.length} items in the merged array`);

// use .sortBy() to sort the array alphabetically
const sorted = _.sortBy(produce);
console.log(`The sorted array is: ${sorted}`);

// use .sample() to get a random item from the array
const random = _.sample(produce);
console.log(`A random item from the array is: ${random}`);

// use .groupBy() to group the items by a given condition
// in this case we are grouping the items by the first letter
const grouped = _.groupBy(produce, (item) => item[0]);
console.log(`The grouped items are: ${JSON.stringify(grouped)}`);

//////////////////////////
/* Working with objects */

console.log("");
console.log(" Working with objects using lodash");
console.log("==================================");

// random object for testing
const person = {
  name: "Jon Ivany",
  age: 23,
  address: {
    city: "St Johns",
    state: "NL",
    zip: "A1A1A1",
  },
};

// use .get(obj, 'property') to get the value of that objects property
const name = _.get(person, "name");
console.log(`Name: ${name}`);

// use .set(obj, 'property') to set that value of the objects property
_.set(person, "age", 31);
console.log(`Age: ${person.age}`);

// use .has(obj, 'property') to check if a property exists
const hasZip = _.has(person, "address.zip");
console.log(`Has zip: ${hasZip}`);

// .toPairs() will return the objects properties as key value pairs which is each property as its own array
const pairs = _.toPairs(person);
console.log(`Pairs: ${JSON.stringify(pairs)}`);

// use .mapValues() to map over the object and return a new object
const mapped = _.mapValues(person, (value) => `${value} years old`);
console.log(`Mapped object: ${JSON.stringify(mapped)}`);
