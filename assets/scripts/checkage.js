let birthYear = 1988
let currentYear = 2022
let child = 11
let teenager = 19
let age = currentYear - birthYear

if (birthYear > currentYear){
    console.log('still to be born')
} else if (age <= child){
    console.log(`${age} child`)
} else if (age <= teenager) {
    console.log(`${age} teenager`)
} else {
    console.log(`${age} Adult`)
}