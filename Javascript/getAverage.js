// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

// MY SOLUTION TACTICS:
// To find sum of array elements we can use Array object's reduce() method.
// To find integer rounded down to its nearest value, I use Math objects
// floor() method.

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

const getAverage = marks => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return Math.floor(marks.reduce(reducer) / marks.length);
}

// console.log(getAverage([2,2,2,2]));
// console.log(getAverage([1,2,3,4,5,]));