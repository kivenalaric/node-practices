function countVowels(word) {
  word = word.toLowerCase();
  let count = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < word.length; i++) {
    if (vowel.includes(word[i])) {
      count++;
    }
  }
  return count;
}

const word1 = "helloE";

console.log(countVowels(word1));
