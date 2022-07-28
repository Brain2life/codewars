// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript

// MY SOLUTION TACTICS:
// This easy kata is solved by using Array methods reverse() and join()
// to return reversed word string.

// REFERENCE:
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

const reverseWords = str => {
    return str.split(' ').reverse().join(' ');
}

// console.log(reverseWords('hello world!'));