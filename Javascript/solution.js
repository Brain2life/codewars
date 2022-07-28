// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by using Javascript array sort function, In order to sort numbers
// we need to use compare function in sort().

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const solution = (nums) => {
    return nums !== null ? nums.sort(function(a, b) {
        return a - b;
    }) : []
}

// console.log(solution([1,2,3,10,5]));
// console.log(solution([]));
// console.log(solution(null));