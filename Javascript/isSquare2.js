// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

// MY SOLUTION TACTICS:
// This easy kata is solved by using ternary operator. 
// To exclude 0 number case, we need to use if operator.
// In my case, I did overcomplication and error by checking mod operation with 0
// In best solution scenario, it is recommended to check by mod 1.

// BEST SOLUTION
// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
//   }

const isSquare = n => {
    if (n === 0) {
        return true
    } else {
        return  n % Math.sqrt(n) === 0 ? true : false
    }
}

// console.log(isSquare(0));