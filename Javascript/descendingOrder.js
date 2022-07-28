// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

const descendingOrder = (n) => {
    return parseInt(((n.toString().split('')).sort().reverse()).join(''));
}

// console.log(descendingOrder(1201));