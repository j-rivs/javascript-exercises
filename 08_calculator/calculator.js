const add = function(a, b) {
  return (a + b);
};

const subtract = function(a, b) {
  return (a - b);
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  
  const sum = array.reduce((total, mult) => {
    return total * mult
  }, 1)

  return sum;
};

const power = function(a, b) {
  let hold = a;
	for (let i = 1; i < b; i++) {
    hold *= a;
  }

  return hold;
};

const factorial = function(num) {
  let sum = num;

  if (num !== 0) {
    for (let i = 1; i < num; i++) {
      sum *= i;
    }
  
    return sum;
  } else {
    sum = 1;

    return sum;
  }
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
