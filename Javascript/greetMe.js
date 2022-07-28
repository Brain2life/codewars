// https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript

// This easy kata is solved by string toUpperCase(), toLowerCase() and slice() methods.

// REFERENCE:
// https://www.w3schools.com/jsref/jsref_slice_string.asp#:~:text=The%20slice()%20method%20extracts,the%20end%20of%20the%20string.

const greet = name => {
    return 'Hello ' + name[0].toUpperCase() + name.slice(1).toLowerCase() + '!' 
}

// console.log(greet('BILLY'));