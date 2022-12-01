function reverseString(string){
    const reverse = string.split('').reverse().join('')
    return reverse; 
}

const string1 = 'hello'

console.log(reverseString(string1))