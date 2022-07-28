// https://www.codewars.com/kata/56a25ba95df27b7743000016/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by using test() method from Javascript Regex object
// The test() method executes a search for a match between a regular expression 
// and a specified string. Returns true or false. 

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const validateCode = (code) => {
    const regex = /^[1-3]/g;
    return regex.test(code);
}

console.log(validateCode(123));