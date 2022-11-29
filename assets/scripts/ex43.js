const newStudent = {
    name:'John',
    gender:'Female',
    age: 26
}

//using spread operator
const copy1 = { ...newStudent }

//using Object.assign() fxn
const copy2 = Object.assign({}, newStudent)

//using structured clone 
const copy3 = structuredClone(newStudent)

console.log(copy1.age)
console.log(copy2.gender)
console.log(copy3.name)

// it can't be done like const copy = newStudent because yu are just creating an alias for newStudent