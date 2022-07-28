// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

// MY SOLUTION TACTICS:
// In this kata I use two main methods: array reduce() method to sum values and Math object's abs() method to return absolute values

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const sumDigits = (number) => {
    const reducer = (previousValue, currentValue) => Math.abs(parseInt(previousValue)) + Math.abs(parseInt(currentValue));
    return parseInt(Math.abs(number).toString().split('').reduce(reducer));
}

// console.log(sumDigits(0));