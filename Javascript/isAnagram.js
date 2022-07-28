// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by comparing two sorted strings. Methods used: toLowerCase(), split(), sort(), join().

const isAnagram = (test, original) => {
    return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}

// console.log(isAnagram("Buckethead", "DeathCubeK"));