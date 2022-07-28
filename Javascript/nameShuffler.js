// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

// MY SOLUTION TACTICS:
// This kata can be solved by using Javascript array methods such as split(), reverse() and 
// finally join() methods to output reversed string.

// REFERENCE:
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

const nameShuffler = (str) => {
    return str.split(" ").reverse().join(" ");
}

// console.log(nameShuffler('john McClane'));