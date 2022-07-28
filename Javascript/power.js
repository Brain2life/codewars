// https://www.codewars.com/kata/562926c855ca9fdc4800005b

// MY SOLUTION TACTICS: 
// This is a classic task on recursion.

// REFERENCE:
// https://www.geeksforgeeks.org/recursion/

const numberToPower = (number, power) => {
    if (power === 0) {
        return 1;
    } else {
        return number * numberToPower(number, power - 1)
    }
}

console.log(numberToPower(4, 2));


