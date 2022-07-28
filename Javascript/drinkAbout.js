// https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript

const peopleWithAgeDrink = old => {
    if (old>=21) return 'drink whisky';
    if (old>=18) return 'drink beer';
    if (old>=14) return 'drink coke';
    return 'drink toddy';
}

console.log(peopleWithAgeDrink(22));