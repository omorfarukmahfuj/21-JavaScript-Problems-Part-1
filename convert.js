// 12 inch 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

function inchToFeet2(inch) {
  const feet = parseInt(inch / 12);
  const inchRemaining = inch % 12;
  const result = feet + ' ft ' + inchRemaining + ' inch.';
  return result;
}
const demoHeight = inchToFeet(75);
const demoHeight2 = inchToFeet2(75);
console.log(demoHeight);
console.log(demoHeight2);