// program to add element to an array using unshift

function addElement(arr) {
    // adding new array element
    arr.unshift(8);
    console.log(arr);
}

const array = [7, 6, 5];
addElement(array);

//or

//creation of an array using literal
const numArray1 = [5, 6, 7, 8];

//creation of an array using new keyword
const array2 = new Array("eat","sleep");

numArray1.unshift(20);

console.log(numArray1);

//change elements in an array 

array2[1]='john'
//adds to index 3
array2[3]='kim'

console.log(array2)