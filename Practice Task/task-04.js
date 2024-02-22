function findLongestWord(str) {
  const words = str.split(" ");

  let longestWord = " ";
  let maxLength = 0;

  for (const word of words) {
    if (word.length > maxLength) {
      longestWord = word;
      maxLength = word.length;
    }
  }

  return longestWord;
}

const sampleInput = "I am learning Programming to become a programmer";

console.log(findLongestWord(sampleInput));