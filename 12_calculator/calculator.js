const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((acc, curr) => {
    return acc += curr;
  }, 0)
};

const multiply = function(array) {
  return array.reduce((acc, curr) => {
    return acc *= curr;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let val = num;
	if (num === 0 || num === 1) return 1
  else if (num > 1) {
    for (let i = num - 1; i > 0; i--) {
      val *= i;
    }
  }
  return val;
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
