function checkStart(word, check){
    word = word.toLowerCase();
    if(word[0] == check){
        return 'yes it starts';
    } else {
        return 'it doesnt';
    }
}

const word2 = 'Kimberly'
const check2 = 'k'
console.log(checkStart(word2, check2))