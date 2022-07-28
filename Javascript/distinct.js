// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript

// MY SOLUTION TACTICS:
// This kata can be solved by using Set constructor.
// In order to convert Set structure to array use three dots notation ...

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

const distinct = (a) => {
    return [...new Set(a)];
}

// console.log(distinct([1,1,2]));