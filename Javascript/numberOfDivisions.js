// https://www.codewars.com/kata/5913152be0b295cf99000001/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by using while loop to increase numberOfDivisions variable at
// each successful iteration.

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

const divisions = (n, divisor) => {
    let numberOfDivisions = 0;
    while (n >= divisor) {
        n = parseInt(n/divisor);
        numberOfDivisions++;
    }
    return numberOfDivisions;
}

console.log(divisions(6, 5));