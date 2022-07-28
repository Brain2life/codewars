// https://www.codewars.com/kata/585a033e3a36cdc50a00011c/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by using reduce() iterator with callback function
// to count letter occurence. Then this callback function is used to
// create new array with map() method, where each element passes the check,

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const freqSeq = (str, sep) => {
    const letters = str.split('');
    const countLetters = letters.reduce(function(acc, l) {
        acc[l] = acc[l] ? acc[l] + 1 : 1;
        return acc;
    }, {})
    return letters.map(l => countLetters[l]).join(sep);
}

// console.log(freqSeq('aaaabc'))