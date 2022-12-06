// function compareTriplets(arr) {
//     let x=arr.length-1, m=0;
//     let sum1=0, sum2 =0;
//     for(y=0; y<arr.length; y++){
//         console.log(arr[y][m]);
//         sum1 += arr[y][m];
//         m++
//     }
//     console.log(sum2);
//     for(y=0; y<arr.length; y++){
//         console.log(arr[y][x]);
//         sum2 += arr[y][x];
//         x--
//     }
//     console.log(sum1);
//     let absoluteDifference= Math.abs(sum1 - sum2) 
//     console.log(absoluteDifference)
// }

// let arr1 =[[11,2,4],[4,5,6],[10, 8, -12]]

// compareTriplets(arr1)

// function diagonalDifference(arr) {
//     // Write your code here
//     let sum1=0, sum2 =0;
//     for(let x=0; x < arr.length; x++){
//         for(let y=0; y<arr.length; y++){
//         if(x == y){
//             sum1 += arr[x][y]
//         }
//         if((x+y) == (arr.length-1)){
//             sum2 += arr[x][y]
//         } 
//     }
//     }
//     return Math.abs(sum1-sum2)
// }

function plusMinus(arr) {
    // Write your code here
    let countp = 0;
    let countn = 0;
    let zero = 0;
    let div1;
    let div2;
    let div3;
    for(let i=0; i<arr.length; i++ ){
        if(arr[i]>0){
            countp++
            div1 = (countp/arr.length).toFixed(6)
        } else if(arr[i]<0) {
            countn++
            div2 = (countn/arr.length).toFixed(6)
        }else {
            zero++
            div3 = (zero/arr.length).toFixed(6)
        }
    }
    // console.log([countp, countn, zero]);
    return (`${div1}\n ${div2}\n ${div3}`)
    
}

let arr1 = [-4, 3, -9, 0, 4, 1]
console.log(plusMinus(arr1))