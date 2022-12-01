// let word = 'dad'
// let palindrome = word.split('').reverse().join('')

//  if (word == palindrome){
//      console.log(`The ${word} is a palindrome`)
//  } else {
//      console.log('it is not a palindrome')
//  }

 function reverseString(string){
    const reverse = string.split('').reverse().join('')
    if (reverse == string){
        console.log(`${string} is a palindrom`)
    } else {
        console.log(`${string} is not a palindrom`)
    }
    return reverse;
}

const string1 = 'love'

console.log(reverseString(string1))