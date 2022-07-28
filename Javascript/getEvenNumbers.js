// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

// MY SOLUTION TACTICS:
// This easy kata is solved by using array filter() method

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const getEvenNumbers = numbersArray => {
    return numbersArray.filter(number => number % 2 === 0)
}

// console.log(getEvenNumbers([2,4,5,6]));