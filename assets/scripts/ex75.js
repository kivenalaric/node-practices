//JavaScript Program to Check Whether a String Starts and Ends With Certain Characters
function checkStartEnd(word, letter) {
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(0) && word.charAt(word.length -1) == letter){
            return true;
        } else {
            return false;
        }
    }
}

const word1 = 'melow'
const letter1 = 'd'

console.log(checkStartEnd(word1, letter1))