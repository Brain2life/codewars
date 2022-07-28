// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by classic methof with for loop and condition checking
// First we count the numbers of lower and upper case letters in the string.
// Finally we return the result based on comparing these two numbers.

const solve = s => {
    let numberOfLowerCharachters = 0;
    let numberOfUpperCharachters = 0;
    for (let index = 0; index < s.length; index++) {
        if (s[index] === s[index].toUpperCase()) {
            numberOfUpperCharachters++;
        } else {
            numberOfLowerCharachters++;
        }
    }
    return numberOfLowerCharachters >= numberOfUpperCharachters ? s.toLowerCase() : s.toUpperCase();
}

// console.log(solve('CODe'));