// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

// MY SOLUTION TACTICS:
// Solution for this kata is quite straightforward, ideas is to bruteforce all numbers up to
// n and then check if remainder is zero. If yes, then increase counter number.

const getDivisorsCnt = (n) => {
    let numberOfDivisors = 0;
    for (let i = 1; i <=n; i++) {
        if (n % i === 0) {
            numberOfDivisors += 1;
        }
    }
    return numberOfDivisors;
}

// console.log(getDivisorsCnt(4));