// https://www.codewars.com/kata/57126304cdbf63c6770012bd/train/javascript

// MY SOLUTION TACTICS:
// This kata solved by comparing parsed value from the string with converted value 
// by using Number() constructor

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

const isDigit = (s) => {
    return parseFloat(s) === Number(s);
}