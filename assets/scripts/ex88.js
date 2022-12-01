//white spaces
function removeWhiteSpaces(word){
    let result = word.trim()
    return result;

}

const word1 = "           yo       "
console.log(removeWhiteSpaces(word1))