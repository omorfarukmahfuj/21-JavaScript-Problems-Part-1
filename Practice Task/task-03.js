function vowelsCounter(text) {
  text = text.toLowerCase();
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (char of text) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const demoText = 'Happy Birthday!!!'
console.log(vowelsCounter(demoText));