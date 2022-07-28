// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

// MY SOLUTION TACTICS:
// This kata is solved by using regex expression and conditional statements

const incrementString = input => {

    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var up = parseInt(p2) + 1;
      return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
}

console.log(incrementString('foobar001'));