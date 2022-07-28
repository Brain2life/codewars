// https://www.codewars.com/kata/5299413901337c637e000004/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by iteration through all ten elements and comparing
// them with values from superImportantArray.

const getMissingElement = superImportantArray => {
    for (let index = 0; index < 10; index++) {
        if (superImportantArray.indexOf(index) === -1) {
            return index;
        }
    }
}

// console.log(getMissingElement([0,5,1,3,2,9,7,6,4]));