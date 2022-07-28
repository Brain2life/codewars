// https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript
// MY SOLUTION TACTICS:
// This kata is solved by classic for loop.
// Use module 10 operation to show only the last digit of numbers > 9

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// BEST SOLUTION:
// function incrementer(num) { 
//   return num.map((a,i) => (a+i+1)%10);
// }

const incrementer = nums => {
    const output = []
    for (let index = 0; index < nums.length; index++) {
        output.push((nums[index] + index + 1) % 10);
    }
    return output;
}

// console.log(incrementer([1, 2, 3]));