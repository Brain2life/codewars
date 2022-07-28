// https://www.codewars.com/kata/55ecd718f46fba02e5000029

// MY SOLUTION TACTICS:
// Use a, b parameters as indexes in for loop to generate output array

const between = (a, b) => {
    let outputArray = [];
    for (let index = a; index < b+1; index++) {
        outputArray.push(index)
    }

    return outputArray;
}

console.log(between(1, 4));