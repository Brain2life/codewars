// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

// BEST SOLUTION:
// function find_average(array) {
//     var sum = array.reduce((a, b) => a + b, 0);
//     return sum/array.length;
//   }

const find_average = array => {
    let sum = 0;
    
    if (array.length === 0) {
        return 0
    } else {
        for (let index = 0; index < array.length; index++) {
            sum += array[index];
        }
    }

    return sum / array.length;
}

// console.log(find_average([1,1,1]));