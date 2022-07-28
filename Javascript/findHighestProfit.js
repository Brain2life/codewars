// https://www.codewars.com/kata/559590633066759614000063/train/javascript

// MY SOLUTION TACTICS:
// In this kata I tried to not use built-n Math object methods for max and min values
// So, my solution is quite simple:
// 1. Initialize max and min elements by assigning them to the first array element
// 2. Run loop where for max and min values are compared with initialized, and if greater or lesser assign new max and min values
// 3. Return array with min and max values.


const minMax = (arr) => {
    let max = arr[0];
    let min = arr[0];
    for(let index in arr){
        if (arr[index] >= max) {
            max = arr[index];
        } else if(arr[index] <= min) {
            min = arr[index];
        }
    }
    return [min, max];
}

// console.log(minMax([1,2,3]));