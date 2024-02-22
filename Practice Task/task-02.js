function countOccurrences(numbers, target) {
  let count = 0;

  for (number of numbers) {
    if (number === target) {
      count++;
    }
  }
  return count;
}

const numbers = [5, 6, 11, 12, 98, 5];
const target = 5;

console.log(countOccurrences(numbers, target));