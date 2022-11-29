// const types = ["Spades", "Diamonds", "Club", "Heart"];
// const values = ["Ace","2", "3", "4", "5", "6", "7", "8", "9", "10","Jack","Queen", "King"];
// //array to contain cards
// let deck = [];

// //creating card deck 
// for (let i = 0; i < types.length; i++) {
//     for (let x = 0; x < values.length; x++) {
//         let card = { Value: values[x], Suit: types[i] };
//         deck.push(card);
//     }
// }

// //shuffling of card deck 
// for (let i = deck.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * i);
//     let temp = deck[i];
//     deck[i] = deck[j];
//     deck[j] = temp;
// }

// //output 

// for (let i = 0; i < 8; i++) {
//     console.log(`${deck[i].Value} of ${deck[i].Suit}`)
// }
