// https://www.codewars.com/kata/598057c8d95a04f33f00004e/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by classic for loop and array push() method

const range = (startNum, endNum) => {
    let output = [];
    if (startNum === endNum) {
        return [];
    } else {
        for (let index = startNum + 1; index < endNum; index++) {
            output.push(index);
        }
    }

    return output;
}

console.log(range(2, 9));