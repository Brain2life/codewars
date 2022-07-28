// https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript

// MY SOLUTION TACTICS:
// This kata can be solved with one-liner by using conditional ternary operator.

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

const problem = (x) => {
    return (typeof x == "number" ? x * 50 + 6 : "Error");
}

console.log(problem("hello"));
console.log(problem(1));