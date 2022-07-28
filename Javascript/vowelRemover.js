// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

const shortcut = string => {
    return string.replace(/[aeiou]/g,'')
}

console.log(shortcut('hello'));