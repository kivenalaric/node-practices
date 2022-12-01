function checkSub(word, check){
    word = word.toLowerCase();
        if(word.includes(check)){
        return 'yes it has';
    } else {
        return 'it doesnt';
    }
}

const word2 = 'Kimberly'
const check2 = 'o'
console.log(checkSub(word2, check2))