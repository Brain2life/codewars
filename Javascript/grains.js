// https://www.codewars.com/kata/55f7eb009e6614447b000099/train/javascript

// This kata is solved by formula. Use pow() method from Math object to calculate the number degree.
// This is the famous task "Wheat and chessboard problem"

// REFERENCE:
// https://en.wikipedia.org/wiki/Wheat_and_chessboard_problem

const square = number => {
    return Math.pow(2, number - 1)
}

// console.log(square(32));