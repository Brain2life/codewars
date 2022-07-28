// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// REFERENCE:
// https://www.shortcutfoo.com/app/dojos/javascript-arrays/cheatsheet
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


const positiveSum = arr => {
    let sum = 0
    arr.forEach(element => {
       element > 0 ? sum += element : sum += 0  
    });

    return sum;
}

console.log(positiveSum([1,-4,7,12]));