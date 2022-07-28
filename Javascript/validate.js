// https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by using test() method, which executes a search between
// a regular expression and a specified string.
// To craft regex I used lookahead zero length assertion. More details at reference.

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
// https://www.regular-expressions.info/lookaround.html

function validate(password) {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
}

// console.log(validate('djI38D55'));