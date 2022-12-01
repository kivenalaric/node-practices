function encodeString(word) {
    let result = btoa(word);
    return result;
}

const word2 = 'Kimberly'
console.log(word2)
console.log(encodeString(word2))

//btoa stands for binary to array.
//it creates a base64 encoded ASCII string
//btoa()= binary to ASCII

//atob stands for array to binary
//it decodes a base64 encoded string


function decodeString(word3) {
    let result = atob(word3);
    return result;
}

const word4 = 'S2ltYmVybHk='
console.log(word4)
console.log(decodeString(word4))