// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// MY SOLUTION TACTICS:
// This easy kata is solved by using for loop and Array reverse() method
// to return reversed array of numbers. 

const reverseSeq = n => {
    let array = [];
    for (let index = 1; index <= n; index++) {
        array.push(index);
    }
    
    return array.reverse()
}

// console.log(reverseSeq(5));