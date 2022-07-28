// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// MY SOLUTION TACTICS:
// To find number of occurences of odd numbers, I use reducre() method
// to call callback function. This function uses XOR operation to find 
// number of odd occurences.

// REFERENCE:
// https://www.youtube.com/watch?v=2Bn5uBnmptU

const findOdd = A => {
    return A.reduce((a, b) => a ^ b)
}

// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
// console.log(findOdd([20, 2]));