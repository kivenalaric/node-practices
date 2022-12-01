function fileExtension(file){
    let extension = file.split('.').pop()
    return extension;
}

const file2 = 'rebase.js';
console.log(fileExtension(file2))

//pop() removes last element of an array and returns the removed element

