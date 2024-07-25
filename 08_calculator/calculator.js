const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
  return array.reduce((total, num) => total * num);
};

const power = function(a, b) {
  let total = 1;
	for (let i = 0; i < b; i++){
    total *= a;
  }
  return total;
};

const factorial = function(n) {
	if (n === 0) return 1;
  let answer = 1;
  for (let i = 1; i <= n; i++){
    answer *= i;
  }
  return answer;
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
