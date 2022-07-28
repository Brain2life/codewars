// https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript

// MY SOLUTION TACTICS:
// To solve this kata we can initialize the current boolean value of the array, and then
// use loop to go through all values and apply relevant operations based on value of "op"
// parameter.
// For XOR operation we can use the following construction: foo !== bar

// REFERENCE:
// Javascript doesn't have boolean XOR operation
// https://www.howtocreate.co.uk/xor.html



const logicalCalc = (array, op) => {
    let currentBooleanValue = array[0];
    for (let index = 0; index < array.length; index++) {
        if (op === 'AND') {
            currentBooleanValue = currentBooleanValue && array[index];
        } else if (op === 'OR') {
            currentBooleanValue = currentBooleanValue || array[index];
        } else if (op === 'XOR') {
            currentBooleanValue = currentBooleanValue !== array[index];
        }
        
    }
    return currentBooleanValue;
}

// console.log(logicalCalc([true, true, true, false], "AND"));
console.log(logicalCalc([true, true, false, true], "XOR"));
