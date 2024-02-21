function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      odds.push(number);
    }
  }

  let sum = 0;
  for (const number of odds) {
    sum += number;
  }

  const avg = sum / odds.length;
  return avg;
}

const numbers = [42, 13, 58, 65, 81];
const avg = oddAverage(numbers);
console.log('average of the odd number is: ', avg);