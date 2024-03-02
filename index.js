// TypeError: map is not a function in JavaScript

// EXAMPLE 1 - Only call the `map()` method on valid arrays

const arr = [1, 2, 3];

const result = arr.map(element => {
  return element + 1;
});

console.log(result); // 👉️ [2, 3, 4]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Accessing an array property in an object before calling Array.map()

// const obj = {
//   numbers: [1, 2, 3],
// };

// const arr = obj.numbers.map(num => {
//   return num + 10;
// });

// console.log(arr); // 👉️ [11, 12, 13]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if the value is an array before calling `map()`

// const arr = 'test';

// const result = Array.isArray(arr)
//   ? arr.map(element => element + 1)
//   : [];

// console.log(result); // 👉️ []

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using a simple `if` statement

// const arr = 'test';

// let result = [];

// if (Array.isArray(arr)) {
//   result = arr.map(element => element + 1);
// }

// console.log(result); // 👉️ []

// ------------------------------------------------------------------

// // EXAMPLE 5 - Convert the value to an array before calling `map()`

// const set = new Set([1, 2, 3]);

// const result = Array.from(set).map(element => element + 1);
// console.log(result); // 👉️ [2, 3, 4]

// ------------------------------------------------------------------

// // TypeError: object.map is not a function in JavaScript

// // EXAMPLE 6 - Use Object.keys() to get an array before calling Array.map()

// const obj = {
//   name: 'James',
//   country: 'Chile',
// };

// // 👇️ ['name', 'country']
// console.log(Object.keys(obj));

// const result = Object.keys(obj).map(key => {
//   console.log(key); // 👉️ name, country
//   console.log(obj[key]); // 👉️ James, Chile

//   return {[key]: obj[key]};
// });

// // 👇️ [{name: 'James'}, {country: 'Chile'}]
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 7 - Iterating over an object's values

// const obj = {
//   num1: 4,
//   num2: 8,
// };

// // 👇️ [4, 8]
// console.log(Object.values(obj));

// const result = Object.values(obj).map(value => {
//   console.log(value); // 👉️ 4, 8

//   return value * 2;
// });

// // 👇️ [8, 16]
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 8 - Iterating over an object's entries

// const obj = {
//   name: 'James',
//   country: 'Chile',
// };

// // 👇️ [['name', 'James'], ['country', 'Chile']]
// console.log(Object.entries(obj));

// const result = Object.entries(obj).map(([key, value]) => {
//   console.log(key); // 👉️ name, country
//   console.log(value); // 👉️ James, Chile

//   return {[key]: value};
// });

// // 👇️ [{name: 'James'}, {country: 'Chile'}]
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 9 - If your object has an array property, access the property

// const obj = {
//   numbers: [1, 2, 3],
// };

// const arr = obj.numbers.map(num => {
//   return num + 10;
// });

// console.log(arr); // 👉️ [11, 12, 13]
