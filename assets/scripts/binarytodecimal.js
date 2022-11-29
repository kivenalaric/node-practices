// // program to convert decimal to binary
// // function convertToBinary(d) {
// //     const x = parseInt(d / 2);
// //     const rem = d % 2;
// //     if (x != 0) {
// //         console.log(`Remainder = ${rem}`)
// //         return convertToBinary(x) + " "+ (rem);        
// //     } else {
// //         return 1;
// //     }
// // }

// // let num = 2
// // console.log(convertToBinary(num));


// function convertToBinary(x) {
//     let bin = 0;
//     let rem=0, i = 1, 
//     while (x != 0) {
//         rem = x % 2;
//         x = parseInt(x / 2);
//         bin = bin + rem * i;
//         i = i * 10;
//     }
//     console.log(`Binary: ${bin}`);
// }

// let number = 24;

// convertToBinary(number);
// console.log(convertToBinary(number));