function  functionOverloading(x, y) {
    console.log(2)
    return x*y;
}

function  functionOverloading(z) {
    console.log(5)
    return z;
}

console.log(functionOverloading(z));
console.log(functionOverloading( x, y));
