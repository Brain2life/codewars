// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

// MY SOLUTION TACTICS:
// My solution is too verbose and not the best one. See best solution.
// In best solution the use of slice() array method is crucial.

// BEST SOLUTION:
// function array(arr){
//     return arr.split(",").slice(1,-1).join(" ") || null;
//   }

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const array = arr => {
    let reduced = arr.split(',');

    reduced.pop();
    reduced.shift();

    if (arr.length === 0 || reduced.length === 0) {
        return null
    } else {
        return reduced.join(' ')
    }
}

// console.log(array('1,2,3,4,5'));
// console.log(array("1,2,3"));
// console.log(array("1"));
// console.log(array(""));