// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

const hoopCount = n => {
    return n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it'
}

console.log(hoopCount(3))
console.log(hoopCount(11))