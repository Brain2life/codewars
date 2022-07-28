// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// SOLUTION TACTICS:
// Task solved by using the following methods:
// 1. Convert to string with toString() method
// 2. Create array of string elements by using split() method
// 3. Reverse array by using reverse() method
// 4. Create a new array by calling parseInt function on each array element
// REFERENCE:
// map() method => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


const digitize = (n) => {
   return n.toString().split("").reverse().map(stringNumber => parseInt(stringNumber)); 
}

// console.log(digitize(348597));