// https://www.codewars.com/kata/5ce6728c939bf80029988b57/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by using array's includes() method to check if the input string
// value is in the alphabet.

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

const solve = s => {
    return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
}

// console.log(solve('abc'));