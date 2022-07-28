// https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by classic method.

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

const uniTotal = inputString => {
    let sum = 0;
    for (let index = 0; index < inputString.length; index++) {
        sum += inputString.charCodeAt(index)
    }
    return sum;
}

console.log(uniTotal('aaa'));