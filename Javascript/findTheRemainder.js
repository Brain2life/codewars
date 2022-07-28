// https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript

// BETTER SOLUTION:
// function remainder(a, b){
//     return a > b ? a % b : b % a;
//   }

const remainder = (a, b) => {
    if (a >=b) {
        return a % b;
    } else {
        return b % a;
    }
}

console.log(remainder(0, -1));