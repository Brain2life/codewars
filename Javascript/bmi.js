// https://www.codewars.com/kata/57a429e253ba3381850000fb

// MY SOLUTION TACTICS:
// This kata is solved by using 'switch' construction

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

const bmi = (weight, height) => {
    let bmi = weight / (height * height);
    switch (true) {
        case bmi <= 18.5:
            return 'Underweight';
        case (bmi <= 25.0 && bmi > 18.5):
            return 'Normal';
        case (bmi <= 30.0 && bmi > 25.0):
            return 'Overweight';
        case bmi > 30:
            return 'Obese';
        default:
            break;
    }
}

console.log(bmi(80, 1.80));