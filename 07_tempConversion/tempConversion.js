const convertToCelsius = function(F) {
  let celc = (((F - 32) * (5/9)))
  return Math.round(celc * 10) / 10;
};

const convertToFahrenheit = function(C) {
  let far = (((C * (9/5)) + 32))
  return Math.round(far * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
