// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

// MY SOLUTION TACTICS:
// As best practice, this kata is solved by using ES6 based one-liner ternary
// conditional operator.

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

const areaOrPerimeter = (l, w) => {
    return (l == w ? l*w : 2*(l+w));
}

// console.log(areaOrPerimeter(6,10));