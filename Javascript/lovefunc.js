// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by comparing remainders of two numbers: based on even mod2 operation

const lovefunc = (flower1, flower2) => {
    return flower1 % 2 !== flower2 % 2
}

// console.log(lovefunc(1, 4));