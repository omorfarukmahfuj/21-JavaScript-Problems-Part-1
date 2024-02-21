const today = new Date();
const date = new Date('2024-2-22');
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2050, 0, 21)
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toDateString());
console.log(specificDate.toISOString());
console.log(specificDate.toJSON());
console.log(specificDate.toLocaleDateString());
console.log(specificDate.toLocaleString('en-GB'));
console.log(specificDate.toLocaleTimeString());
console.log(specificDate.toUTCString());