// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

// BEST SOLUTION:
// function century(year) {
//     return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
//   }

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

const century = year => {
    return year % 100 == 0 ? Math.floor(year / 100) : Math.floor(year / 100) + 1;
}

console.log(century(1900));