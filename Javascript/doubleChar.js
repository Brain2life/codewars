// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

// MY SOLUTION TACTICS:
// This kata solved by using Arrays map() method.
// The map() method creates a new array with the results of calling a function for every array element.

// REFERENCE:
// https://www.w3schools.com/jsref/jsref_map.asp

const doubleChar = str => {
    return str.split('').map(element => {
        return element + element;
    }).join('');
}

// console.log(doubleChar('abcd'));