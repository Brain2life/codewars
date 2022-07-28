// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// This solution uses Javascript's Set data structure to filter out duplicates.
// The idea is to compare lengths of input string and new Data set by using size property.
// If they equal, then string is isogram
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set


const isIsogram = (str) => {
    return new Set(str.toLowerCase()).size === str.length;
}

// console.log(isIsogram("ab"));