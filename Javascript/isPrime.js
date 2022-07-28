// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by using the most laborious but easiest to understand of the integer factorization
// algorithms.
// Trial division algorithm:
// 1. Accept some input integer n
// 2. For each interger x from [2...sqrt(n)] check if x divides n
// 3. If you found a divisor then n is composite or else n is prime

// REFERENCE:
// https://www.khanacademy.org/computing/computer-science/cryptography/comp-number-theory/a/trial-division

const isPrime = num => {
    if (num < 2) {
        return false;
    }

    for (let index = 2; index <= Math.sqrt(num); index++) {
        if (num % index === 0) {
            return false;
        } 
    }

    return true;
}

// console.log(isPrime(1));