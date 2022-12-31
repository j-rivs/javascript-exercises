const convertToCelsius = function() {

  let text = (arguments[0] - 32) * 5 / 9;
  if (text % 1 === 0) {
    text = Number(text.toFixed(0));
  } else {
    text = Number(text.toFixed(1));
  }

  return text;
};

const convertToFahrenheit = function() {
  let text = (arguments[0] * (9/5)) + 32;
  if (text % 1 === 0) {
    text = Number(text.toFixed(0));
  } else {
    text = Number(text.toFixed(1));
  }

  return text;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
