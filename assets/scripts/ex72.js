function countOccurance(string, charr) {
    let count = 0
    for (let i= 0; i < string.length; i++){
        if(string[i] == charr){
            count++
        }
    }
    return count;
}

let word= 'hello'
let charrac = 'l'

console.log(countOccurance(word, charrac))