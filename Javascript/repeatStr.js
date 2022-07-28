// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

// This kata is solved by classic for loop. 
// Best solution is to use repeat() string method.
// The repeat() method constructs and returns a new string which contains 
// the specified number of copies of the string on which it was called, concatenated together.

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat 

const repeatStr = (n, s) => {
    output = '';
    for (let index = 0; index < n; index++) {
        output += s
    }
    return output
}

// ALTERNATIVE BEST SOLUTION
// function repeatStr (n, s) {
//     return s.repeat(n);
//   }

console.log(repeatStr(6, 'I'));