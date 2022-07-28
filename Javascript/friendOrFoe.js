// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

// MY SOLUTION TACTICS:
// The idea is to use Javascript's filter array method to output strings which have length equal to 4
// The filter() method creates a new array with all elements that pass the test implemented by the provided function. 

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const friend = (friends) => {
    return friends.filter(person => person.length === 4)
}

// console.log(friend(["Ryan", "Kieran", "Mark"]))