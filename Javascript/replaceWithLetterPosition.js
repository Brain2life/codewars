// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

// MY SOLUTION TACTICS:
// 1. Define alphabet constant to store letters. This constant will be used to compare indexes.
// 2. Use iterator construction with values() method in order to directly access string values in input text.
// This method is applicapable only for arrays, so first we need to split the string
// 3. Tha main body of the function checks if character in input string is present in alphabet by checking
// with index value. If value is not equal to -1, which means that value is present in alphabet,
// we push the index into output array.
// 4. Before returning result we add +1 to index values, as in Javascript indexing starts from 0
// 5. Finally we return string by joining array elements with space.

// REFERENCE:
// 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values

const alphabetPosition = (text) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const iterator = text.split('').values();
    let output = [];
    for (const letter of iterator){
        if (alphabet.split('').indexOf(letter.toLowerCase()) !==-1) {
            output.push(alphabet.split('').indexOf(letter.toLowerCase()) + 1).toString();
        }
    }
    return output.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));