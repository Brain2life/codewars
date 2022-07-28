// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

const abbrevName = (name) => {
    let input = name.split(' ');
    return input[0][0].toUpperCase() + '.' + input[input.length - 1][0].toUpperCase();
}

console.log(abbrevName('Sam Harris'));