function compareStrings(word, compare){
    word = word.toLowerCase();
    compare = compare.toLowerCase();
    if (word == compare){
        return true;
    } else {
        return false;
    }
}

let word1 = 'Java'
let compare1 = 'java'

console.log(compareStrings(word1, compare1));