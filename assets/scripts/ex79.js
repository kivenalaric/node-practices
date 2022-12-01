//randomstring
 function randomS(word){

    for (let i = 0; i < word.length; i++){
        let result =  word.charAt(Math.random() * word.length);
        return result
    }

 }

const word2 = 'fbbgfgifbgifngin'
console.log(randomS(word2))

//Math.random()