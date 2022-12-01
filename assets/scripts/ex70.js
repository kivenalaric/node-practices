const word = 'Kimberly is a girl';
console.log(word)
const change = /Kimberly/g;
const replace = word.replace(change, 'Jessica')

console.log(replace)