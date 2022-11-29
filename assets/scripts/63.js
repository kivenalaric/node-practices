// program to get a random item from an array

function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

const array = [5, 'kim', 4, 8];

const result = getRandomItem(array);
console.log(result);