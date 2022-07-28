// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

// BETTER SOLUTION:
// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
//   }

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const countSheeps = arrayOfSheep => {
    let sheepNumber = 0;
    for (let index = 0; index < arrayOfSheep.length; index++) {
        if (arrayOfSheep[index]) {
            sheepNumber += 1;
        }
    }
    return sheepNumber;
}

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));