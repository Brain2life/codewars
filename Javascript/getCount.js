// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// MY SOLUTION TACTICS:
// This kata can be solved by using regex expression to find matching strings in the
// input, and then return the total number of found matches.

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

const getCount = str => {
    const regex = /[aeiou]/ig;
    return (str.match(regex) || []).length;
}

// console.log(getCount("abracadabra"));