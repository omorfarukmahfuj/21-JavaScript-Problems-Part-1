function celsiusTOFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

const temperature = celsiusTOFahrenheit(23);
console.log(temperature);