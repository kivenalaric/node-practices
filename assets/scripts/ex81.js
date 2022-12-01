function trimString(word) {
  for (let i = 0; i < word.length; i++) {
    if ((i = 2)) {
      let result = word.split(word[i]);
      let result2 = result.pop();
      return result2;
    }
  }
}

const word2 = "ggfkyu";

console.log(trimString(word2));
