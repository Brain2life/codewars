// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// BEST SOLUTION:
// const DNAtoRNA = dna => dna.replace(/T/g, 'U');

// REFERENCE:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/replace

const DNAtoRNA = dna => {
    let DNA = dna.split('');
    for (let index = 0; index < DNA.length; index++) {
        if (DNA[index] === 'T') {
            DNA[index] = 'U'
        }
    }
    return DNA.join('');
}

console.log(DNAtoRNA('TTTT'));