// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

// MY SOLUTION TACTICS:
// This easy kata is solved by conditional ternary operator.

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator


const isDivisible = (n, x, y) => {
    return (n % x === 0 && n % y === 0) ? true : false;
}

console.log(isDivisible(3, 1, 3));