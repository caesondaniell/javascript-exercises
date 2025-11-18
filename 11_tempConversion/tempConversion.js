const convertToCelsius = function(temp) {
  const celsius = (temp - 32) * (5/9);
  if (Number.isInteger(celsius)) return celsius;
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  const fahrenheit = temp * (9/5) + 32;
  if (Number.isInteger(fahrenheit)) return fahrenheit;
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
