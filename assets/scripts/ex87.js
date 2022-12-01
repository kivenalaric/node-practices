function rangeNumCharac(digits, characters){
    let result = digits.slice(2, 6) + characters.slice(2, 7)
    return result;
}

const digit2 = [1, 2, 3, 5, 6, 7, 8, 9]
const characters2 = ["yo", "hi", "bet", "gi", "pum", "to", "sim", "hry",]
console.log(rangeNumCharac(digit2, characters2))

//slice() selects part of an array and returns the new array