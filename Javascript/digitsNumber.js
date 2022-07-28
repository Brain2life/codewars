// https://www.codewars.com/kata/58fa273ca6d84c158e000052/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by using toString() method to convert Number object to string

// REFERENCE:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

const digits = n => {
    return (n.toString()).length
}

console.log(digits(12345));