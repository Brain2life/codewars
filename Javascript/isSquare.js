// https://www.codewars.com/kata/56853c44b295170b73000007/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by using square root method from Math object.
// Idea is to use every() array method to check if number is square root and check 
// condition whether initial array length remained the same or not after applying every()
// method. If remained same, then return true, otherwise return false

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every


const isSquare = (arr) => {
    return arr.length ? arr.every(n => Math.sqrt(n) % 1 === 0) : undefined;
}

// console.log(isSquare([1, 4, 9, 16, 25, 36]));
// console.log(isSquare([1, 2, 3, 4, 5, 6]));
