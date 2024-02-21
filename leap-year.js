function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  }
  else if (year % 400 === 0) {
    return true;
  }
  else {
    return false;
  }
}

const demoYear = isLeapYear(2024);
const demoYear2 = isLeapYear2(1900 );
console.log(demoYear);
console.log(demoYear2);