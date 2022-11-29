// // let x = 5;
// const x = 1;
// const y = 2;
// const z = 3;

// console.log(x);
// console.log(y);
// console.log(z);

// console.log("Lets Go!!");

// const greet = 'Hello';
// const name = 'Leonard';
// const quest = "how are you?";

// // console.log(greet +' '+ name +' '+ quest);

// console.log(greet, name, quest, '','Hope','fine.');

// console.log("I am Alaric");

// const nom = 'Kiven';
// const name1 = "Alaric";
// const result = `The names are ${nom} and ${name1}`;

// console.log(result);

// let a = 3;
// let b = 10;
// let c = 5;

// // console.log(b);
// // const name2 = 1169846518998n;
// // typeof(name2);

// // console.log(typeof(name2));
// // document.write(typeof(name2));

// // let c = 2;
// // let d = 3;

// // console.log(c >= d);
// // document.write(c >= d);

// if ( a > b ){
//     console.log("a is greater than b");
// }

// else if (a < b) {
//     console.log("b is greater than a");
// }
// else {
//     console.log("a and b are equal");
// }
// const n = 6
// for (let e = 2; e <= n; e++) {
//     console.log("he is king")
// }

// if (a > 0) {
//     console.log("a is positive");
// } else if (a == 0) {
//     console.log("The number is 0");
// } else {
//     console.log("a is negative");
// }

// let nom2 = 'Jesus';
// function greetT(nom2) {
//     console.log(`Hello there ${nom2}`);
// }

// greetT('Jesus');

// if (a % 2 == 0) {
//     console.log("a is even");
// } else {
//     console.log("a is odd");
// }

// if (a > b && a > c) {
//     console.log("a is greatest");
// } else if (b > a && b > c) {
//     console.log("b is greatest")
// } else {
//     console.log("c is greatest")
// }
// let b = 10;
// let h = 5;

// let area = ( 1/2 * b) *  h;
// console.log(area);

// function add(z, k) {
//     sum = (z + k);
//     console.log(sum)
// }
// add(20,30)

// function squareQ(z) {
//     return z * z;
// }

// let SQ = squareQ(3)
// console.log(SQ)

// function sub(z, k) {
//     minus = (z - k);
//     console.log(minus)
// }
// sub(50,10)

//program to print a text
// salut();
// function salut() {
// console.log('Hi, there.');
// }

// function factorial(y) {
//   if (y === 0) {
//     return 1;
//   } else {
//     return y * factorial(y - 1);
//   }
// }

// let num = 6;

// if (num > 0) {
//   let result = factorial(num);
//   console.log(`the factorial of ${num} is ${result}`);
// } else {
//   console.log("you entered a negative number");
// }

// function Student(firstName, lastName, age, phoneNumber) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.phoneNumber = phoneNumber;

//   this.greet = function () {
//     return "Hi" + " " + this.firstName;
//   };
// }

// const student1 = new Student("John", "Joe", 20, 237);
// const student2 = new Student("ken", "cha", 20, 237 );
// const student3 = new Student("kim", "jake", 40, 237 );

// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student2.greet());
// console.log(student1.greet());
// console.log(student3.greet());

// student3.age = 50;

// console.log(student3);

// console.log(student3.greet());
// student3.greet = function () {
//   return "hey" + " " + student3.firstName;
// };
// console.log(student3.greet());

// Student.prototype.age = 10;

// console.log(student3.age);

// function Person (){
//     this.name = 'John'
//     this.age = 40
// }

// const person1 = new Person();
// console.log(Person.prototype)
// Person.prototype.age = 20;
// console.log(Person.prototype)

// Person.prototype = {age: 70}
// const person3 = new Person();

// console.log(person3.age)
// console.log(person1.age)

// Person.prototype.age=24;
// const person = new Person();

// console.log(person.__proto__.age);
// console.log(person.age)

//Factorial
//  function factorial(x) {   if (x == 0){
//          return 1;
//      } else {
//          return x *factorial(x-1);
//      }
//  }

//  let num4 = 6;
//  if (num4 >= 0) {
//      const result = factorial(num4);
//      console.log(`factorialof ${num4} is ${result}`);
//  } else {
//      console.log('Enter a positive num')
//  }

// //Find Factors of a num

// const num = 10 //input
// console.log(`The Factors of ${num} are:`);
// //loop through 1 to num
// for(let i = 1; i <= num; i++) {
//     //check if a anumber is a factor
//     if (num % i == 0) { //% is used to check if num is exactly divisible
//         console.log(i);
//     }
// }

// //check +ve or -ve or zero

//  let a = -2; 
//  if (a > 0) {
//      console.log('a is positive');
//  } else if (a == 0){
//      console.log('a is zero')
//      } else {
//      console.log('a is negative')
//  }

// // //HCF
//  let hcf;
//  let h = 40;
//  let c = 100;
//  for (let i = 1; i <= h && i <= c; i++){
//      if ( h % 1 == 0 && c % i == 0) {
//          hcf = i;
//      }
//  }
//  console.log(`HCF of ${h} and  ${c} is ${hcf}`);

// // //simple calc
// // const operator = '+';
// // const num1 = 20;
// // const num2 = 40;
// // let result;
// // if (operator == '+') {
// //     result = num1 + num2;
// // } else if (operator == '-') {
// //     result = num1 - num2;
// // } else if (operator == '*') {
// //     result = num1 * num2;
// // } else {
// //     result = num1 / num2;
// // }
// // console.log(`${num1} ${operator} ${num2} = ${result}`);

//  //naturalNum 
//  function sum(num3) {
//      if(num3 > 0){
//          return num3 + sum (num3-1);
//      } else {
//         return num3
//      }
//  }
//  const number=2;
//  const result= sum(number);

//  console.log(`The sum is ${result}`)

//  class Car {
//     constructor(fName, lName) {
//       this.fName = fName;
//       this.lName = lName;
//     }
//   }
  
//   const myCar = new Car("Ford", 'malone');

//   console.log(myCar)

//   function difference(setA, setB) {
//     let differenceSet = new Set(setA)
//     for (let i of setB) {
//         differenceSet.delete(i)
//     }
//     return differenceSet
//   }

//   let setA = new (['apple','mango','orange']);
//   let setB = new (['grapes', 'apple', 'banana']);

//   let result = difference(setA, setB);

//   console.log(result);