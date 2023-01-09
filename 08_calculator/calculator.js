const add = function() {
	let a = arguments[0];
  let b = arguments[1];

  return (a + b);
};

const subtract = function() {
	let a = arguments[0];
  let b = arguments[1];

  return (a - b);
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function() {
  let a = arguments[0];
  let b = arguments[1];

  return(a * b);
};

const power = function() {
	let a = arguments[0];
  let b = arguments[1];

  let pow = a;

  for (let i = 0; i < b; i++) {
    pow *= a;
  }

  return pow;
};

const factorial = function() {
	let a = arguments[0];

  let sum = a;
  for (let i = 1; i < a; i++) {
    sum *= i;
  }

  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
