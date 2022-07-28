// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

// MY SOLUTION TACTICS:
// This kata solved by comparing original input string with reversed one.
// Both input and reverse string characters lowered by using toLowerCase() string method.
// To reverse string, I use array methods: split(), reverse() and join() to get back 
// reversed strings. 

// REFERENCE:
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/


const isPalindrome = (x) => {
    return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}

// console.log(isPalindrome('Aba'));