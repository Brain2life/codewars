// https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript

// MY SOLUTION TACTICS:
// By using for loop we can create sequential numbers and then sum them with reduce function
// Used functions: Math.pow() and reduce()

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const sumCubes = (n) => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const numbers = [];
    for (let index = 0; index <= n; index++) {
        numbers.push(Math.pow(index, 3))
    }
    return numbers.reduce(reducer);
}

// console.log(sumCubes(2));