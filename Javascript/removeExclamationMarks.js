// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

// MY SOLUTION TACTICS:
// 1. Split input string into array with split() method
// 2. Use filter method on each array element
// 3. In filter method use function which checks only for letters not equal to ! mark and return the letter back to the array
// 4. Use join method to return string from array elements

// BEST SOLUTION:
// 1. Just use built-in replace() method for strings
// 2. Example code: p.replace('dog', 'monkey')
// 3. Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

const removeExclamationMarks = (s) => {
    return  s.split('').filter(function(letter){
        if(letter !== '!') {
            return letter;
        }
    }).join('');
}

// console.log(removeExclamationMarks("Hello World!"));