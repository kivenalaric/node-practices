function compareTriplets(arr) {
  let x = arr.length - 1,
    m = 0;
  let sum1 = 0,
    sum2 = 0;
  for (let y = 1; y < arr.length; y++) {
    sum2 += arr[y][m];
    m++;
  }

  for (let y = 1; y < arr.length; y++) {
    sum1 += arr[y][x - 1];
    x--;
  }
  let absoluteDifference = Math.abs(sum2 - sum1);
  console.log(absoluteDifference);
}

let arr1 = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]];

compareTriplets(arr1);
