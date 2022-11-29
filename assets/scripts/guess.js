// let random_num = Math.random();
// console.log(random_num);

//or
//get random number within a range
function getRandomNum(x, y) {
    return Math.random() * (y - x) + x;
  }
let random_num = getRandomNum(20, 100);
console.log(random_num);

let number = random_num;
let roundedNumber = Math.floor(number);
console.log(roundedNumber);