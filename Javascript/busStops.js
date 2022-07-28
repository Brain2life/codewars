// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

// MY SOLUTION TACTICS:
// 1. In this kara I use array map() method to create new array consisting of all peoples got on the bus
// 2. Secondly, by using the same method I get the array of all people who got off from the bus
// 3. Use array reduce() method to calculate the sum in each variable
// 4. Finally subtract total number of people got on the bus and who left the bus

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const number = (busStops) => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const sumGetPeople = (busStops.map(stops => stops[0])).reduce(reducer);
    const sumOutPeople = (busStops.map(stops => stops[1])).reduce(reducer);
    return sumGetPeople - sumOutPeople; 
}

// console.log(number([[10,0],[3,5],[5,8]]));