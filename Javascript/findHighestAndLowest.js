// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// MY SOLUTON TACTICS:
// In this kata I used raw approach to find max and min by iteration through all elements of the string

// BEST SOLUTION:
// function highAndLow(numbers){
//     numbers = numbers.split(' ').map(Number);
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
//   }

// Best solution approach uses Math object to find max and min. 
// Other thing to note that this solution uses Number constructor to convert strings to numbers

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

const highAndLow = (numbers) => {
    const input = numbers.split(' ').map(number => parseInt(number));
    const output = [];
    let max = input[0];
    let min = input[0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= max) {
            max = input[i]
        } else if (input[i] <= min) {
            min = input[i]
        }
    }
    return [max.toString(), min.toString()].join(" ")
}

// console.log(highAndLow("1 2 3 4 5"));