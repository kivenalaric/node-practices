//to merge property of two objects

// object 1
const person = {
    name: 'Jack',
}

// object 2
const student = {
    gender: 'male'
}

// merge two objects
const newObject = Object.assign(person, student); //using asign operator
const newObject1 = {...person, ...student}; //using spread operator 

console.log(newObject);
console.log(newObject1);