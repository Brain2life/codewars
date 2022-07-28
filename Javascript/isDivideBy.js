// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript

const isDivideBy = (number, a, b) => {
    return (number % a == 0 && number % b == 0) ? true : false;
}

console.log(isDivideBy(-12, 2, -6));