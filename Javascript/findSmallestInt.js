// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

// MY SOLUTION TACTICS:
// This kata was solved by classic method to find min in array.
// I tried to not use built-in methods such as Math.min()
// to find min integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min = args[0];
        for (let index = 0; index < args.length; index++) {
            if (args[index] < min) {
                min = args[index]
            }
        }
        return min
    }    
}

// console.log(findSmallestInt([34, 15, 88, 2]));